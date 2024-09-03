import React, { useEffect, useState, } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import bg_southshore from '../assets/images/bg_southsore.png'
import slide_img from '../assets/images/slide_img.png'
import arrow_right from '../assets/images/arrow-right.png'
import Carousel from 'react-bootstrap/Carousel';




const Banner = () => {



    return (

        <>
            <Carousel
            // interval={null}
            >
                <Carousel.Item>
                    <div className="row border_style">
                        <div className="col-md-5 grey_div"></div>
                        <div className="col-md-7"></div>
                    </div>
                    <Carousel.Caption style={{ right: '6%', left: '6%' }}>
                        <div className="row">
                            <div className="col-md-8">
                                <img src={slide_img} width={650} height={450} />
                            </div>
                            <div className="col-md-4">
                                <div className="slide_txt_head mt-3">Transparency is Our Priority</div>
                                <div className="slide_txt_description mt-4"><span style={{ fontWeight: '600' }}>We operate with full transparency</span>,
                                    ensuring that your experience is secure, straightforward,
                                    and in compliance with industry best practices. Your trust is our top concern</div>
                                <div className="d-flex mt-5 position-relative">
                                    <button className="explore_btn">Explore No</button>
                                    <div className="rightarrow"><img src={arrow_right} height={30} width={30} /></div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row border_style">
                        <div className="col-md-5 grey_div"></div>
                        <div className="col-md-7"></div>
                    </div>
                    <Carousel.Caption style={{ right: '6%', left: '6%' }}>
                        <div className="row">
                            <div className="col-md-8">
                                <img src={slide_img} width={650} height={450} />
                            </div>
                            <div className="col-md-4">
                                <div className="slide_txt_head mt-3">Transparency is Our Priority</div>
                                <div className="slide_txt_description mt-4"><span style={{ fontWeight: '600' }}>We operate with full transparency</span>,
                                    ensuring that your experience is secure, straightforward,
                                    and in compliance with industry best practices. Your trust is our top concern</div>
                                <div className="d-flex mt-5 position-relative">
                                    <button className="explore_btn">Explore No</button>
                                    <div className="rightarrow"><img src={arrow_right} height={30} width={30} /></div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row border_style">
                        <div className="col-md-5 grey_div"></div>
                        <div className="col-md-7"></div>
                    </div>
                    <Carousel.Caption style={{ right: '6%', left: '6%' }}>
                        <div className="row">
                            <div className="col-md-8">
                                <img src={slide_img} width={650} height={450} />
                            </div>
                            <div className="col-md-4">
                                <div className="slide_txt_head mt-3">Transparency is Our Priority</div>
                                <div className="slide_txt_description mt-4"><span style={{ fontWeight: '600' }}>We operate with full transparency</span>,
                                    ensuring that your experience is secure, straightforward,
                                    and in compliance with industry best practices. Your trust is our top concern</div>
                                <div className="d-flex mt-5 position-relative">
                                    <button className="explore_btn">Explore No</button>
                                    <div className="rightarrow"><img src={arrow_right} height={30} width={30} /></div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    )
}

export default Banner;