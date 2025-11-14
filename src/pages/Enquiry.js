import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import arrow_right from '../assets/images/arrow-right.png'
import NavBarSouthsore from "../components/NavBarSouthshore";
import { UserProfile } from "../Context/Usercontext";
import Config from "../Config/Config.json";


const Enquiry = () => {

    const { Enquiry } = UserProfile()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [publisher, setPublisher] = useState('');
    const [message, setMessage] = useState('');

    const submit = async() => {
        var json = {
            name:name,
            email:email,
            publisherName:'',
            contactNo:contactNo,
            message:message

        }
        const resp = await Enquiry(json)
        alert(resp.data.message);
        // console.log('publish resp', resp)
    }




    return (
        <>
            <div className="container">
                <Header/>
                <NavBarSouthsore />

                <div className="margin-x">
                    <div className="text-center mt-3">
                        <div className="screen_head">Enquiry</div>
                        {/* <div className="screen_sub_head mt-1">Reach out to us if you have an idea for a book or if you have a manuscript ready for publishing. Please write to us at <span style={{ fontWeight: '700' }}>trindia@southshore.in </span> with the following information and we will reach out to you at the earliest.</div> */}
                        <div className="screen_sub_head mt-1">For any clarifications or further information please write to us at <span style={{ fontWeight: '700' }}>knowledgePath@southshore.in </span>with the following information and we will reach out to you at the earliest.</div>
                    </div>
                    <div className="row g-3 my-5">
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Name</label>
                                <input type="text" className="form-control input_style" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Contact No.</label>
                                <input type="text" className="form-control input_style" placeholder="Contact No." value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Email ID</label>
                                <input type="email" className="form-control input_style" placeholder="Email ID" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            {/* <div className="mb-4">
                                <label className="form-label label_font mb-2">Publisher</label>
                                <input type="text" className="form-control input_style" placeholder="Publisher" value={publisher} onChange={(e) => { setPublisher(e.target.value) }} />
                            </div> */}
                        </div>

                        <div className="col-12">
                            <label className="form-label label_font mb-2">Your Message</label>
                            <textarea type="text" className="form-control textarea_style" rows="6" placeholder="" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                        </div>


                        <div className="d-flex justify-content-center mt-5 position-relative">
                            <button className="explore_btn" onClick={()=>{submit()}}>Submit Now</button>
                            <div className="rightarrow"><img src={arrow_right} height={30} width={30} /></div>
                        </div>
                    </div>
                </div>

            </div>


            <FooterSouthsore />
        </>
    )
}

export default Enquiry;