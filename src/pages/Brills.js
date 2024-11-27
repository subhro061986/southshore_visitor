import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import NavBarSouthsore from "../components/NavBarSouthshore";
import newspaper from "../assets/images/newspaper.png";
import book from "../assets/images/book.png";
import dollar from "../assets/images/dollar-circle.png";
const Brills = () => {




    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />
                <div className>
                    <div className="text-start" style={{ marginTop: '3%' }}>
                        <div className="screen_head" style={{ textAlign: "left" }}>About Brill</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Established in 1683 in Leiden (The Netherlands), Brill is a renowned publishing house specializing in the Humanities and Social Sciences, Law, and selected areas in the Sciences. With offices in Leiden, Paderborn (Germany), Boston (USA), Singapore, and Beijing (China), Brill continues to expand its global reach.</div>
                    </div>
                    <div className="mt-5">
                        <div className="screen_heading" style={{ textAlign: "left" }}>Our Products</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Brill has four main product types – journals, books, reference works, and encyclopedias and databases. All current publications are available as print and online editions.</div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body-list p-5">
                                    <div className=" d-flex justify-content-between title_width mb-4">
                                        <img className="me-3" src={newspaper}
                                        // height={25}
                                        // width={25}
                                        />
                                        <div className="brill_title mt-1">Journals</div>
                                    </div>
                                    <ul className="ms-2">
                                        <li className="marker">Over <span style={{ fontWeight: '700', color: '#4D39F1' }}>300+ journals</span> published annually</li>
                                        <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Backfiles Access:</span> Available from 2000 onwards</li>
                                        <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Perpetual access</span> available for purchase</li>
                                        <li className="marker">Subscription-based e-journals</li>
                                        <li className="marker">Indexed in<span style={{ fontWeight: '700', color: '#4D39F1' }}> Scopus</span>  and <span style={{ fontWeight: '700', color: '#4D39F1' }}>Web of Science</span></li>
                                        <li className="marker">Full-texts available in PDF format</li>
                                        <li className="marker">Compliant with<span style={{ fontWeight: '700', color: '#4D39F1' }}> CROSSREF, ATHENS, SHIBBOLETH,</span>  and <span style={{ fontWeight: '700', color: '#4D39F1' }}>COUNTER</span>  standards</li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card heighgt:400">
                                <div className="card-body-list p-5 mt_10">
                                    <div className="d-flex mb-4">
                                        <img className="me-3" src={book}
                                        // height={25}
                                        // width={25}
                                        />
                                        <div className="brill_title mt-1">Books and E-Books</div>
                                    </div>
                                    <ul className="ms-2">
                                        <li className="marker" >Publishing approximately<span style={{ fontWeight: '700', color: '#4D39F1' }}> 1,200 new monograph/series titles </span> annually</li>
                                        <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Pick and Choose</span> a model(s) for purchasing</li>
                                        <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Perpetual access rights </span>with one-off purchases</li>
                                        <li className="marker">No platform fees</li>
                                        <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Cross-campus access</span> via IP and remote access available 24/7 through Brill.com, KNIMBUS, Google Scholar, Google Search, Google Scholar, A&I databases, institutional login, INFLIBNET Shibboleth, Summon, and so on</li>
                                        <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>No DRM</span> restrictions</li>
                                        <li className="marker">Unlimited users and downloads — buy one book, allow multiple simultaneous users</li>
                                        <li className="marker">Usage reports available for institutions</li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row mt-5" style={{marginBottom:'10%'}}>
                            <div className="col-12 col-sm-6">
                                <div className="card">
                                    <div className="card-body-list p-5">
                                        <div className="d-flex title mb-4">
                                            <img className="me-1" src={dollar}
                                                height={39}
                                                width={39}
                                            />
                                            <div className="brill_title mt-1">Purchase Models</div>
                                        </div>
                                        <ul className="ms-2">
                                            <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Pick and Choose</span></li>
                                            <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Annual Collections</span></li>
                                            <li className="marker"><span style={{ fontWeight: '700', color: '#4D39F1' }}>Evidence-Based Acquisition (EBA) Model</span></li>


                                        </ul>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-sm-6"></div> */}
                        </div>
                </div>
            </div>
            <FooterSouthsore />
        </>
    )
}

export default Brills;


