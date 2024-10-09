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
                    <div className="text-start">
                        <div className="screen_head" style={{ textAlign: "left" }}>About Brill</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Established in 1683 in Leiden (The Netherlands), Brill is a renowned publishing house specializing in the Humanities and Social Sciences, Law, and selected areas in the Sciences. With offices in<span style={{ fontWeight: '700' }}> Leiden, Paderborn (Germany), Boston (USA), Singapore, and Beijing (China)</span>, Brill continues to expand its global reach</div>
                    </div>
                    <div className="mt-5">
                        <div className="screen_heading" style={{ textAlign: "left" }}>Our Products</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Brill has four main product types –<span style={{ fontWeight: '700' }}> Journals, Books, Reference Works, and Encyclopedias and Databases</span> All current publications are available as print and online editions.</div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body-list p-5">
                                    <div className=" d-flex justify-content-between title_width">
                                        <img className="me-3" src={newspaper}
                                        // height={25}
                                        // width={25}
                                        />
                                        <div className="brill_title mt-1">Journals</div>
                                    </div>
                                    <ul className="ms-2">
                                        <li className="marker">Over <span style={{ fontWeight: '700' }}>300+</span> journals published annually</li>
                                        <li className="marker">Backfiles Access: Available from 2000 onwards</li>
                                        <li className="marker">Perpetual access available for purchase</li>
                                        <li className="marker">Subscription-based e-journals</li>
                                        <li className="marker">Indexed in Scopus and Web of Science</li>
                                        <li className="marker">Full-texts available in PDF format</li>
                                        <li className="marker">Compliant with CROSSREF, ATHENS, SHIBBOLETH, and COUNTER standards</li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card heighgt:400">
                                <div className="card-body-list p-5">
                                    <div className="d-flex ">
                                        <img className="me-3" src={book}
                                        // height={25}
                                        // width={25}
                                        />
                                        <div className="brill_title mt-1">Books and E-Books</div>
                                    </div>
                                    <ul className="ms-2">
                                        <li className="marker">Publishing approximately 1,200 new monograph/series titles annually</li>
                                        <li className="marker">Pick and Choose a model(s) for purchasing</li>
                                        <li className="marker">Perpetual access rights with one-off purchases</li>
                                        <li className="marker">No platform fees</li>
                                        <li className="marker">Cross-campus access via IP and remote access available 24/7 through Brill.com, KNIMBUS, Google Scholar, Google Search, Google Scholar, A&I databases, institutional login, INFLIBNET Shibboleth, Summon, and so on</li>
                                        <li className="marker">No DRM restrictions</li>
                                        <li className="marker">Unlimited users and downloads — buy one book, allow multiple simultaneous users</li>
                                        <li className="marker">Usage reports available for institutions</li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body-list p-5">
                                        <div className="d-flex title">
                                            <img className="me-3" src={dollar}
                                                // height={25}
                                                // width={25}
                                            />
                                            <div className="brill_title mt-1">Purchase Models</div>
                                        </div>
                                        <ul className="ms-2">
                                            <li className="marker">Pick and Choose</li>
                                            <li className="marker">Annual Collections</li>
                                            <li className="marker">Evidence-Based Acquisition (EBA) Model</li>


                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSouthsore />
        </>
    )
}

export default Brills;


