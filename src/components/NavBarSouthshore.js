import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavCard from './NavCard';
import { FaChevronDown } from 'react-icons/fa';
import useWindowDimensions from '../hooks/windowDimensions';
import Config from "../Config/Config.json";
import iconCall from "../assets/images/icon-call.svg";
import { Link } from 'react-router-dom';

function NavbarSouthshore() {
    // const currentLocation = window.location;
    const windowDimensions = useWindowDimensions();

    const isMobileScreen = windowDimensions?.width <= Config.MOBILE_SCREEN_MIN_WIDTH ? true : false;

    const isThisPageActive = (link) => {
        // console.log("window.location", window.location);
        if (window.location.href?.endsWith(link)) {
            return true;
        }
        else {
            return false;
        }
    }

    const navItems = [
        {
            text: "Home",
            link: "/"
        },
        {
            text: "Leadership",
            children: [
                {
                    text: "Management",
                    link: "/leadership/management"
                },
                {
                    text: "Advisory Board",
                    link: "/leadership/advisory"
                },
                {
                    text: "Team",
                    children: [
                        {
                            text: "Editorial & Production",
                            link: "/leadership/editorial"
                        },
                        {
                            text: "Acquisition & Commissioning",
                            link: "/leadership/acquisition"
                        },
                        {
                            text: "Marketing",
                            link: "/leadership/marketing"
                        },
                        {
                            text: "Sales",
                            link: "/leadership/sales"
                        },
                        {
                            text: "Sales support",
                            link: "/leadership/salessupport"
                        }
                    ]
                }
            ]
        },
        {
            text: "Juris Press",
            children: [
                {
                    text: "About Juris Press",
                    link: "/juris/about"
                },
                {
                    text: "Titles published",
                    link: "/juris/publishedtitle"
                },
                {
                    text: "Publish with Juris",
                    link: "/juris/publishwithjuris"
                }
            ]
        },
        {
            text: "Thomson Reuters",
            children: [
                {
                    text: "About Thomson Reuters",
                    link: "/thomson/about"
                },
                {
                    text: "Publish with Us",
                    link: "/thomson/publishwithus"
                }
            ]
        },
        {
            text: "Representation",
            children: [
                {
                    text: "Brill",
                    link: "/representation/brill"
                },
                {
                    text: "MyJove",
                    link: "/representation/jove"
                },
                {
                    text: "Writeful",
                    link: "/representation/writefull"
                },
                {
                    text: "enquiry",
                    link: "/representation/enquiry"
                }
            ]
        },
        {
            text: "Platform",
            children: [
                {
                    text: "Ebooksjunction",
                    link: `https://ebooksjunction.com/`,
                    absolute: true
                },
                {
                    text: "Bookscentral",
                    link: `https://bookscentral.in/`,
                    absolute: true
                }
            ]
        },
        {
            text: "Open Access",
            link: "/openaccess"
        },
        {
            text: "Resources",
            link: "/resources"
        }
    ];
    return (
        <>
            <Navbar key={"lg"} expand={"lg"} className="mb-3"
                // style={{
                //     overflowX: "scroll",
                //     overflowY: "visible",
                //     scrollBehavior: "smooth",
                //     scrollbarWidth: "none",
                //     whiteSpace: "nowrap"
                // }}
            >
                <Container fluid className='p-0'
                    style={{
                        // overflowX: "scroll",
                        // scrollBehavior: "smooth",
                        // scrollbarWidth: "none",
                        // whiteSpace: "nowrap"
                    }}
                >
                    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} style={{ border: 'none' }} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className={`d-flex justify-content-start ${isMobileScreen ? 'align-content-center' : 'align-items-center'} flex-grow-1 pe-3`}>
                                {
                                    navItems.map((navItem, index) => {
                                        if (!navItem?.children) {
                                            return (
                                                <Nav.Link href={navItem?.link}>
                                                    <span style={{
                                                        fontFamily: 'Ubuntu',
                                                        fontWeight: isThisPageActive(navItem?.link) ? 700 : 500,
                                                        fontSize: "16px",
                                                        color: isThisPageActive(navItem?.link) ? "#4D39F1" : "#535861",
                                                        borderBottom: isThisPageActive(navItem?.link) ? "4px solid #4D39F1" : "",
                                                        paddingBottom: "10px"
                                                    }}>
                                                        {navItem.text}
                                                    </span>
                                                </Nav.Link>
                                            );
                                        }
                                        else {
                                            return (
                                                <>
                                                    <NavDropdown
                                                        title={
                                                            <>
                                                                <span style={{
                                                                    fontFamily: 'Ubuntu',
                                                                    fontWeight: isThisPageActive(navItem?.link) ? 700 : 500,
                                                                    fontSize: "16px",
                                                                    color: isThisPageActive(navItem?.link) ? "#4D39F1" : "#535861",
                                                                    borderBottom: isThisPageActive(navItem?.link) ? "4px solid #4D39F1" : "",
                                                                    paddingBottom: "10px",
                                                                    
                                                                }}>
                                                                    {navItem?.text}<FaChevronDown style={{ marginLeft: '5px', marginRight:0 }} />
                                                                </span>
                                                            </>
                                                        }
                                                        id={`offcanvasNavbarDropdown-expand-lg`}
                                                        
                                                    >
                                                        <NavCard navItems={navItem?.children} />
                                                    </NavDropdown>
                                                </>
                                            );
                                        }
                                    })
                                }
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <div className='d-flex align-items-center ms-auto' hidden={isMobileScreen}>
                        <img src={iconCall} width={25} height={25} />
                        <Link className='ms-2' type='tel'
                            style={{
                                fontFamily: "Roboto",
                                fontSize: "15px",
                                fontWeight: 500,
                                color: "#535861"
                            }}
                        >
                            +1 (650) 555-0111
                        </Link>
                    </div>
            </Container>
        </Navbar >
        </>
    );
}

export default NavbarSouthshore;