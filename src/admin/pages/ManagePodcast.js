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

const ManagePodcast = () => {
    // From context
    const { allPodcasts,createPodcast } = AdminProfile();
    // State for modal close/open
    const [addModal, setAddModal] = useState(false);
    // States for modal inputs
    const [urlLink, setUrlLink] = useState("");
    const [modalTitle, setModalTitle] = useState('')

   
    const openAddAddressModal = () => {
        setUrlLink("");
        setAddModal(true);
    }
    const closeAddModal = () => {
        setAddModal(false);
    }

    const handleFormSubmission = async() => {
        if(urlLink === ""){
            alert("Please enter the URL");
            return;
        }
        else{
            let senData={
                url: urlLink,
             }
            const resp=await createPodcast(senData);
            alert(resp.data.message)
            closeAddModal();
        }
           
    }

    // get banner by id

    
    

    

    return (
        <>
            <div className="container-scroller">
                <Header title="Manage Podcast" />
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar />
                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="card mb-4">
                                <div className="card-body card_body_height">
                                    <button className="btn btn-primary" onClick={() => openAddAddressModal()}>Add Podcast</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Podcast Details</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th> Url </th>
                                                            
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allPodcasts.map((podcast, index) => (
                                                        <tr
                                                            key={index}
                                                        >
                                                            <td>{podcast.url} </td>

                                                            <td>
                                                                <label 
                                                                // className={`badge ${data.isActive === 1 ? 'badge-gradient-success' : 'badge-gradient-danger'}`}
                                                                >
                                                                    {/* {data.isActive === 1 ? 'Active' : 'Inactive'} */}
                                                                    Active
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    
                                                                    <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                        <input
                                                                            // checked={data.isActive === 1 ? true : false}
                                                                            className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                                            // onChange={(e) => act_inact_banner(e, data.id)}
                                                                        />
                                                                    </div>
                                                                    
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
                                            <label for="title">Url</label>
                                            <input type="text" 
                                            className="form-control" 
                                            id="title" 
                                            placeholder="Name" 
                                            value={urlLink} 
                                            onChange={(e) => { setUrlLink(e.target.value) }} />
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

export default ManagePodcast;