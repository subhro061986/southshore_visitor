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

const ManageSnippets = () => {
    // From context
    const { createSnippet, allSnippets, editActiveInactiveSnippet, allPublisherResources, editResource, getResourceById } = AdminProfile();
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

    const [minPageNo, setMinPageNo] = useState(0)
    const [maxPageNo, setMaxPageNo] = useState(10)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        console.log("all snippets :", allSnippets)
    }, []);

    // const openAddModal = (id) => {
    const openAddModal = () => {
        setAddModal(true);
        // if (id === 0) {
        // setExistingId(0)
        setModalTitle("Add Snippet")
        // setTitle('')
        //     setBuyLink('')
        // setPublisher('')
        // setDescription('')
        setCoverImage(null)
        setPdfFile(null)
        // }
        // else {
        //     setExistingId(id);
        //     setModalTitle("Edit Snippet");
        //     Get_Resource_By_Id(id);
        // }
    }

    const closeAddModal = () => {
        setAddModal(false);
    }

    const handleFormSubmission = async () => {
        // if (existingId === 0) {
        const currentDate = new Date().toISOString().split("T")[0]; // Gets current date in ISO format
        let formData = new FormData();

        // formData.append("bookTitle", title);
        formData.append("coverImage", coverImage);
        formData.append("pdfFile", pdffile);
        // formData.append("publisherId", publisher);
        formData.append("date", currentDate);
        formData.append("isActive", 1);

        // console.log("formData", formData.entries);
        if (coverImage !== null && pdffile !== null) {
            const resp = await createSnippet(formData)
            if (resp?.data?.message) {
                alert(resp?.data?.message);
            }
            else if (resp?.message) {
                alert(resp?.message);
            }
        }
        else {
            alert("Please upload both cover image and PDF file");
        }
        // }
        // else {
        //     let formData = new FormData();
        //     formData.append("bookTitle", title);
        //     formData.append("description", description);
        //     formData.append("pdfFile", pdffile);
        //     formData.append("publisherId", publisher);
        //     formData.append("coverImage", coverImage);


        //     const resp = await editResource(existingId, formData)

        //     if (resp?.data?.message) {
        //         alert(resp?.data?.message);
        //     }
        //     else if (resp?.message) {
        //         alert(resp?.message);
        //     }

        // }

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




    const nextPage = () => {
        window.scrollTo(0, 0)
        if (maxPageNo >= allSnippets.length) {
            alert("You are in last page")
        }
        else {
            setMaxPageNo(maxPageNo + 10)
            setMinPageNo(minPageNo + 10)
            setPageNumber(pageNumber + 1)
        }
    }
    const prevPage = () => {
        window.scrollTo(0, 0)
        if (pageNumber === 1) {
            alert("You are in first page")
        }
        else {
            setMaxPageNo(maxPageNo - 10)
            setMinPageNo(minPageNo - 10)
            setPageNumber(pageNumber - 1)
        }
    }

    return (
        <>
            <div className="container-scroller">
                <Header title="Manage Snippets" />
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar />
                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="card mb-4">
                                <div className="card-body card_body_height">
                                    <button className="btn btn-primary" onClick={() => openAddModal()}>Add Snippets</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Snippet Details</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th> Snippet Cover </th>
                                                            {/* <th> Title </th> */}
                                                            <th> Published Date </th>
                                                            <th> PDF </th>
                                                            <th> Status </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allSnippets.sort((a, b) => b.is_active - a.is_active)?.slice(minPageNo, maxPageNo).map((data, index) => (
                                                            <tr
                                                                key={index}
                                                            >
                                                                <td>
                                                                    <img
                                                                        src={Config.API_URL + Config.SNIPPET_IMAGE_URL + "/" + data.image_file_name + '?d=' + new Date()}
                                                                        // src={face1}
                                                                        style={{ width: 36 }}
                                                                        height={36} width={56} className="me-2" alt="coverImage" />
                                                                </td>
                                                                {/* <td>
                                                                    {data?.bookTitle}
                                                                </td> */}
                                                                <td>
                                                                    {data?.published_date}
                                                                </td>
                                                                <td>
                                                                    {data.pdf_file_name}
                                                                </td>
                                                                <td> <label
                                                                    className={`badge ${data.is_active === 1 ? 'badge-gradient-success' : 'badge-gradient-danger'}`}
                                                                >
                                                                    {data?.is_active === 1 ? 'Active' : 'Inactive'}
                                                                </label> </td>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        {/* <MdOutlineEdit style={{ color: '#9a55ff', cursor: 'pointer' }} size={20}
                                                                            onClick={() => { openAddModal(data?.id) }}
                                                                        /> */}
                                                                        <div className="form-check form-switch" style={{ marginRight: 5, marginLeft: 45 }} >
                                                                            <input style={{ cursor: 'pointer' }}
                                                                                checked={data.is_active === 1 ? true : false}
                                                                                className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                                                                onChange={() => editActiveInactiveSnippet(data.id)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                {allSnippets.length > 10 &&
                                                    <div
                                                        className="mt-2"
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <button
                                                            className="btn btn-outline-info"
                                                            onClick={prevPage}
                                                        >Previous</button>
                                                        <div>Page : {pageNumber}</div>
                                                        <button
                                                            className="btn btn-outline-info"
                                                            onClick={nextPage}
                                                        >Next</button>
                                                    </div>
                                                }
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
                                        {/* <div className="form-group">
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
                                        </div> */}
                                        {/* <div className="form-group">
                                            <label for="exampleInputName1">Published Date</label>
                                            <input type="text" className="form-control" id="exampleInputName1" placeholder="Book Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                        </div> */}
                                        <div className="form-group">
                                            <label>Upload Snippet Cover<span style={{color:'red'}}>(*)</span></label>
                                            <input className="form-control" type="file" id="formFileMultiple" onChange={(e) => { handleImageUpload(e) }} />
                                        </div>
                                        <div className="form-group">
                                            <label>Upload PDF<span style={{color:'red'}}>(*)</span></label>
                                            <input className="form-control" type="file" accept=".pdf" id="formFile" onChange={(e) => pdfHandler(e)} />
                                        </div>

                                        {/* <div className="form-group">
                                            <label for="exampleInputEmail3">Description</label>
                                            <textarea rows="4" type="text" className="form-control" id="exampleInputEmail3" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                                        </div> */}
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

export default ManageSnippets;