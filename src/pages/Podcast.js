import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import NavBarSouthsore from "../components/NavBarSouthshore";
import podcast_1 from "../assets/images/podcast-1.jpg";
import book from "../assets/images/book.png";
import dollar from "../assets/images/dollar-circle.png";
import { UserProfile } from "../Context/Usercontext";


const Podcast = () => {
    const {allPodcast } = UserProfile()
    useEffect(() => {    
        console.log("allPodcast", allPodcast);  
        }, []);

    const convertUrlToEmbed = (url) => {
            let videoId = url.split("/");
            let embed = videoId[3].split("?");
            console.log("videoId", embed);
            return (
                <iframe width="100%" height="200" src={`https://www.youtube.com/embed/${embed[0]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            );
        
    }

    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />
                <div className="mt-2">
                    {/* <div className="row mt-4">
                        <div className="col-md-4 col-12 mb-3">
                            <div className="video-container">

                                <img src={podcast_1} alt="Podcast 1" className="img-fluid border-radius-10" />
                                <div className="video-overlay mt-2">
                                    <h5>Tech Talks #12</h5>
                                    <p>Discussing the future of AI and web development.</p>
                                    <button className="btn southshore-blue-1 border-radius-10 color-white px-4">Listen Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 mb-3">
                            <div className="video-container">
                                <img src={podcast_1} alt="Podcast 1" className="img-fluid border-radius-10" />
                                <div className="video-overlay mt-2">
                                    <h5>Startup Stories</h5>
                                    <p>How small ideas turn into billion-dollar companies.</p>
                                    <button className="btn southshore-blue-1 border-radius-10 color-white px-4">Listen Now</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 mb-3">
                            <div className="video-container">
                                <img src={podcast_1} alt="Podcast 1" className="img-fluid border-radius-10" />
                                <div className="video-overlay mt-2">
                                    <h5>Mindset Mastery</h5>
                                    <p>Improve your habits and productivity daily.</p>
                                    <button className="btn southshore-blue-1 border-radius-10 color-white px-4">Listen Now</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row mt-4">
                        {allPodcast.map((podcast, index) => (
                            <div className="col-md-4 col-12 mb-3" key={index}>
                                <div className="video-container">
                                    {convertUrlToEmbed(podcast.url)}
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <FooterSouthsore />
        </>
    )
}

export default Podcast;


