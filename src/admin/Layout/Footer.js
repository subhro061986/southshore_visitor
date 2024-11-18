import React, { useEffect, useState, } from "react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2024 Southshore Innovations Private Limited. All rights reserved.</span>
                    {/* <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted & made with <i className="mdi mdi-heart text-danger"></i></span> */}
                </div>
            </footer>
        </>
    )
};
export default Footer;