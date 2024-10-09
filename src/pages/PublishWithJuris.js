import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import arrow_right from '../assets/images/arrow-right.png'
import NavBarSouthsore from "../components/NavBarSouthshore";



const PublishWithJuris = () => {




    return (
        <>
            <div className="container">
                <Header/>
                <NavBarSouthsore />

                <div className="margin-x">
                    <div className="text-center mt-3">
                        <div className="screen_head">Publish with Juris Press</div>
                        <div className="screen_sub_head mt-1">Reach out to us if you have an idea for a book or if you have a manuscript ready for publishing. Please write to us at <span style={{ fontWeight: '700' }}>Email ID</span> with the following information and we will reach out to you at the earliest.</div>
                    </div>
                    <form className="row g-3 my-5">
                        <div className="col-12 col-md-6">
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Name<span style={{color:'red'}}>*</span></label>
                                <input type="text" className="form-control input_style" placeholder="Your user name" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Designation</label>
                                <input type="text" className="form-control input_style" placeholder="Your Designation" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Subject area</label>
                                <input type="text" className="form-control input_style" placeholder="Type here" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Is the manuscript ready for publication?</label>
                                <div className="d-flex radio_toolbar">
                                    <input id="Yes" value="Yes" name="ready" type="radio"/>
                                    <label for="Yes" style={{marginRight:'3%'}}>Yes</label>
                                    <input id="No" value="No" name="ready" type="radio"/>
                                    <label for="No">No</label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">If not, how soon can it be expected?</label>
                                <input type="text" className="form-control input_style" placeholder="Type here" />
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Email ID<span style={{color:'red'}}>*</span></label>
                                <input type="email" className="form-control input_style" placeholder="Email ID" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Organization</label>
                                <input type="text" className="form-control input_style" placeholder="Organization name" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">Contact No</label>
                                <input type="text" className="form-control input_style" placeholder="+91 | Example input placeholder" />
                            </div>
                            <div className="mb-4">
                                <label className="form-label label_font mb-2">No. of words in the manuscript</label>
                                <input type="text" className="form-control input_style" placeholder="Type here" />
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="form-label label_font mb-2">About the book <span> (250 words)</span></label>
                            <textarea type="text" className="form-control textarea_style" rows="6" placeholder="Write something about the book" />
                        </div>


                        <div className="d-flex justify-content-center mt-5 position-relative">
                            <button className="explore_btn">Submit Now</button>
                            <div className="rightarrow"><img src={arrow_right} height={30} width={30} /></div>
                        </div>
                    </form>
                </div>

            </div>


            <FooterSouthsore />
        </>
    )
}

export default PublishWithJuris;