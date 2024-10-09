import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { FaChevronDown } from "react-icons/fa";
import useWindowDimensions from "../hooks/windowDimensions";
import Config from "../Config/Config.json"

const NavCard = (props) => {
    const navItems = props?.navItems;
    const [selectedNavItem, setSelectedNavItem] = useState(null);

    const windowDimensions = useWindowDimensions();

    const isMobileScreen = windowDimensions?.width <= Config.MOBILE_SCREEN_MIN_WIDTH ? true : false;

    const isThisPageActive = (link) => {
        console.log("window.location", window.location);
        if (window.location.href?.endsWith(link)) {
            return true;
        }
        else {
            return false;
        }
    }
    // box-shadow: 0px 40px 60px 0px rgba(111, 122, 159, 0.25);

    return (
        <div style={{
            width: "max-content",
            height: "max-content",
            padding: "10px",
            // border: `${!isMobileScreen ? '0.5px solid black' : 'none'}`,
            boxShadow: `${!isMobileScreen ? '0px 40px 60px 0px rgba(111, 122, 159, 0.25);' : ''}`
        }}>
            <div className="row">
                {/* Main column */}
                <div className={`col-6 ${isMobileScreen ? 'p-2': ''}`}>
                    <ul>
                        {navItems?.map((navElem, index) => {
                            return (
                                <li style={{ listStyleType: "none", whiteSpace: "nowrap" }} key={index} onClick={(e) => { setSelectedNavItem(navElem) }}>
                                    <Nav.Link href={navElem?.link}>
                                        <span style={{
                                            fontFamily: 'Ubuntu',
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: isThisPageActive(navElem?.link) ? "#4D39F1" : "#535861",
                                            whiteSpace: "nowrap",
                                            paddingBottom: isMobileScreen? "1px" : ""
                                        }}>
                                            {navElem?.text}
                                        </span>
                                        { navElem?.children ? <FaChevronDown style={{ marginLeft: '5px' }} /> : "" }
                                    </Nav.Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Sub column */}
                <div className={`col-6 ${isMobileScreen ? 'p-0': ''}`}>
                    <ul>
                        {selectedNavItem && selectedNavItem?.children && selectedNavItem?.children?.map((navElem, index) => {
                            return (
                                <li style={{ listStyleType: "none" }} key={index}>
                                    <Nav.Link href={navElem?.link}>
                                        <span style={{
                                            fontFamily: 'Ubuntu',
                                            fontWeight: isThisPageActive(navElem?.link) ? 500 : 400,
                                            fontSize: "15px",
                                            color: isThisPageActive(navElem?.link) ? "#4D39F1" : "#7D828A",
                                            overflow: "auto",
                                            whiteSpace: "wrap"
                                        }}>
                                            {navElem?.text}
                                        </span>
                                    </Nav.Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavCard;