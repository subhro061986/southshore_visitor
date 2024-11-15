import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import NavBarSouthsore from "../components/NavBarSouthshore";
import newspaper from "../assets/images/box.png";
import book from "../assets/images/book.png";
import dollar from "../assets/images/dollar-circle.png";
const Writefulls = () => {




    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />
                <div className>
                    <div className="text-start" style={{marginTop:'3%'}}>
                        <div className="screen_head" style={{ textAlign: "left" }}>About Writefull</div>
                        {/* <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Established in 1683 in Leiden (The Netherlands), Brill is a renowned publishing house specializing in the Humanities and Social Sciences, Law, and selected areas in the Sciences. With offices in<span style={{ fontWeight: '700' }}> Leiden, Paderborn (Germany), Boston (USA), Singapore, and Beijing (China)</span>, Brill continues to expand its global reach</div> */}
                    </div>
                    <div className="mt-4">
                        <div className="screen_heading" style={{ textAlign: "left" }}>Speed up publishing</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>Automate copyediting, metadata checking, language quality scoring, and manuscript triaging</div>
                    </div>
                    <div className="mt-4">
                        <div className="screen_heading" style={{ textAlign: "left" }}>Writefull for students and researchers</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>From student to researcher, essay to thesis, and title to abstract, Writefull helps with every part of academic writing</div>
                    </div>
                    <div className="mt-4">
                        <div className="screen_heading" style={{ textAlign: "left" }}>Solutions for scientific and technical writing</div>
                        <div className="screen_sub_head mt-1" style={{ textAlign: "left" }}>AI tools help researchers and technical teams write better, faster, and with confidence</div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body-list p-5">
                                    <div className=" d-flex justify-content-between title_width">
                                        <img className="me-3" src={newspaper} 
                                        // height={25} width={25} 
                                        />
                                        <div className="brill_title">Products</div>
                                    </div>
                                    <ul className="ms-2">
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Writefull for Word</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Use the best academic language feedback and writing widgets in Word</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Writefull for Overleaf</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Get the best scientific language feedback and features within Overleaf</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Writefull Revise</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Use Writefull Revise to quickly improve your text</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Writefull Cite</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Use Write full Cite to make sure you’re not missing citations</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Writefull X</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>It has multiple widgets that help with academic writing</div>

                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card heighgt:400">
                                <div className="card-body-list p-5 mt_10">
                                    <div className="d-flex ">
                                        <img className="me-3" src={book} 
                                        // height={25} width={25} 
                                        />
                                        <div className="brill_title">Widgets</div>
                                    </div>
                                    <ul className="ms-2">
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Title Generator</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Enter your abstract and get a title</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Abstract Generator</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Enter your text and get an abstract</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Paraphraser</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Enter an academic sentence and have it rephrased</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Academizer</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Enter an informal sentence and get an academic rewrite</div>
                                        <li className="marker" style={{ color: '#4D39F1', fontWeight: '600', fontSize: '20px' }}>Sentence Palette</li>
                                        <div style={{ color: '#191A1C', fontWeight: '400', fontSize: '18px' }}>Browse phrases and connectors for each section in your paper</div>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 ms-1" style={{marginBottom:'5%'}}>
                        <ul>
                            <li style={{fontFamily:"Roboto", fontWeight:'400', fontSize:'18px', color:'#535861'}}>Offers a free trial for 15 days</li>
                            <li style={{fontFamily:"Roboto", fontWeight:'400', fontSize:'18px', color:'#535861'}}>Institutional access is provided based on email domains</li>
                            <li style={{fontFamily:"Roboto", fontWeight:'400', fontSize:'18px', color:'#535861'}}>Access to statistics on product usage to monitor the trial</li>
                            <li style={{fontFamily:"Roboto", fontWeight:'400', fontSize:'18px', color:'#535861'}}>Licenses run for one year</li>
                            <li style={{fontFamily:"Roboto", fontWeight:'400', fontSize:'18px', color:'#535861'}}>Pricing depends on the number of individuals who will be using Writefull</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterSouthsore />
        </>
    )
}

export default Writefulls;


