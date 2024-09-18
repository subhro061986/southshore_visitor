import React, { useEffect, useState, } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Layout/Header";
import SideMenuBar from "../Layout/SideMenuBar";
import Footer from "../Layout/Footer";
import face1 from "../assets/images/faces/face1.jpg"
import { Modal } from "react-bootstrap";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const ManagePublishedTitles = () => {
    const [addModal, setAddModal] = useState(false);

    const openAddModal = () => {
        setAddModal(true)

    }

    const closeAddModal = () => {
        setAddModal(false)
    }

    return (
        <>
            <div className="container-scroller">
                <Header title="Manage Published Titles" />
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar />
                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="card mb-4">
                                <div className="card-body card_body_height">
                                    <button className="btn btn-primary" onClick={openAddModal}>Add Published Titles</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Published Titles Details</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th> Book Cover </th>
                                                            <th> Name </th>
                                                            <th> Author Name </th>
                                                            <th> Publisher Name </th>
                                                            <th> Buy Link </th>
                                                            <th> Status </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img src={face1} height={36} width={36} className="me-2" alt="image" />
                                                            </td>
                                                            <td> Fund is not recieved </td>
                                                            <td>
                                                                WD-12345
                                                            </td>
                                                            <td> Dec 5, 2017 </td>
                                                            <td> Dec 5, 2017 </td>
                                                            <td> <label className="badge badge-gradient-success">Active</label> </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <MdOutlineEdit style={{ color: '#9a55ff' }} size={20} />
                                                                    <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                        <input
                                                                            // checked={data.isactive === 1 ? true : false} 
                                                                            className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                                        // onChange={(e) => act_inact_dist(data.isactive, data.id)}
                                                                        />
                                                                    </div>
                                                                    <MdDeleteForever style={{ color: '#9a55ff' }} size={20} />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={face1} height={36} width={36} className="me-2" alt="image" />
                                                            </td>
                                                            <td> Fund is not recieved </td>
                                                            <td>
                                                                WD-12345
                                                            </td>
                                                            <td> Dec 5, 2017 </td>
                                                            <td> Dec 5, 2017 </td>
                                                            <td> <label className="badge badge-gradient-danger">Inactive</label> </td>
                                                            <td>
                                                                <div className="d-flex align-items-center">
                                                                    <MdOutlineEdit style={{ color: '#9a55ff' }} size={20} />
                                                                    <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                        <input
                                                                            // checked={data.isactive === 1 ? true : false} 
                                                                            className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                                        // onChange={(e) => act_inact_dist(data.isactive, data.id)}
                                                                        />
                                                                    </div>
                                                                    <MdDeleteForever style={{ color: '#9a55ff' }} size={20} />
                                                                </div>
                                                            </td>
                                                        </tr>
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
                    <Modal.Title>Add Published Titles</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row admin_modal">
                        <div className="col-12 stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label for="exampleInputName1">Title</label>
                                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Book Title" />
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail3">Author Name</label>
                                            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="Author Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Upload Book Cover</label>
                                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                                        </div>
                                        <div className="form-group">
                                            <label>Select Publisher</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option value="AL">Juris Press</option>
                                                <option value="WY">Thomson Reuters</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail3">Buy Link</label>
                                            <input type="text" className="form-control" id="exampleInputEmail3" placeholder="Buy Link" />
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
                    // onClick={saveShipping}
                    // style={{ width: '20%' }}
                    >
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ManagePublishedTitles;