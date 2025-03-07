import React, { useEffect, useState, } from "react";
import startupLogo from "../assets/images/startup india logo.png";
import { useNavigate, Link } from 'react-router-dom';

const AboutSouthshore = () => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8 about-southshore-header">

                    <div
                    className=""
                    >

                        <h1>About Southshore Innovations</h1>
                        <p className="about_southshore_footer mt-3" style={{fontSize:'20px'}}> <span style={{fontWeight:'600'}}>Southshore Innovations Private Limited</span>, Chennai, is a publishing company promoted by techno-functional professionals with deep domain experience in the different aspects of book publishing, customer experience, sales and distribution.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-southshore-header">
                        <div className="card card-design">
                            <div className="card-body d-flex justify-content-center align-items-center text-center">
                                <div className="d-flex-column justify-content-center align-items-center text-details">

                                    <div className="cert">Certificate No</div>
                                    <p className="title mt-2 ">DIPP145487</p>
                                    <img src={startupLogo} width={190} height={60} />
                                    <div style={{ marginTop: '4%' }}><span className="small-date-text ">Date of issue:</span> <span className="small-date ">11-09-2023</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="heading-text">

                        <p>Southshore has multiple lines of <b>activity in the publishing space</b></p>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-md-4" style={{ marginTop: '1%' }}>

                    <div className="card grey-card" style={{ marginLeft: '40px' }}>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <p>Traditional publishing through its imprint, <span style={{ color: '#4D39F1' }}>Juris Press</span></p>

                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="col-md-4" style={{ marginTop: '1%' }}>

                    <div className="card grey-card" style={{ marginLeft: '20px' }}>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <p>Publishing for Thomson Reuters as its in-country partner in the SAARC region</p>

                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                <div className="col-md-4" style={{ marginTop: '1%' }}>

                    <div className="card grey-card">
                        <div className="card-body">
                            <ul>
                                <li>
                                    <p>Representing international publishers such as Brill and MyJove, and application providers like Writefull</p>

                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-md-5" style={{ marginTop: '1%' }}>

                    <div className="card grey-card" style={{ marginLeft: '40px' }}>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <p>Owning and operating <a href="https://ebooksjunction.com/" style={{ color: '#4D39F1' }}>ebooksjunction.com</a>, a marketplace for publishers to display and sell their digital content</p>

                                </li>

                            </ul>
                        </div>

                    </div>

                </div>
                <div className="col-md-7" style={{ marginTop: '1%' }}>

                    <div className="card grey-card" style={{ marginLeft: '20px' }}>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <p>Owning and operating <a href="https://bookscentral.in/" style={{ color: '#4D39F1' }}>Books Central</a> , an e-commerce platform to display and sell print books for Thomson Reuters and Juris Press</p>

                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div> */}
            <div className="row">
                <div className="col-md-4 mb col-12" style={{ paddingRight: '10px' }}>
                    <div className="card card_style_1 px-4">
                        <div className="">
                            <ul>
                                <li>Traditional publishing through its imprint, <Link style={{ color: '#4D39F1' }} to="juris/about">Juris Press</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb col-12" style={{ paddingRight: '10px' }}>
                    <div className="card card_style_1 px-4">
                        <div className="">
                            <ul>
                                <li>Publishing for Thomson Reuters as its in-country partner in the SAARC region</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="card card_style_1 px-4">
                        <div className="">
                            <ul>
                                <li>Representing international publishers such as Brill and MyJoVE, and application providers like Writefull</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-5 mb" style={{ paddingRight: '10px' }}>
                    <div className="card card_style_1 px-4">
                        <div className="">
                            <ul>
                                <li>Owning and operating <Link style={{ color: '#4D39F1' }} onClick={() => window.open('https://ebooksjunction.com/', '_blank')}>ebooksjunction.com</Link>, a marketplace for publishers to display and sell their digital content</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card card_style_1 px-4">
                        <div className="">
                            <ul>
                                <li>Owning and operating <Link style={{ color: '#4D39F1' }} onClick={() => window.open('https://bookscentral.in/', '_blank')}>Books Central</Link>, an e-commerce platform to display and sell print books for Thomson Reuters and Juris Press</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12 about-southshore-header">
                    <div
                    // className="footer-text"
                    >

                        <p className="about_southshore_footer">The publishing industry in India has traditionally been fragmented and the use of technology has caught on slowly. With its experience in building applications and products, Southshore aims to provide solutions to the publishing industry to improve efficiency and provide a better experience for the end users.</p>
                        <p className="about_southshore_footer">Southshore is a startup registered with the Department for Promotion of Industry and Internal Trade.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSouthshore;