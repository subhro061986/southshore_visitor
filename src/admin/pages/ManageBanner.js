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

const ManageBanner = () => {
    // From context
    const { createBanner, allBanner, getBannerById, editBanner } = AdminProfile();
    // State for modal close/open
    const [addModal, setAddModal] = useState(false);
    // States for modal inputs
    const [addModalTitle, setAddModalTitle] = useState("");
    const [addModalSubTitle, setAddModalSubTitle] = useState("");
    const [addModalSequenceNumber, setAddModalSequenceNumber] = useState(-1);
    const [addModalRedirectionURL, setAddModalRedirectionURL] = useState("#");
    const [addModalImage, setAddModalImage] = useState(null);

    const [existingId, setExistingId] = useState(0)
    const [modalTitle, setModalTitle] = useState('')

    const openAddAddressModal = (id) => {
        setAddModal(true);
        if (id === 0) {
            setExistingId(0)
            setModalTitle("Add Banner")
            setAddModalTitle('')
            setAddModalSubTitle('')
            setAddModalSequenceNumber(-1)
            setAddModalRedirectionURL('#')
            setAddModalImage(null)
        }
        else {
            setExistingId(id)
            setModalTitle("Edit Banner")
            getBannersById(id)
        }
    }

    const closeAddModal = () => {
        setAddModal(false);
    }

    const handleFormSubmission = async () => {
        if (existingId === 0) {
            let formData = new FormData();

            formData.append("title", addModalTitle);
            formData.append("subTitle", addModalSubTitle);
            formData.append("sequenceNumber", addModalSequenceNumber);
            formData.append("redirectURL", addModalRedirectionURL);
            formData.append("image", addModalImage);

            await createBanner(formData)
            
        }
        else {
            let formData = new FormData();
            formData.append("title", addModalTitle);
            formData.append("subTitle", addModalSubTitle);
            formData.append("sequenceNumber", addModalSequenceNumber);
            formData.append("redirectURL", addModalRedirectionURL);
            formData.append("image", addModalImage);

            await editBanner(existingId, formData)
            
        }

        closeAddModal();

        
    }

    const handleImageUpload = (e) => {
        console.log("uploaded image", e.target.files[0]);
        console.log("event", e);
        setAddModalImage(e.target.files[0]);
    }

    // get banner by id

    const getBannersById = async (id) => {
        const response = await getBannerById(id);
        let banner = response.data.output;
        console.log("Banner by id : ", banner);
        setAddModalTitle(banner.title)
        setAddModalSubTitle(banner.subTitle)
        setAddModalSequenceNumber(banner.sequenceNumber)
        setAddModalRedirectionURL(banner.redirectURL)
        setAddModalImage(banner.imgLink)

    }

    const act_inact_banner = async (evt,id) => {
        if (evt.target.checked === true) {
            //call restore
            let resp = await editBanner(id, {isActive:1});
          }
          else {
            //call delete
            if (window.confirm("Do you want to deactivate the banner?") == true) {
              // console.log("You pressed OK!");
              let resp = await editBanner(id, {isActive:0});
            }
      
          }

    }

    return (
        <>
            <div className="container-scroller">
                <Header title="Manage Banner" />
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar />
                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="card mb-4">
                                <div className="card-body card_body_height">
                                    <button className="btn btn-primary" onClick={() => openAddAddressModal(0)}>Add Banner</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Banner Details</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th> Image </th>
                                                            <th> Title </th>
                                                            <th> Subtitle </th>
                                                            <th> Redirection Url </th>
                                                            <th> Status </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allBanner?.map((data, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    <img src={Config.API_URL + Config.BANNER_URL + "/" + data.imgLink + '?d=' + new Date()} height={36} width={56} className="me-2" alt="image" />
                                                                </td>
                                                                <td> {data.title} </td>
                                                                <td>
                                                                    {data.subTitle}
                                                                </td>
                                                                <td> {data.redirectURL} </td>
                                                                <td> <label className={`badge ${data.isActive === 1 ? 'badge-gradient-success' : 'badge-gradient-danger'}`}>{data.isActive === 1 ? 'Active' : 'Inactive'}</label> </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <MdOutlineEdit style={{ color: '#9a55ff', cursor: 'pointer' }} size={20}
                                                                            onClick={() => openAddAddressModal(data.id)}
                                                                        />
                                                                        <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                            <input
                                                                                checked={data.isActive === 1 ? true : false}
                                                                                className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                                                onChange={(e) => act_inact_banner(e, data.id)}
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

            {/* Add/Edit Banner */}

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
                                            <label for="title">Title</label>
                                            <input type="text" className="form-control" id="title" placeholder="Name" value={addModalTitle} onChange={(e) => { setAddModalTitle(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="subTitle">Sub Title</label>
                                            <input type="text" className="form-control" id="subTitle" placeholder="Sub Title" value={addModalSubTitle} onChange={(e) => { setAddModalSubTitle(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="sequenceNumber">Sequence Number</label>
                                            <input type="number" className="form-control" id="sequenceNumber" placeholder="Sequence Number" value={addModalSequenceNumber} onChange={(e) => { setAddModalSequenceNumber(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="redirectionURL">Redirection Url</label>
                                            <input type="text" className="form-control" id="redirectionURL" placeholder="Redirect Link" value={addModalRedirectionURL} onChange={(e) => { setAddModalRedirectionURL(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="formFileMutiple">Upload Banner</label>
                                            <input class="form-control" accept=".jpg, .png, .jpeg, .svg" type="file" id="formFileMultiple" onChange={(e) => { handleImageUpload(e) }} />
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
                        onClick={() => { handleFormSubmission() }}
                    // style={{ width: '20%' }}
                    >
                        Save
                    </button>
                </Modal.Footer>
            </Modal>


        </>
    )
}

export default ManageBanner;