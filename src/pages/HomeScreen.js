import React, { useEffect, useState, } from "react";
import Banner from "../components/Banner";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import logoLink from '../assets/images/logo.svg';
import NavBarSouthsore from "../components/NavBarSouthshore";
import AboutSouthshore from "../components/AboutSouthshore";


const HomeScreen = () => {

    return(
        <>
        <div class="container">
            <Header
            logoLink={logoLink}
            logoWidth={55}
            logoHeight={54}
            />
            <NavBarSouthsore />
            
        
        </div>
        <Banner />
            <AboutSouthshore/>
        <FooterSouthsore/>
        
        </>
    )
}

export default HomeScreen;