import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import NavBarSouthsore from "../components/NavBarSouthshore";
import newspaper from "../assets/images/newspaper.png";
import book from "../assets/images/book.png";
import dollar from "../assets/images/dollar-circle.png";

const Jove = () => {




    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        marginTop: "35px",
                        marginBottom: "30px"
                    }}
                >
                    <h1
                        style={{
                            textAlign: "left",
                            fontSize: "50px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                        }}
                    >
                        About JoVE
                    </h1>

                    <p
                        style={{
                            fontSize: "24px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 400,
                            lineHeight: "36px"
                        }}
                    >
                        JoVE is the leading producer and publisher of video resources for science education and research. With over 19,000 videos published across several STEM disciplines, the JoVE library provides clear, detailed illustrations of a vast range of scientific techniques and concepts. JoVE offers content to support learners at all levels, from UG/PG students to lab technicians, academicians, research scientists, and beyond.
                    </p>
                    <p
                        style={{
                            fontSize: "24px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 400,
                            lineHeight: "36px"
                        }}
                    >
                        Today, 1,200+ institutions and laboratories worldwide use JoVE to meet their academic, research, and instruction needs, such as:
                    </p>
                    <div className="card"
                        style={{
                            background: '#F4F4F4',
                            borderRadius: "30px",
                            padding: '40px'
                        }}
                    >
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <ul className="blue-bulleted-list ms-2"
                                    style={{
                                        fontSize: "24px",
                                        fontFamily: 'Roboto',
                                        fontWeight: 400
                                    }}
                                >
                                    <li className="marker">Increasing research reproducibility and productivity</li>
                                    <li className="marker">Saving time and resources in the lab</li>
                                    <li className="marker">Making lab training programmes more efficient and cost-effective</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2 d-flex justify-content-center">
                                <div
                                    className="card_border"
                                    style={{
                                        border: "0.1px solid #7B8890",
                                        // width: "0.1px",
                                        height: "100%",
                                        opacity: "30%"
                                    }}
                                />
                                {/* <div className="vr"></div>
                                <div className="hr"></div> */}
                                {/* <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"></div> */}
                                
                            </div>
                            <div className="col-12 col-md-5">
                                <ul className="blue-bulleted-list ms-2"
                                    style={{
                                        fontSize: "24px",
                                        fontFamily: 'Roboto',
                                        fontWeight: 400
                                    }}
                                >
                                    <li className="marker">Boosting student learning outcomes and comprehension</li>
                                    <li className="marker">Teaching science practicals effectively in remote classrooms</li>
                                    <li className="marker">Improving student engagement with complex science topics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2
                        style={{
                            textAlign: "left",
                            fontSize: "36px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                        }}
                    >
                        Accessing JoVE Videos
                    </h2>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg">
                            <div className="card"
                                style={{
                                    background: '#F4F4F4',
                                    borderRadius: "30px",
                                    padding: '40px',
                                    height: "100%"
                                }}
                            >
                                <h4
                                    style={{
                                        textAlign: "left",
                                        fontSize: "32px",
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                    }}
                                >
                                    On Campus
                                </h4>
                                <ul className="blue-bulleted-list ms-2"
                                    style={{
                                        fontSize: "24px",
                                        fontFamily: 'Roboto',
                                        fontWeight: 400
                                    }}
                                >
                                    <li className="marker">IP Recognition</li>
                                    <li className="marker">Embedded in your LMS (learning management system)</li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-2">

                        </div> */}
                        <div className="col-12 col-md-6">
                            <div className="card mt_10"
                                style={{
                                    background: '#F4F4F4',
                                    borderRadius: "30px",
                                    padding: '40px'
                                }}
                            >
                                <h4
                                    style={{
                                        textAlign: "left",
                                        fontSize: "32px",
                                        fontFamily: 'Ubuntu',
                                        fontWeight: 700,
                                    }}
                                >
                                    Off-Campus
                                </h4>
                                <ul className="blue-bulleted-list ms-2"
                                    style={{
                                        fontSize: "24px",
                                        fontFamily: 'Roboto',
                                        fontWeight: 400
                                    }}
                                >
                                    <li className="marker">Domain authentication</li>
                                    <li className="marker">Open Athens and Shibboleth</li>
                                    <li className="marker">Authenticated remote access with EZproxy and any other remote access</li>
                                    <li className="marker">Embedded in your LMS-Blackboard, Moodle, Canvas, Brightspace, Sakai, Google Classroom, Zoom, Microsoft Teams, Sway, PowerPoint, Schoology, Ultra Blackboard</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2
                        style={{
                            textAlign: "left",
                            fontSize: "36px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                        }}
                    >
                        JoVE’s Curriculum Specialist Support for Your Institution
                    </h2>
                    <div className="card"
                        style={{
                            background: '#F4F4F4',
                            borderRadius: "30px",
                            padding: '40px',
                            marginBottom:'6%'
                        }}
                    >
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <ul className="blue-bulleted-list ms-2"
                                    style={{
                                        fontSize: "24px",
                                        fontFamily: 'Roboto',
                                        fontWeight: 400,
                                    }}
                                >
                                    <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Full JoVE walk-through</span> for faculty and assistance with troubleshooting</li>
                                    <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Free syllabus mapping</span> for faculty and training programme mapping for lab managers</li>
                                    <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Seamless integration</span> with online learning platforms</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2 d-flex justify-content-center">
                                <div
                                    className="card_border"
                                    style={{
                                        border: "0.1px solid #7B8890",
                                        // width: "0.1px",
                                        height: "100%",
                                        opacity: "30%"
                                    }}
                                />
                            </div>
                            <div className="col-12 col-md-5">
                                <ul className="blue-bulleted-list ms-2"
                                    style={{
                                        fontSize: "24px",
                                        fontFamily: 'Roboto',
                                        fontWeight: 400
                                    }}
                                >
                                    <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Subscription-supporting collateral</span> at no cost to the library</li>
                                    <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Faculty-supporting webinars</span> with a Curriculum Specialist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSouthsore />
        </>
    )
}

export default Jove;


