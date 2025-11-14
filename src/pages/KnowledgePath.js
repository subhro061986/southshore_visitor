import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import NavBarSouthsore from "../components/NavBarSouthshore";
import newspaper from "../assets/images/newspaper.png";
import book from "../assets/images/book.png";
import dollar from "../assets/images/dollar-circle.png";

const KnowledgePath = () => {




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
                        About us
                    </h1>

                    <p
                        style={{
                            fontSize: "24px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 400,
                            lineHeight: "36px"
                        }}
                    >
                        KnowledgePath, a division of Southshore Innovations Private Limited, is focused on making learning content to help learners develop their capabilities through the expertise and experiences of acknowledged experts in their respective domains.
                    </p>

                    <h1
                        style={{
                            textAlign: "left",
                            fontSize: "50px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                        }}
                    >
                        Our Story
                    </h1>

                    <p
                        style={{
                            fontSize: "24px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 400,
                            lineHeight: "36px"
                        }}
                    >
                        Establishing KnowledgePath as a division of Southshore Innovations Private Limited has been a journey of discovery and joy. The offering that you see today started off with a simple discussion on what content is and the different ways in which it can be served up to the audience that needs it.
                    </p>

                    <h1
                        style={{
                            textAlign: "left",
                            fontSize: "50px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 700,
                        }}
                    >
                        Our Focus and Approach
                    </h1>

                    <p
                        style={{
                            fontSize: "24px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 400,
                            lineHeight: "36px"
                        }}
                    >
                        We deliver engaging and enriching learning content that helps students and aspiring professionals learn and develop their skills while managing their life demands.
                    </p>

                    <p
                        style={{
                            fontSize: "24px",
                            fontFamily: 'Ubuntu',
                            fontWeight: 400,
                            lineHeight: "36px"
                        }}
                    >
                        KnowledgePath partners with established educational institutions and individual subject matter experts across knowledge domains, helping them take their offline learning content online. We help them reimagine their learning content to transform it into effective and engaging online learning.
                    </p>

                    
                </div>
            </div>
            <FooterSouthsore />
        </>
    )
}

export default KnowledgePath;


