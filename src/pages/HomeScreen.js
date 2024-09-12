import React, { useEffect, useState, } from "react";
import Banner from "../components/Banner";
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import NavBarSouthsore from "../components/NavBarSouthshore";
import AboutSouthshore from "../components/AboutSouthshore";


const HomeScreen = () => {

    return(
        <>
        <div className="container">
            <Header/>
            <NavBarSouthsore />
            
        
        </div>
        <Banner />
            <AboutSouthshore/>
        <FooterSouthsore/>
        
        </>
    )
}

export default HomeScreen;