import React, { useEffect, useState, } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { PiFlagBanner } from "react-icons/pi";

const SideMenuBar = () => {

    const [activeTab, setActiveTab] = useState("mannagebanner");

    return (
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">

                    <li
                        className={`nav-item ${activeTab === "mannagebanner" ? "active" : ""}`}
                        onClick={() => setActiveTab("mannagebanner")}
                    >
                        <Link className="nav-link" to="/admin/managebanner">
                            <span className="menu-title">Mange Banner</span>
                            <i className="mdi mdi-home menu-icon"></i>
                        </Link>
                    </li>
                    <li className={`nav-item ${activeTab === "basicui" ? "active" : ""}`}
                        onClick={() => setActiveTab("basicui")}
                    >
                        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <span className="menu-title">Basic UI Elements</span>
                            {/* <i className="menu-arrow"></i> */}
                            {/* <i className="mdi mdi-crosshairs-gps menu-icon"></i> */}
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    <Link className="nav-link" to="">Buttons</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="">Dropdowns</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="">Typography</Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li
                        className={`nav-item ${activeTab === "managejuris" ? "active" : ""}`}
                        onClick={() => setActiveTab("managejuris")}>
                        <Link className="nav-link" 
                        // to="/admin/managebanner"
                        >
                            <span className="menu-title">Manage Juris Press</span>
                            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                        </Link>

                    </li>
                    
                </ul>
            </nav>
        </>
    )
};
export default SideMenuBar;