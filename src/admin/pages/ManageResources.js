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
    const { createPublishedTitle, allResources, allPublisherResources, editPublishedTitle, getPublishedTitleById } = AdminProfile();
    // State for modal close/open
    const [addModal, setAddModal] = useState(false);
    // States for modal inputs
    const [title, setTitle] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const [buyLink, setBuyLink] = useState("");
    const [publisher, setPublisher] = useState(0);
    const [image, setImage] = useState(null);
    const [pdffile, setPdfFile] = useState('');

    const [existingId, setExistingId] = useState(0)
    const [modalTitle, setModalTitle] = useState('')



    const openAddModal = () => {
        setAddModal(true);
        // if (id === 0) {
        //     setExistingId(0)
        setModalTitle("Add Resource")
        //     setTitle('')
        //     setBuyLink('')
        //     setPublisher('')
        //     setDownloadLink('')
        //     setImage(null)
        //  }
        //  else {
        //     setExistingId(id);
        //     setModalTitle("Edit Resource");
        //     setPublishedTitleDetails(id);
        //  }
    }

    const closeAddModal = () => {
        setAddModal(false);
    }

    const handleFormSubmission = async () => {
        // if (existingId === 0) {
            let formData = new FormData();

            formData.append("title", title);
            formData.append("authorName", downloadLink);
            formData.append("buyLink", buyLink);
            formData.append("publisherId", publisher);
            formData.append("image", image);

            // console.log("formData", formData.entries);

            const resp = await createPublishedTitle(formData)
            // alert(resp.data.message);

        // }
        // else {
        //     let formData = new FormData();
        //     formData.append("title", title);
        //     formData.append("authorName", downloadLink);
        //     formData.append("buyLink", buyLink);
        //     formData.append("publisherId", publisher);
        //     formData.append("image", image);


        //     const resp = await editPublishedTitle(existingId, formData)

        //     // alert(resp.data.message);

        // }

        closeAddModal();


    }

    const handleImageUpload = (e) => {
        console.log("uploaded image", e.target.files[0]);
        console.log("event", e);
        setImage(e.target.files[0]);
        //  setImgFileExtension(e.target.files[0].title.split('.').pop());
    }

    const pdfHandler = (e) => {
        // console.log("pdf", URL.createObjectURL(e.target.files[0]))
        setPdfFile(e.target.files[0])
    }

    // get banner by id

    const setPublishedTitleDetails = async (id) => {
        const response = await getPublishedTitleById(id);
        let publishedTitle = response?.data;
        console.log("published title=", publishedTitle);
        setExistingId(publishedTitle?.id);
        setTitle(publishedTitle?.title);
        setBuyLink(publishedTitle?.buyLink);
        setDownloadLink(publishedTitle?.authorName);
        setPublisher(publishedTitle?.publisherId);
        setImage(publishedTitle?.imgLink);
    }

    const act_inact_pub_title = async (evt, id) => {
        if (evt.target.checked === true) {
            //call restore
            let resp = await editPublishedTitle(id, { title, downloadLink, buyLink, publisher, image, isActive: 1 });
        }
        else {
            //call delete
            if (window.confirm("Do you want to deactivate the published title?") == true) {
                // console.log("You pressed OK!");
                let resp = await editPublishedTitle(id, { title, downloadLink, buyLink, publisher, image, isActive: 0 });
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
                                    <button className="btn btn-primary" onClick={() => openAddModal()}>Add Resources</button>
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
                                                            <th> Title </th>
                                                            <th> Publisher </th>
                                                            <th> Download Link </th>
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
                                                                    height={36} width={56} className="me-2" alt="image" />
                                                            </td>
                                                            <td>
                                                                {data?.bookTitle}
                                                            </td>
                                                            <td>
                                                                {data?.publisherName}
                                                            </td>
                                                            <td>
                                                                {data?.downloadLink} 
                                                            </td>
                                                            <td> <label
                                                            className={`badge ${data.isActive === 1 ? 'badge-gradient-success' : 'badge-gradient-danger'}`}
                                                            >
                                                                {data?.isActive === 1 ? 'Active' : 'Inactive'}
                                                            </label> </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <MdOutlineEdit style={{ color: '#9a55ff', cursor: 'pointer' }} size={20}
                                                                    // onClick={() => {openAddModal(data?.id)}}
                                                                    />
                                                                    <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                        <input style={{ cursor: 'pointer' }}
                                                                            checked={data.isActive === 1 ? true : false}
                                                                            className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                                        // onChange={(e) => act_inact_pub_title(e, data.id)}
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
                                            <select className="form-select" aria-label="Default select example" onChange={(e) => setPublisher(e.target.value)}>
                                                <option disabled selected>--Select--</option>
                                                {
                                                    allPublisherResources?.map((data, index) => (
                                                <option
                                                value={data.id} key={index} 
                                                // selected={publisher === data.id ? true : false}
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
                                            <label for="exampleInputEmail3">Download Link</label>
                                            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="Buy Link" value={downloadLink} onChange={(e) => { setDownloadLink(e.target.value) }} />
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
                    // onClick={handleFormSubmission}
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