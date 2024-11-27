import React, { useEffect, useState, } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import bg_southshore from '../assets/images/bg_southsore.png'
import slide_img from '../assets/images/slide_img.png'
import banner from '../assets/images/Banner_1.png'
import arrow_right from '../assets/images/arrow-right.png'
import Carousel from 'react-bootstrap/Carousel';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import about_juris_img_1 from "../assets/images/about_juris_img_1.png";
import { UserProfile } from "../Context/Usercontext";
import Config from "../Config/Config.json"
import useWindowDimensions from "../hooks/windowDimensions";
import { Image } from "react-bootstrap";



const Banner = () => {

    const { allBanner } = UserProfile()
    const windowDimensions = useWindowDimensions();

    const isMobileScreen = windowDimensions?.width <= Config.MOBILE_SCREEN_MIN_WIDTH ? true : false;
    const isTabScreen = windowDimensions?.width <= Config.TAB_SCREEN_MAX_WIDTH && windowDimensions?.width >= Config.TAB_SCREEN_MIN_WIDTH ? true : false;
    // useEffect(() => {
    //     console.log("dimension", windowDimensions?.width)
    // }, []);


    return (

        <>
            {!isMobileScreen ? (
                <Carousel
                    interval={null}
                    prevIcon={<CiCircleChevLeft size={40} style={{ color: '#878990F0' }} />} // Custom Previous icon
                    nextIcon={<CiCircleChevRight size={40} style={{ color: '#878990F0' }} />} // Custom Next icon
                >
                    {allBanner?.map((data, index) => (
                        <Carousel.Item key={index}>
                            <div className="row border_style">
                                <div className="col-sm-6 col-md-5 grey_div"></div>
                                <div className="col-sm-6 col-md-7"></div>
                            </div>
                            <Carousel.Caption
                                // style={{ right: '15%', left: '10%', bottom: '2.50rem' }}
                                className="carousel_caption_style"
                            >
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="slide_img_div" >
                                            <img
                                                src={Config.API_URL + Config.BANNER_URL + "/" + data.imgLink + '?d=' + new Date()}
                                                width={isTabScreen!== true ? 550 : 374}
                                                // height={410}
                                                height={320}
                                                style={{ borderRadius: '25px' }}
                                            />
                                        </div>

                                    </div>
                                    <div className="col-md-4" style={{ paddingLeft: '0px' }}>
                                        <div className={`slide_txt_head ${isTabScreen!== true ? 'mt-5' : 'mt-0'} `}>
                                            {/* <span>Transparency</span>  */}
                                            {/* is Our Priority */}
                                            {data.title}
                                        </div>
                                        <div className={`slide_txt_description ${isTabScreen!== true ? 'mt-4' : 'mt-3'}`}>
                                            {/* <span style={{ fontWeight: '600' }}>We operate with full transparency</span>, */}
                                            {/* ensuring that your experience is secure, straightforward,
                                    and in compliance with industry best practices. Your trust is our top concern */}
                                            {data.subTitle}
                                        </div>
                                        {/* <div className="d-flex mt-5 position-relative">
                                    <button className="explore_btn">Explore No</button>
                                    <div className="rightarrow"><img src={arrow_right} height={30} width={30} /></div>
                                </div> */}
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )
                :
                (
                    <Carousel controls={false}
                    // interval={null}
                    // prevIcon={<CiCircleChevLeft size={40} style={{ color: '#878990F0' }}/>} // Custom Previous icon
                    // nextIcon={<CiCircleChevRight size={40} style={{ color: '#878990F0' }} />} // Custom Next icon
                    >
                        {allBanner?.map((data, index) => (
                            <Carousel.Item key={index}>
                                <div className="row border_style">
                                    <div className="col-12 grey_div"></div>
                                    <div className="col-12"></div>
                                </div>
                                <Carousel.Caption
                                    style={{
                                        right: "15%",
                                        top: "1.25rem",
                                        left: "15%"
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-12 d-flex justify-content-center">
                                            <div className="image-surrounder"
                                                style={{
                                                    width: windowDimensions?.width - 20,
                                                    backgroundColor: "white",
                                                    borderRadius: "30px",
                                                    border: '10px solid white'
                                                }}
                                            >
                                                <img
                                                    src={Config.API_URL + Config.BANNER_URL + "/" + data.imgLink + '?d=' + new Date()}
                                                    width={windowDimensions?.width - 50}
                                                    height={400}
                                                    // height={320}
                                                    style={{ borderRadius: '25px', stroke: "red", objectFit: "cover" }}
                                                />
                                            </div>

                                        </div>
                                        <div className="col-12 mt-2">
                                            <div className="slide_txt_head mt-5"
                                            >
                                                {/* <span>Transparency</span>  */}
                                                {/* is Our Priority */}
                                                {data.title}
                                            </div>
                                            <div className="slide_txt_description mt-4">
                                                {/* <span style={{ fontWeight: '600' }}>We operate with full transparency</span>, */}
                                                {/* ensuring that your experience is secure, straightforward,
                                    and in compliance with industry best practices. Your trust is our top concern */}
                                                {data.subTitle}
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                        ))}
                    </Carousel >
                )
            }
        </>
    )
}

export default Banner;