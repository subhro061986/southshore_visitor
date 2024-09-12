import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import book1 from '../assets/images/book1.png';
import book2 from '../assets/images/book2.png';
import book3 from '../assets/images/book3.png';
import book4 from '../assets/images/book4.png';
import download from '../assets/images/download.png';
import pdf from '../assets/images/pdf.png'
import NavBarSouthsore from "../components/NavBarSouthshore";



const Resources = () => {

    const TitleArray = [
        {
            title: "Attitude Is Everything",
            author: "Jeff Keller",
            image: book1,

        },
        {
            title: "Pride & Prejudice",
            author: "Jeff Keller",
            image: book2,

        },
        {
            title: "Three Thousand Stitches",
            author: "Jeff Keller",
            image: book3,

        },
        {
            title: "How to Talk to Anyone",
            author: "Jeff Keller",
            image: book4,

        },
        {
            title: "How to Talk to Anyone",
            author: "Jeff Keller",
            image: book1,

        }
    ]

    const [activeTab, setActiveTab] = useState("home");

    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />

                <div className="mt-3">
                    <div className="screen_head" style={{ textAlign: 'left' }}>Resources</div>
                    <div className="screen_sub_head mt-1" style={{ textAlign: 'left' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</div>
                </div>

                <nav className="navbar">
                    <ul className="navbar-list">
                        <li
                            className={`navbar-item ${activeTab === "home" ? "active" : ""}`}
                            onClick={() => setActiveTab("home")}
                        >
                            Home
                        </li>
                        <li
                            className={`navbar-item ${activeTab === "about" ? "active" : ""}`}
                            onClick={() => setActiveTab("about")}
                        >
                            About
                        </li>
                        <li
                            className={`navbar-item ${activeTab === "services" ? "active" : ""}`}
                            onClick={() => setActiveTab("services")}
                        >
                            Services
                        </li>
                        <li
                            className={`navbar-item ${activeTab === "contact" ? "active" : ""}`}
                            onClick={() => setActiveTab("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </nav>

                <div className="download_head mt-5">Download the listed <span> PDF Books</span></div>
                <div className="row d-flex justify-content-between" style={{ marginBottom: '15%' }}>
                    {TitleArray.map((data, index) => (
                        <div className="col-md-3 mt-5 d-flex justify-content-center" key={index}>
                            <div className="card card_style" style={{ width: '17rem' }}>
                                <div className="d-flex justify-content-center img_div_style position-relative">
                                    <button className="border border-white bg-white rounded-circle d-flex justify-content-center align-items-center position-absolute pdf_btn_style">
                                        <img src={pdf} height={20} width={20} />
                                    </button>
                                    <img src={data.image} className="mt-4" />
                                </div>
                                <div className="card-body">
                                    <div className="card_head">{data.title.length > 15 ? data.title.substring(0, 15) + ".." : data.title}</div>
                                    {/* <div className="card_author my-3">Author: <span style={{ fontWeight: '500' }}>{data.author}</span></div> */}
                                    <div className="d-flex justify-content-center mt-3 position-relative">
                                        <button className="explore_btn" style={{ fontSize: '12px', paddingLeft: '10%' }}>Download PDF</button>
                                        <div className="rightarrow" style={{ right: '0%' }}><img src={download} height={20} width={20} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            <FooterSouthsore />
        </>
    )
}

export default Resources;