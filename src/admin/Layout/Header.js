import React, { useEffect, useState, } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/southshore_logo_alt.svg'
import { MdLogout } from "react-icons/md";
import { useAuth } from "../Context/Authcontext";
const Header = (props) => {

    const navigate = useNavigate();
    const { logOut, authDeatils } = useAuth()
    useEffect(() => {

    }, [authDeatils])

    const doLogOut = async () => {
        const resp = await logOut();
        if (resp === 'success') {
            navigate("/admin");
        }

    }

    return (
        <>
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                    <a className="navbar-brand brand-logo" href="index.html"><img src={logo} alt="logo" style={{ height: '40px' }} /></a>
                    {/* <a className="navbar-brand brand-logo-mini" href="index.html"><img src={logo} alt="logo" /></a> */}
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <div className="d-flex align-self-center title_header">
                        {/* <span className="mdi mdi-menu"></span> */}
                        {props.title}
                    </div>
                    <div className="search-field d-none d-md-block">

                    </div>
                    <ul className="navbar-nav navbar-nav-right">




                        <li className="nav-item nav-logout d-none d-lg-block">
                            <a className="nav-link" href="#">
                                {/* <i className="mdi mdi-power"></i> */}
                                {/* <MdLogout size={30} onClick={doLogOut} /> */}
                                <button className="btn btn-outline-danger" onClick={doLogOut}>Log Out</button>
                            </a>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    )
};
export default Header;