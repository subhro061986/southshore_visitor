import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import arrow_right from '../assets/images/arrow-right.png'
import NavBarSouthsore from "../components/NavBarSouthshore";
import { UserProfile } from "../Context/Usercontext";
import Config from "../Config/Config.json";


const PublishWithJuris = () => {

    const { PublishWithUs } = UserProfile()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [designation, setDesignation] = useState('');
    const [organization, setOrganization] = useState('');
    const [subject, setSubject] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [isManuscriptReady, setIsManuscriptReady] = useState('');
    const [numWords, setNumWords] = useState('');
    const [howSoon, setHowSoon] = useState('');
    const [aboutBook, setAboutBook] = useState('');

    // Handle the radio button change
    const handleChange = (e) => {
        setIsManuscriptReady(e.target.value);
    };

    const submit = async() => {
        var json = {
            name:name,
            email:email,
            designation:designation,
            organization:organization,
            subjectArea:subject,
            contactNo:contactNo,
            isManuscriptReady:isManuscriptReady === 'Yes' ? true : false,
            numWords:numWords,
            howSoonExpected:howSoon,
            aboutBook:aboutBook,
            publisherName:'Juris Press'

        }
        const resp = await PublishWithUs(json)
        alert(resp.data.message)
        console.log('publish resp', resp)
    }


    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />

                <div className="margin-x">
                    <div className="text-center mt-3">
                        <div className="screen_head">Publish with Juris Press</div>
                        <div className="screen_sub_head mt-1">Reach out to us if you have an idea for a book or if you have a manuscript ready for publishing. Please write to us at <span style={{ fontWeight: '700' }}>Email ID</span> with the following information and we will reach out to you at the earliest.</div>
                    </div>
                    <div className="row g-3 my-5">
                        <div className="col-12 col-md-6">
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Name<span style={{ color: 'red' }}>*</span></label>
                                <input type="text" className="form-control input_style" placeholder="Your user name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Designation</label>
                                <input type="text" className="form-control input_style" placeholder="Your Designation" value={designation} onChange={(e) => { setDesignation(e.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Subject area</label>
                                <input type="text" className="form-control input_style" placeholder="Type here" value={subject} onChange={(e) => { setSubject(e.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Is the manuscript ready for publication?</label>
                                <div className="d-flex radio_toolbar">
                                    <input id="Yes" value="Yes"  type="radio" checked={isManuscriptReady === "Yes"} onChange={handleChange} />
                                    <label for="Yes" style={{ marginRight: '3%' }}>Yes</label>
                                    <input id="No" value="No"  type="radio" checked={isManuscriptReady === "No"} onChange={handleChange} />
                                    <label for="No">No</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">If not, how soon can it be expected?</label>
                                <input type="text" className="form-control input_style" placeholder="Type here" value={howSoon} onChange={(e) => { setHowSoon(e.target.value) }} />
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Email ID<span style={{ color: 'red' }}>*</span></label>
                                <input type="email" className="form-control input_style" placeholder="Email ID" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Organization</label>
                                <input type="text" className="form-control input_style" placeholder="Organization name" value={organization} onChange={(e) => { setOrganization(e.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Contact No</label>
                                <input type="text" className="form-control input_style" placeholder="+91 | Example input placeholder" value={contactNo} onChange={(e) => { setContactNo(e.target.value) }} />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">No. of words in the manuscript</label>
                                <input type="text" className="form-control input_style" placeholder="Type here" value={numWords} onChange={(e) => { setNumWords(e.target.value) }} />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="form-label label_font mb-2">About the book <span> (250 words)</span></label>
                            <textarea type="text" className="form-control textarea_style" rows="6" placeholder="Write something about the book" value={aboutBook} onChange={(e) => { setAboutBook(e.target.value) }} />
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

export default PublishWithJuris;