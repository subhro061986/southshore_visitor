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

const ManageLeadership = () => {
    // From context
    const { createLeader, allLeader, getLeaderById, editLeader } = AdminProfile();
    // State for modal close/open
    const [addModal, setAddModal] = useState(false);
    // States for modal inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [linkedinLink, setLinkedinLink] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imgFileExtension, setImgFileExtension] = useState("");

    const [existingId, setExistingId] = useState(0)
    const [modalTitle, setModalTitle] = useState('')

    const [selectedMainOption, setSelectedMainOption] = useState('');
    const [isTeamSelected, setIsTeamSelected] = useState(false);
    const [selectedSubOption, setSelectedSubOption] = useState('');

    const [minPageNo, setMinPageNo] = useState(0)
    const [maxPageNo, setMaxPageNo] = useState(10)
    const [pageNumber, setPageNumber] = useState(1)

    const handleMainDropdownChange = (e) => {
        const value = e.target.value;
        setSelectedMainOption(value);

        // Open the secondary dropdown only if "Team" is selected
        if (value === '3') {
            setIsTeamSelected(true);
        } else {
            setIsTeamSelected(false);
        }
    };

    const handleSubDropdownChange = (e) => {
        const value = e.target.value;
        // console.log("handleSubDropdownChange", value);
        setSelectedSubOption(value);
    };

    const openAddAddressModal = (id) => {
        setAddModal(true);
        if (id === 0) {
            setExistingId(0)
            setModalTitle("Add Leadership")
            setName('')
            setLinkedinLink('')
            setDescription('')
            setEmail('')
            setSelectedMainOption('')
            setSelectedSubOption('')
            setImage(null)
        }
        else {
            setExistingId(id)
            setModalTitle("Edit Banner")
            getLeadersById(id)
        }
    }

    const closeAddModal = () => {
        setAddModal(false);
        setIsTeamSelected(false);
    }

    const handleFormSubmission = async () => {
        
        if (existingId === 0) {
            let formData = new FormData();

            formData.append("personName", name);
            formData.append("email", email);
            formData.append("linkedin", linkedinLink);
            formData.append("description", description);
            formData.append("leadershipCategoryId", selectedMainOption);
            formData.append("teamCategoryId", selectedSubOption);
            formData.append("image", image);

            // console.log("formData", formData.entries);

           const resp = await createLeader(formData) 
            alert(resp.data.message);

        }
        else {
            let formData = new FormData();
            formData.append("personName", name);
            formData.append("email", email);
            formData.append("linkedin", linkedinLink);
            formData.append("description", description);
            formData.append("leadershipCategoryId", selectedMainOption);
            formData.append("teamCategoryId", selectedSubOption);
            formData.append("image", image);
            formData.append("imgFileExtension", imgFileExtension);


            const resp = await editLeader(existingId, formData)

            alert(resp.data.message);

        }

        closeAddModal();


    }

    const handleImageUpload = (e) => {
        // console.log("uploaded image", e.target.files[0]);
        // console.log("event", e);
        setImage(e.target.files[0]);
        setImgFileExtension(e.target.files[0].name.split('.').pop());
    }

    // get banner by id

    const getLeadersById = async (id) => {
        const response = await getLeaderById(id);
        let banner = response.data.output;
        // console.log("Banner by id : ", banner);
        setName(banner.personName)
        setLinkedinLink(banner.linkedin)
        setEmail(banner.email)
        setDescription(banner.description)
        setImage(banner.imgLink)
        setSelectedMainOption(banner.leadershipCategoryId)
        setSelectedSubOption(banner.teamCategoryId)
        if (selectedMainOption === 3) {
            setIsTeamSelected(true);
        } else {
            setIsTeamSelected(false);
        }

    }

    const act_inact_banner = async (evt, id) => {
        if (evt.target.checked === true) {
            //call restore
            let resp = await editLeader(id, { isActive: 1 });
            if (resp?.data?.message) {
                alert(resp?.data?.message);
            }
        }
        else {
            //call delete
            if (window.confirm("Do you want to deactivate the leader?") == true) {
                // console.log("You pressed OK!");
                let resp = await editLeader(id, { isActive: 0 });
                if (resp?.data?.message) {
                    alert(resp?.data?.message);
                }
            }

        }

    }

    const nextPage=()=>{
        window.scrollTo(0, 0)
        if(maxPageNo>=allLeader.length){
            alert("You are in last page")
        }
        else{
            setMaxPageNo(maxPageNo+10)
            setMinPageNo(minPageNo+10)
            setPageNumber(pageNumber+1)
        }
    }
    const prevPage=()=>{
        window.scrollTo(0, 0)
        if(pageNumber===1){
            alert("You are in first page")
        }
        else{
            setMaxPageNo(maxPageNo-10)
            setMinPageNo(minPageNo-10)
            setPageNumber(pageNumber-1)
        }
    }

    return (
        <>
            <div className="container-scroller">
                <Header title="Manage Leadership" />
                <div className="container-fluid page-body-wrapper">
                    <SideMenuBar />
                    <div className="main-panel">
                        <div className="content-wrapper">

                            <div className="card mb-4">
                                <div className="card-body card_body_height">
                                    <button className="btn btn-primary" onClick={() => openAddAddressModal(0)}>Add Leadership</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 grid-margin">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Leadership Details</h4>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th> Image </th>
                                                            <th> Name </th>
                                                            <th> Email Id </th>
                                                            <th> Description </th>
                                                            <th> Leadership Category </th>
                                                            <th> Team Category </th>
                                                            <th> LinkedIn Link </th>
                                                            <th> Status </th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {allLeader.sort((a, b) => b.isActive - a.isActive)?.slice(minPageNo,maxPageNo).map((data, index) => (
                                                            <tr
                                                                key={index}
                                                            >
                                                                <td>
                                                                    <img
                                                                        src={Config.API_URL + Config.LEADER_IMAGE_URL + "/" + data.imgLink + '?d=' + new Date()}
                                                                        height={36} width={56} className="me-2" alt="image" style={{width:'36px'}} />
                                                                </td>
                                                                <td>
                                                                    {data.personName}
                                                                </td>
                                                                <td style={{textWrap:'wrap', cursor:'pointer'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title={data?.email}>{data?.email!==""?data.email.substring(0, 15)+"..." : data?.email}</td>
                                                                <td style={{textWrap:'wrap', cursor:'pointer'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title={data?.description}>
                                                                    {data?.description!==""?data?.description.substring(0, 20)+"..." : data?.description}
                                                                </td>
                                                                <td style={{textWrap:'wrap', cursor:'pointer'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title={data?.leadershipCategoryName}>
                                                                    {data?.leadershipCategoryName!=="" && data.leadershipCategoryName.length>10?data.leadershipCategoryName.substring(0, 20)+"..." : data?.leadershipCategoryName}
                                                                </td>
                                                                <td style={{textWrap:'wrap', cursor:'pointer'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title={data?.teamCategoryName}>
                                                                    {data?.teamCategoryName!=="" && data.teamCategoryName.length>10?data.teamCategoryName.substring(0, 20)+"..." : data?.teamCategoryName}
                                                                </td>
                                                                <td style={{textWrap:'wrap', cursor:'pointer'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title={data?.linkedin}>
                                                                    {data?.linkedin!==""?data.linkedin.substring(0, 10)+"..." : data?.linkedin}
                                                                </td>
                                                                <td> <label
                                                                    className={`badge ${data.isActive === 1 ? 'badge-gradient-success' : 'badge-gradient-danger'}`}
                                                                >
                                                                    {data.isActive === 1 ? 'Active' : 'Inactive'}
                                                                </label> </td>
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
                                                {allLeader.length>10 &&
                                                <div 
                                                    className="mt-2"
                                                    style={{
                                                        display:'flex',
                                                        flexDirection:'row',
                                                        justifyContent:'space-between',
                                                        alignItems:'center'
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

            {/* Add/Edit Banner */}

            <Modal
                show={addModal}
                onHide={closeAddModal}
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row admin_modal">
                        <div class="col-12 stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <form className="forms-sample">
                                        <div className="form-group">
                                            <label>Select Leadership</label>
                                            <select className="form-select" aria-label="Default select example"
                                                id="main-dropdown"
                                                value={selectedMainOption}
                                                onChange={handleMainDropdownChange}
                                            >
                                                <option value="">Select an option</option>
                                                <option value="1">Management</option>
                                                <option value="2">Advisory Board</option>
                                                <option value="3">Team</option>
                                            </select>
                                        </div>
                                        {/* Submenu (only shown when "Team" is selected) */}
                                        {isTeamSelected && (
                                            <div className="form-group">
                                                <label htmlFor="team-dropdown">Team Menu </label>
                                                <select id="team-dropdown" className="form-select" aria-label="Default select example"
                                                value={selectedSubOption}
                                                onChange={handleSubDropdownChange}
                                                >
                                                    <option value="1">Editorial & Production</option>
                                                    <option value="2">Acquisition & Commissioning</option>
                                                    <option value="3">Sales</option>
                                                    <option value="4">Finance</option>
                                                    <option value="5">Sales Support</option>
                                                    <option value="6">Marketing</option>
                                                </select>
                                            </div>
                                        )}
                                        <div className="form-group">
                                            <label for="title">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="title">Email</label>
                                            <input type="text" className="form-control" id="name" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="subTitle">LinkedIn Link</label>
                                            <input type="text" className="form-control" id="linkedinlink" placeholder="LinkedIn Link" value={linkedinLink} onChange={(e) => { setLinkedinLink(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="redirectionURL">Description</label>
                                            <textarea rows="4" type="text" className="form-control" id="description" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <label for="formFileMutiple">Upload Image</label>
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

export default ManageLeadership;