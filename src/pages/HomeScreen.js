import React from "react";
import { Header } from "../components/Header";
import logoLink from '../assets/images/logo.svg';
import NavBarSouthsore from "../components/NavBarSouthshore";


const HomeScreen = () => {

    return(
        <div class="container">
            <Header
            logoLink={logoLink}
            logoWidth={55}
            logoHeight={54}
            />
            <NavBarSouthsore />
        </div>
    )
}

export default HomeScreen;