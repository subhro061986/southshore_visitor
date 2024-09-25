import React, { useEffect, useState, } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { PiFlagBanner } from "react-icons/pi";

const SideMenuBar = () => {

    const [activeTab, setActiveTab] = useState("mannagebanner");

    return (
        <>
            <nav className="sidebar sidebar-offcanvas sidebar_submenu_fonts" id="sidebar">
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
                    <li className={`nav-item ${activeTab === "managepublishers" ? "active" : ""}`}
                        onClick={() => setActiveTab("managepublishers")}
                    >
                        <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <span className="menu-title">Manage Publishers</span>
                            {/* <i className="menu-arrow"></i> */}
                            {/* <i className="mdi mdi-crosshairs-gps menu-icon"></i> */}
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item text-wrap">
                                    <Link className="nav-link" to="/admin/managpublishedtitles">Manage Published Titles</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="">Dropdowns</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="">Typography</Link>
                                </li> */}
                            </ul>
                        </div>
                    </li>

                    {/* <li
                        className={`nav-item ${activeTab === "managejuris" ? "active" : ""}`}
                        onClick={() => setActiveTab("managejuris")}>
                        <Link className="nav-link" 
                        // to="/admin/managebanner"
                        >
                            <span className="menu-title">Manage Juris Press</span>
                            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                        </Link>

                    </li> */}


                    <li
                        className={`nav-item ${activeTab === "manageresources" ? "active" : ""}`}
                        onClick={() => setActiveTab("manageresources")}>
                        <Link className="nav-link" 
                        // to="/admin/managebanner"
                        >
                            <span className="menu-title">Manage Resources</span>
                            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                        </Link>

                    </li>

                    <li
                        className={`nav-item ${activeTab === "manageleadership" ? "active" : ""}`}
                        onClick={() => setActiveTab("manageleadership")}>
                        <Link className="nav-link" 
                        to="/admin/manageleadership"
                        >
                            <span className="menu-title">Manage Leadership</span>
                            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                        </Link>

                    </li>

                    <li
                        className={`nav-item ${activeTab === "managerepresentation" ? "active" : ""}`}
                        onClick={() => setActiveTab("managerepresentation")}>
                        <Link className="nav-link" 
                        // to="/admin/managebanner"
                        >
                            <span className="menu-title">Manage Representation</span>
                            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                        </Link>

                    </li>

                    <li
                        className={`nav-item ${activeTab === "manageopenaccess" ? "active" : ""}`}
                        onClick={() => setActiveTab("manageopenaccess")}>
                        <Link className="nav-link" 
                        to="/admin/manageopenaccess"
                        >
                            <span className="menu-title">Manage Open Access</span>
                            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
                        </Link>

                    </li>
                    
                </ul>
            </nav>
        </>
    )
};
export default SideMenuBar;