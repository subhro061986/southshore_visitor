import React, { useEffect, useState, } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg_southshore from '../assets/images/bg_southsore.png'




const Banner = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <>
            <p>hello Banner</p>
            <div className="banner">
                <Carousel
                    responsive={responsive}
                    // autoPlay={true}
                    // autoPlaySpeed={2000}
                    infinite={true}
                >
                    
                    <div className="">
                        {/* <img src={bg_southshore} /> */}
                        abcd
                    </div>
                    <div className="">
                        {/* <img src={bg_southshore} /> */}
                        abcd
                    </div>
                    <div className="">
                        {/* <img src={bg_southshore} /> */}
                        abcd
                    </div>
                    {/* <div className="banner_bg">
                    <img src={bg_southshore} />
                </div>
                <div className="banner_bg">
                    <img src={bg_southshore} />
                </div> */}
                </Carousel>
            </div>


        </>
    )
}

export default Banner;