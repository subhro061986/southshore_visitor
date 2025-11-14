import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import NavBarSouthsore from "../components/NavBarSouthshore";
import newspaper from "../assets/images/newspaper.png";
import book from "../assets/images/book.png";
import dollar from "../assets/images/dollar-circle.png";
const SeasonedInsights = () => {




    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />
                <div className>
                    <div className="text-start" style={{ marginTop: '3%' }}>
                        <div className="screen_head" style={{ textAlign: "left" }}>About Us</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Seasoned Insights, a subscription product of KnowledgePath, a division of Southshore Innovations Private Limited, brings to you curated content based on experiences of acknowledged experts in their respective domains for continuous learning through a series of videocasts.</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>These videocasts which are visually appealing make the content engaging and make for easy understanding. We currently partner with the following domain experts on different topics.</div>
                        

                    </div>
                    <div className="mt-5">
                        <div className="screen_heading" style={{ textAlign: "left" }}>Dr.Tarun Shridhar</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Dr. Tarun Shridhar is a former Indian Administrative Service (IAS) officer who retired in 2019 after a distinguished 35-year career in government, serving both at the state and central levels.
                            Throughout his tenure, he held diverse portfolios spanning land administration, industries, transport, tourism, environment, and energy. Notably, his work in the Animal Husbandry and Fisheries sectors sparked a lifelong passion to drive meaningful growth through policy, strategy,
                        </div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>He writes on food, animal agriculture, agriculture, fisheries and more.</div>
                        {/* 3 Videos Row */}
                        <div className="row mt-4">
                            <div className="col-md-4 col-12 mb-3">
                                <div className="video-container">

                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/7P5KEsgHaA0?si=hRFOTytiSfyDFx41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                </div>
                            </div>

                            <div className="col-md-4 col-12 mb-3">
                                <div className="video-container">
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/--sbE68RqYo?si=90srHR0gtmFAR4d-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>

                            <div className="col-md-4 col-12 mb-3">
                                <div className="video-container">
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/XErTYa3fIr0?si=8v1Mi8jejBBKNPDy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="screen_heading" style={{ textAlign: "left" }}>Pranav Khatavkar</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Pranav M. Khatavkar is the Founder & Managing Partner of Lexentra, and an international lawyer with over a decade of experience in banking, finance, commercial, regulation, and cross-border matters. His advisory spans financial institutions, funds, sponsors, and businesses across India and global financial centres.</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>He writes on banking law, corporate commercial, cross border matters, finance and regulatory issues.</div>
                        {/* 3 Videos Row */}
                        <div className="row mt-4">
                            <div className="col-md-4 col-12 mb-3">
                                <div className="video-container">

                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/xeXV1KoX034?si=hNsuQvHd2QVTCfnK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                                </div>
                            </div>

                            <div className="col-md-4 col-12 mb-3">
                                <div className="video-container">
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/KLuTLF3x9sA?si=UCEtc6ALknDdzc18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>

                            <div className="col-md-4 col-12 mb-3">
                                <div className="video-container">
                                    <iframe width="100%" height="200" src="https://www.youtube.com/embed/sRWcJrMTtMI?si=mPhmuFEnWv10eSfG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default SeasonedInsights;


