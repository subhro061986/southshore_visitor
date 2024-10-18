import React, { useEffect, useState, } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Layout/Header";
import SideMenuBar from "../Layout/SideMenuBar";
import Footer from "../Layout/Footer";
import face1 from "../assets/images/faces/face1.jpg"
import { Modal } from "react-bootstrap";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { AdminProfile } from "../Context/Admincontext";
import Config from "../Config/Config.json";

const ManageOpenAccess = () => {
    // From context
    const { allOpenAccess, createOpen_Access, editOpenAccess, getOpenAccessById } = AdminProfile();
    const [addModal, setAddModal] = useState(false);
    const [title, setTitle] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const [pdffile, setPdfFile] = useState(null);
    const [existingId, setExistingId] = useState(0)
    const [modalTitle, setModalTitle] = useState('')

    const openAddAddressModal = (id) => {
        setAddModal(true)
        if (id === 0) {
            setExistingId(0)
            setModalTitle("Add Open Access")
            setTitle('')
            setCoverImage(null)
            setPdfFile(null)
        }
        else {
            setExistingId(id)
            setModalTitle("Edit Open Access")
            Get_OpenAccess_By_Id(id)
        }

    }

    const closeAddModal = () => {
        setAddModal(false)
    }

    const handleImageUpload = (e) => {
        console.log("uploaded coverImage", e.target.files[0]);
        console.log("event", e);
        setCoverImage(e.target.files[0]);
        //  setImgFileExtension(e.target.files[0].title.split('.').pop());
    }

    const pdfHandler = (e) => {
        // console.log("pdf", URL.createObjectURL(e.target.files[0]))
        setPdfFile(e.target.files[0])
    }

    const handleFormSubmission = async () => {
        if (existingId === 0) {
            let formData = new FormData();

            formData.append("title", title);
            formData.append("coverImage", coverImage);
            formData.append("pdfFile", pdffile);

            // console.log("formData", formData.entries);

            const resp = await createOpen_Access(formData)
            alert(resp.data.message);

        }
        else {
            let formData = new FormData();
            formData.append("title", title);
            formData.append("coverImage", coverImage);
            formData.append("pdfFile", pdffile);


            const resp = await editOpenAccess(existingId, formData)

            alert(resp.data.message);

        }

        closeAddModal();


    }

    const Get_OpenAccess_By_Id = async (id) => {
        const response = await getOpenAccessById(id);
        console.log("published title=", response);
        const resouce_by_id = response.data.output
        setExistingId(resouce_by_id?.id);
        setTitle(resouce_by_id?.title);
        setPdfFile(resouce_by_id?.downloadLink);
        setCoverImage(resouce_by_id?.imageLink);
    }

    const act_inact_pub_title = async (evt, id) => {
        if (evt.target.checked === true) {
            //call restore
            let resp = await editOpenAccess(id, {isActive: 1 });
            if (resp?.data?.message) {
                alert(resp?.data?.message);
            }
        }
        else {
            //call delete
            if (window.confirm("Do you want to deactivate the published title?") == true) {
                // console.log("You pressed OK!");
                let resp = await editOpenAccess(id, {isActive: 0 });
                if (resp?.data?.message) {
                    alert(resp?.data?.message);
                }
            }

        }

    }

    return (
        <>
            <div className="container-scroller">
                <Header title="Manage Open Access" />
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar />
                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="card mb-4">
                                <div className="card-body card_body_height">
                                    <button className="btn btn-primary" onClick={() => openAddAddressModal(0)}>Add Open Access</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Open Access Details</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th> Book Cover </th>
                                                            <th> Title </th>
                                                            <th> Download Link </th>
                                                            <th> Status </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allOpenAccess?.map((data, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    <img src={Config.API_URL + Config.Open_Access_URL + "/" + data.imageLink + '?d=' + new Date()} height={36} width={36} className="me-2" alt="image" />
                                                                </td>
                                                                <td> {data.title} </td>
                                                                <td>
                                                                    {data.downloadLink}
                                                                </td>
                                                                <td> <label className={`badge ${data.isActive === 1 ? 'badge-gradient-success' : 'badge-gradient-danger'}`}>{data.isActive === 1 ? 'Active' : 'Inactive'}</label> </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <MdOutlineEdit style={{ color: '#9a55ff', cursor: 'pointer' }} size={20}
                                                                            onClick={() => { openAddAddressModal(data?.id) }}
                                                                        />
                                                                        <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                            <input
                                                                                checked={data.isActive === 1 ? true : false}
                                                                                className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                                                onChange={(e) => act_inact_pub_title(e, data.id)}
                                                                            />
                                                                        </div>
                                                                        {/* <MdDeleteForever style={{ color: '#9a55ff' }} size={20} /> */}
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </div>
                </div>
            </div>

            {/* Add Banner */}

            <Modal
                show={addModal}
                onHide={closeAddModal}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row admin_modal">
                        <div class="col-12 stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label for="exampleInputName1">Title</label>
                                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label>Upload epdf</label>
                                            <input class="form-control" type="file" accept=".pdf" id="formFileMultiple" onChange={(e) => pdfHandler(e)} />
                                        </div>

                                        <div className="form-group">
                                            <label>Upload book cover</label>
                                            <input class="form-control" type="file" id="formFileMultiple" onChange={(e) => { handleImageUpload(e) }} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    {/* <div className="text-danger">Star marked fields are mandatory</div> */}
                    <button className="btn btn-gradient-primary"
                        onClick={handleFormSubmission}
                    // style={{ width: '20%' }}
                    >
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ManageOpenAccess;