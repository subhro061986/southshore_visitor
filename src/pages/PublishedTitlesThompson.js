import React, { useEffect, useState, } from "react";
import { useNavigate, Link } from 'react-router-dom';
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import book1 from '../assets/images/book1.png';
import book2 from '../assets/images/book2.png';
import book3 from '../assets/images/book3.png';
import book4 from '../assets/images/book4.png';
import NavBarSouthsore from "../components/NavBarSouthshore";
import { UserProfile } from "../Context/Usercontext";
import Config from "../Config/Config.json";



const PublishedTitlesThompson = () => {

    const { allPublishedTitle } = UserProfile()

    const handleBuyNow = (buyLink) => {
        // Ensure the URL starts with https://
        const validUrl = buyLink.startsWith('http://') || buyLink.startsWith('https://') ? buyLink : `https://${buyLink}`;

        window.open(validUrl, '_blank'); // Opens the link in a new tab
    };




    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />

                <div className="text-center mt-3">
                    <div className="screen_head">Titles Published</div>
                    <div className="screen_sub_head mt-1">All Thomson Reuters titles are available as print and e-book versions.</div>
                </div>

                <div className="row d-flex justify-content-between" style={{ marginBottom: '8%' }}>
                    {allPublishedTitle?.map((data, index) => (
                        data.isActive === 1 && data.publisherName === "THOMSON REUTERS" && (
                            <div className="col-md-3 mt-5 d-flex justify-content-center" key={index}>
                                <div className="card card_style"
                                // style={{ width: '100%' }}
                                >
                                    <div className="d-flex justify-content-center img_div_style">
                                        <img
                                            // src={data.image} 
                                            src={Config.API_URL + Config.PUBLISHED_TITLES_URL + "/" + data.imgLink + '?d=' + new Date()}
                                            className="mt-4" width={140} height={170} />
                                    </div>
                                    <div className="card-body">
                                        <div className="card_head">{data.title.length > 15 ? data.title.substring(0, 15) + ".." : data.title}</div>
                                        <div className="card_author my-3">{data.authorName}</div>
                                        <div className="d-flex justify-content-center">
                                            <button className="card_btn bg-white px-3 py-2 mt-2"
                                                onClick={() => handleBuyNow(data.buyLink)}
                                            >
                                                {/* <Link style={{ textDecoration: 'none' }} to={data.buyLink}> */}
                                                Buy on BookCentral
                                                {/* </Link> */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}

                </div>

            </div>

            <FooterSouthsore />
        </>
    )
}

export default PublishedTitlesThompson;