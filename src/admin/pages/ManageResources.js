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

const ManageResources = () => {
    // From context
    const { createResource, allResources, allPublisherResources, editResource, getResourceById } = AdminProfile();
    // State for modal close/open
    const [addModal, setAddModal] = useState(false);
    // States for modal inputs
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [buyLink, setBuyLink] = useState("");
    const [publisher, setPublisher] = useState(0);
    const [publisherName, setPublisherName] = useState(0);
    const [coverImage, setCoverImage] = useState(null);
    const [pdffile, setPdfFile] = useState(null);

    const [existingId, setExistingId] = useState(0)
    const [modalTitle, setModalTitle] = useState('')



    const openAddModal = (id) => {
        setAddModal(true);
        if (id === 0) {
            setExistingId(0)
            setModalTitle("Add Resource")
            setTitle('')
            //     setBuyLink('')
            setPublisher('')
            setDescription('')
            setCoverImage(null)
            setPdfFile(null)
        }
        else {
            setExistingId(id);
            setModalTitle("Edit Resource");
            Get_Resource_By_Id(id);
        }
    }

    const closeAddModal = () => {
        setAddModal(false);
    }

    const handleFormSubmission = async () => {
        if (existingId === 0) {
            let formData = new FormData();

            formData.append("bookTitle", title);
            formData.append("coverImage", coverImage);
            formData.append("pdfFile", pdffile);
            formData.append("publisherId", publisher);
            formData.append("description", description);
            formData.append("publisherName", publisherName);

            // console.log("formData", formData.entries);

            const resp = await createResource(formData)
            if (resp?.data?.message) {
                alert(resp?.data?.message);
            }
            else if (resp?.message) {
                alert(resp?.message);
            }

        }
        else {
            let formData = new FormData();
            formData.append("bookTitle", title);
            formData.append("description", description);
            formData.append("buyLink", buyLink);
            formData.append("publisherId", publisher);
            formData.append("coverImage", coverImage);


            const resp = await editResource(existingId, formData)

            if (resp?.data?.message) {
                alert(resp?.data?.message);
            }
            else if (resp?.message) {
                alert(resp?.message);
            }

        }

        closeAddModal();


    }

    const handleImageUpload = (e) => {
        // console.log("uploaded coverImage", e.target.files[0]);
        // console.log("event", e);
        setCoverImage(e.target.files[0]);
        //  setImgFileExtension(e.target.files[0].title.split('.').pop());
    }

    const pdfHandler = (e) => {
        // console.log("pdf", URL.createObjectURL(e.target.files[0]))
        setPdfFile(e.target.files[0])
    }
    const PublisherHandler = (e) => {
        // console.log("publisher", e.target.value)
        // setPublisher(e.target.value)
        const selectedPublisherId = e.target.value;
        const selectedPublisherName = e.target.options[e.target.selectedIndex].text;
        // console.log("publisher name", selectedPublisherName)
        setPublisher(selectedPublisherId);
        setPublisherName(selectedPublisherName);
    }

    // get banner by id

    const Get_Resource_By_Id = async (id) => {
        const response = await getResourceById(id);
        // console.log("published title=", response);
        const resouce_by_id = response.data.output
        setExistingId(resouce_by_id?.id);
        setTitle(resouce_by_id?.bookTitle);
        setPublisher(resouce_by_id?.publisherId);
        setDescription(resouce_by_id?.description);
        setPdfFile(resouce_by_id?.downloadLink);
        setCoverImage(resouce_by_id?.coverImageLink);
    }

    const act_inact_pub_title = async (evt, id) => {
        if (evt.target.checked === true) {
            //call restore
            let resp = await editResource(id, { isActive: 1 });
            if (resp?.data?.message) {
                alert(resp?.data?.message);
            }
            else if (resp?.message) {
                alert(resp?.message);
            }
        }
        else {
            //call delete
            if (window.confirm("Do you want to deactivate the published title?") == true) {
                // console.log("You pressed OK!");
                let resp = await editResource(id, { isActive: 0 });
                if (resp?.data?.message) {
                    alert(resp?.data?.message);
                }
                else if (resp?.message) {
                    alert(resp?.message);
                }
            }

        }

    }

    return (
        <>
            <div className="container-scroller">
                <Header title="Manage Resources" />
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar />
                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="card mb-4">
                                <div className="card-body card_body_height">
                                    <button className="btn btn-primary" onClick={() => openAddModal(0)}>Add Resources</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Resource Details</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th> Book Cover </th>
                                                            {/* <th> Title </th> */}
                                                            <th> Publisher </th>
                                                            <th> Description </th>
                                                            <th> Status </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allResources?.map((data, index) => (
                                                            <tr
                                                                key={index}
                                                            >
                                                                <td>
                                                                    <img
                                                                        src={Config.API_URL + Config.RESOURCE_IMAGE_URL + "/" + data.coverImageLink + '?d=' + new Date()}
                                                                        // src={face1}
                                                                        style={{ width: 36 }}
                                                                        height={36} width={56} className="me-2" alt="coverImage" />
                                                                </td>
                                                                {/* <td>
                                                                    {data?.bookTitle}
                                                                </td> */}
                                                                <td>
                                                                    {data?.publisherName}
                                                                </td>
                                                                <td style={{textWrap:'wrap', cursor:'pointer'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title={data?.description}>
                                                                    {/* {data?.description} */}
                                                                    {data?.description!==""?data?.description.substring(0, 20)+"..." : data?.description}
                                                                </td>
                                                                <td> <label
                                                                    className={`badge ${data.isActive === 1 ? 'badge-gradient-success' : 'badge-gradient-danger'}`}
                                                                >
                                                                    {data?.isActive === 1 ? 'Active' : 'Inactive'}
                                                                </label> </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <MdOutlineEdit style={{ color: '#9a55ff', cursor: 'pointer' }} size={20}
                                                                            onClick={() => { openAddModal(data?.id) }}
                                                                        />
                                                                        <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                            <input style={{ cursor: 'pointer' }}
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
                        <div className="col-12 stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label>Select Resource Type</label>
                                            <select className="form-select" aria-label="Default select example" onChange={(e) => PublisherHandler(e)}>
                                                <option disabled selected>--Select--</option>
                                                {
                                                    allPublisherResources?.map((data, index) => (
                                                        <option
                                                            value={data.id} key={index}
                                                            selected={publisher === data.id ? true : false}
                                                        >
                                                            {data.publisherName}
                                                        </option>

                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputName1">Title</label>
                                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Book Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label>Upload Book Cover</label>
                                            <input className="form-control" type="file" id="formFileMultiple" onChange={(e) => { handleImageUpload(e) }} />
                                        </div>
                                        <div className="form-group">
                                            <label>Upload Pdf</label>
                                            <input className="form-control" type="file" accept=".pdf" id="formFile" onChange={(e) => pdfHandler(e)} />
                                        </div>

                                        <div className="form-group">
                                            <label for="exampleInputEmail3">Description</label>
                                            <textarea rows="4" type="text" className="form-control" id="exampleInputEmail3" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
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

export default ManageResources;