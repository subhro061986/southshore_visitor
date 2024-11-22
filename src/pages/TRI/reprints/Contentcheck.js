import React, { useEffect, useState, } from "react";
import FooterSouthsore from "../../../components/FooterSouthsore";
import { Header } from "../../../components/Header";
import NavBarSouthsore from "../../../components/NavBarSouthshore";

const Contentcheck = () => {




    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />
                <div>
                    <div className="reference_lists" style={{textAlign:'center'}}>
                        <p style={{fontSize:'20px'}}>Thomson Reuters South Asia Private Limited regularly publishes South Asian editions of selected works from Sweet & Maxwell, UK,</p>
                        <p style={{fontSize:'20px'}}>at a lower price point in comparison to their pricing in the United Kingdom.</p>
                        <p style={{fontSize:'20px'}}>Thomson Reuters South Asia Private Limited is committed to making these editions easily accessible to the legal fraternity in Bangladesh, Bhutan, India, Maldives, Nepal and Sri Lanka</p>
                        <p style={{fontSize:'20px'}}>These editions are for sale only in these countries.</p>
                        <p style={{fontSize:'20px'}}>This is one such publication.</p>
                        <p style={{fontSize:'20px'}}>Thank you for choosing to buy an original copy.</p>
                    </div>
                </div>
            </div>
            <FooterSouthsore />
        </>
    )
}

export default Contentcheck;


