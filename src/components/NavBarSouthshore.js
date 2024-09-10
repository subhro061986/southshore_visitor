import React, { useEffect, useState, } from "react";
// import facebook from "../Assets/Images/fb-rounded.png";
// import instagram from "../Assets/Images/ig-rounded.png";
// import youtube from "../Assets/Images/yt-rounded.png";
// import startupindia from "../Assets/Images/startup-india.png";
// import heart from "../Assets/Images/heart.png";
// import shopping_cart from "../Assets/Images/shopping-cart.png";
import menu from '../assets/images/menu.png';
import { Link, useNavigate } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { HashLink } from 'react-router-hash-link';
// import { UserProfile } from "../Context/Usercontext"
// import { useAuth } from '../Context/Authcontext';

const NavBarSouthsore = () => {
    const navigate = useNavigate();
    // const { category_by_publisher, items, allActivePublisher, allCategoryList } = UserProfile()
    // const { wishlistshow,cartCount } = useAuth()
    const [drawerStat, setDrawerStat] = useState(false);
    const allCategoryList = [];
    // const [submneuDrawer, setsubmneuDrawer] = useState(false)
    // const [pubcat, setPubcat] = useState([])
    // const [cartno, setCartno] = useState()
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
                    link: "/leadership/publishedtitle"
                },
                {
                    text: "Publish with Juris",
                    link: "/leadership/publishwithjuris"
                }
            ]
        },
        {
            text: "Thomson Reuters",
            children: []
        },
        {
            text: "Representation",
            children: []
        },
        {
            text: "Platform",
        },
        {
            text: "Open Access",
        },
        {
            text: "Resources",
        }
    ]


    // useEffect(() => {
    // }, [wishlistshow])

    const gotoWishlist = () => {
        // if (wishlistshow === true){
        //     navigate('/wishlist')
        // }
        // else{
        //     navigate('/login')
        // }

    }

    // const goToCart = ()=>{
    //     navigate('/cartpage');
    // }

    const openDrawer = () => {
        setDrawerStat(!drawerStat)
    }

    // const openSubMenu = () => {
    //     setsubmneuDrawer(!submneuDrawer)
    // }

    const get_pub_data = (e) => {
        let pub_id = e.target.value
        console.log("pub_id", pub_id)
        // navigate('/category',
        //     { state: { publisher_id: pub_id } }
        // )
    }

    const get_pub_data_mobile = (cat_id) => {
        console.log('get_pub_data pu i d passed : ', cat_id)
        // navigate('/category',
        //     { state: { category_id: cat_id } }
        // )
    }

    // useEffect(() => {
    //     //book_category_by_publisher(1)

    // }, [items])

    const gotoAbout = () => {
        console.log('About e book');
        // window.scrollTo(0, 260)
    }
    const gotoFet = () => {
        console.log('Feature');
        // window.scrollTo(0, 1350)
    }

    const gotoCert = () => {
        // console.log('About South shore');
        // window.scrollTo(0, 2850)
    }

    const cat_dropdown_nav = (e) => {
        let cat_id = e.target.value
        // console.log('cat_id from nav select', cat_id)
        navigate('/category',
            { state: { category_id: cat_id } }
        )
    }


    // const gotoWishlist = () => {
    //     if (wishlistshow === true) {
    //         navigate('/wishlist')
    //     }
    //     else {
    //         navigate('/login')
    //     }

    // }

    const goToCart = () => {
        navigate('/cartpage');
    }

    return (
        <>
            <div className="mobile_menu_display" onClick={openDrawer}>
                <img src={menu} alt="mobile menu button" />
            </div>
            {
                drawerStat == true && (
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            navItems?.map((item) => {
                                if (!item.children) {
                                    return (
                                        <li className="nav-item">
                                            <HashLink smooth className="nav-link" to='/#head_banner' >{item.text}</HashLink>
                                        </li>
                                    );
                                }
                                else {
                                    return (
                                        <li className="nav-item dropdown" style={{ height: '52px' }}>
                                            <Accordion>
                                                <Accordion.Item eventKey="0" className="accordian_item">
                                                    <Accordion.Header>{item.text}</Accordion.Header>
                                                    {
                                                        item.children.length > 0 && item.children?.map(
                                                            (data, index) => (
                                                                data.isactive === 1 &&
                                                                <Accordion.Body key={index} value={data?.link}
                                                                    onClick={() => navigate(data?.link)}>
                                                                    {data.text}
                                                                </Accordion.Body>
                                                            )
                                                        )
                                                    }
                                                </Accordion.Item>
                                            </Accordion>
                                        </li>
                                    );
                                }
                            })
                        }
                    </ul>
                )
            }
            {
                drawerStat == false && (
                    <nav className="navbar navbar-expand-lg top-nav nav_padding_y">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 bar_menu">
                            {
                                navItems?.map((item) => {
                                    if (!item.children) {
                                        return (
                                            <li className="nav-item">
                                                <HashLink smooth className="nav-link" to={item?.link} >{item.text}</HashLink>
                                            </li>
                                        );
                                    }
                                    else {
                                        return (
                                            <li className="nav-item dropdown mt-3 me-3">
                                                <select className="cat_dropdown"
                                                    // style={{ width: '121px' }}
                                                    name="cars" id="cars"
                                                    onChange={(e) => { navigate(e.target.value) }}
                                                >
                                                    <option value={item.link} selected>{item.text}</option>

                                                    {item?.children?.map((data, index) => (
                                                        (

                                                            <option style={{ backgroundColor: "#E4E8F3" }} key={index} value={data?.link}>{data?.text}</option>

                                                        )
                                                    ))}
                                                </select>
                                            </li>
                                        );
                                    }
                                })
                            }
                        </ul>
                    </nav >
                )
            }
        </>
    );
}

export default NavBarSouthsore;