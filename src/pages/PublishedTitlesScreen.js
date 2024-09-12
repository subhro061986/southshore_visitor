import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import book1 from '../assets/images/book1.png';
import book2 from '../assets/images/book2.png';
import book3 from '../assets/images/book3.png';
import book4 from '../assets/images/book4.png';
import NavBarSouthsore from "../components/NavBarSouthshore";



const PublishedTitlesScreen = () => {

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


    return (
        <>
            <div className="container">
                <Header/>
                <NavBarSouthsore />

                <div className="text-center mt-3">
                    <div className="screen_head">Titles published</div>
                    <div className="screen_sub_head mt-1">All Juris Press titles are available as print and e-book versions.</div>
                </div>

                <div className="row d-flex justify-content-between" style={{marginBottom:'15%'}}>
                    {TitleArray.map((data, index) => (
                        <div className="col-md-3 mt-5 d-flex justify-content-center" key={index}>
                            <div className="card card_style" style={{ width: '17rem' }}>
                                <div className="d-flex justify-content-center img_div_style">
                                    <img src={data.image} className="mt-4" />
                                </div>
                                <div className="card-body">
                                    <div className="card_head">{data.title.length > 15 ? data.title.substring(0, 15) + ".." : data.title}</div>
                                    <div className="card_author my-3">Author: <span style={{ fontWeight: '500' }}>{data.author}</span></div>
                                    <button className="card_btn bg-white px-3 py-2 my-2">Buy on book central</button>
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

export default PublishedTitlesScreen;