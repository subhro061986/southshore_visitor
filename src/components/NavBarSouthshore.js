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
import { Link, useNavigate } from 'react-router-dom';

function NavbarSouthshore() {
    // const currentLocation = window.location;
    const navigate = useNavigate();
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
    const gotoPages=(val)=>{
        navigate(val)
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
                    link: "/leadership/management",
                    absolute: false
                },
                {
                    text: "Advisory Board",
                    link: "/leadership/advisory",
                    absolute: false
                },
                {
                    text: "Team",
                    children: [
                        {
                            text: "Acquisition",
                            link: "/leadership/acquisition",
                            absolute: false
                        },
                        {
                            text: "Editorial & Production",
                            link: "/leadership/editorial",
                            absolute: false
                        },

                        {
                            text: "Sales",
                            link: "/leadership/sales",
                            absolute: false
                        },
                        {
                            text: "Sales support",
                            link: "/leadership/salessupport",
                            absolute: false
                        },
                        {
                            text: "Finance",
                            link: "/leadership/finance",
                            absolute: false
                        },
                    ]
                }
            ]
        },
        {
            text: "Juris Press",
            children: [
                {
                    text: "About Juris Press",
                    link: "/juris/about",
                    absolute: false
                },
                {
                    text: "Titles Published",
                    link: "/juris/publishedtitle",
                    absolute: false
                },
                {
                    text: "Publish with Juris Press",
                    link: "/juris/publishwithjuris",
                    absolute: false
                }
            ]
        },
        {
            text: "Thomson Reuters",
            children: [
                {
                    text: "About Thomson Reuters",
                    link: "/thomson/about",
                    absolute: false
                },
                {
                    text: "Titles Published",
                    link: "/thomson/publishedtitle",
                    absolute: false
                },
                {
                    text: "Publish with Us",
                    link: "/thomson/publishwithus",
                    absolute: false
                }
            ]
        },
        {
            text: "Services",
            link: "/sevices"
        },
        {
            text: "Representations",
            children: [
                {
                    text: "Brill",
                    link: "/representation/brill",
                    absolute: false
                },
                {
                    text: "MyJoVE",
                    link: "/representation/jove",
                    absolute: false
                },
                {
                    text: "Writefull",
                    link: "/representation/writefull",
                    absolute: false
                },
                {
                    text: "Enquiry",
                    link: "/representation/enquiry",
                    absolute: false
                }
            ]
        },
        {
            text: "Platforms",
            children: [
                {
                    text: "e-BooksJunction",
                    link: `https://ebooksjunction.com/`,
                    absolute: true
                },
                {
                    text: "BooksCentral",
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
                                            // Handle absolute external links
                                            if (navItem?.children?.absolute === true) {
                                                return (
                                                    <Nav.Link
                                                        key={index}
                                                        onClick={() => window.open(navItem?.link, '_blank', 'noopener,noreferrer')}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <span
                                                            style={{
                                                                fontFamily: 'Ubuntu',
                                                                fontWeight: isThisPageActive(navItem?.link) ? 700 : 500,
                                                                fontSize: "14px",
                                                                color: isThisPageActive(navItem?.link) ? "#4D39F1" : "#535861",
                                                                borderBottom: isThisPageActive(navItem?.link) ? "4px solid #4D39F1" : "",
                                                                paddingBottom: "10px",
                                                            }}
                                                        >
                                                            {navItem.text}
                                                        </span>
                                                    </Nav.Link>
                                                );
                                            }

                                            return (
                                                <Nav.Link 
                                                //href={navItem?.link} 
                                                onClick={()=>gotoPages(navItem?.link)}
                                                key={index}
                                                >
                                                    <span style={{
                                                        fontFamily: 'Ubuntu',
                                                        fontWeight: isThisPageActive(navItem?.link) ? 700 : 500,
                                                        fontSize: "14px",
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
                                                                    fontSize: "14px",
                                                                    color: isThisPageActive(navItem?.link) ? "#4D39F1" : "#535861",
                                                                    borderBottom: isThisPageActive(navItem?.link) ? "4px solid #4D39F1" : "",
                                                                    paddingBottom: "10px",

                                                                }}>
                                                                    {navItem?.text}<FaChevronDown style={{ marginLeft: '5px', marginRight: 0 }} />
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
                            +91-44-79624624
                        </Link>
                    </div>
                </Container>
            </Navbar >
        </>
    );
}

export default NavbarSouthshore;