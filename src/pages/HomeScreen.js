import React, { useEffect, useState, } from "react";
import Banner from "../components/Banner";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import logoLink from '../assets/images/logo.svg';
import NavBarSouthsore from "../components/NavBarSouthshore";


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
        <FooterSouthsore/>
        
        </>
    )
}

export default HomeScreen;