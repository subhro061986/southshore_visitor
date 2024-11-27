import publisher_logo from "../assets/images/publisher_demo.png";
import admin_logo from "../assets/images/southshore_new_logo.png";
import facebook_logo from "../assets/images/Facebook-icon.png";
import x from "../assets/images/x.png";
import sms from "../assets/images/sms.png";
import call from "../assets/images/call.png";
import linkedin_logo from "../assets/images/Linkedin-icon.png";
import instagram_logo from "../assets/images/Instagram-icon.png";
import arrow_right from "../assets/images/arrow_right.png";
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from "react-router-dom";
import useWindowDimensions from '../hooks/windowDimensions';
import Config from "../Config/Config.json";
// import { UserProfile } from "../Context/Usercontext";


const FooterSouthsore = () => {

    const windowDimensions = useWindowDimensions();
    const isTabScreen = windowDimensions?.width <= Config.TAB_SCREEN_MAX_WIDTH && windowDimensions?.width >= Config.TAB_SCREEN_MIN_WIDTH ? true : false;
    const isSmallTabScreen = windowDimensions?.width <= 991 && windowDimensions?.width >= 768 ? true : false;



    return (
        <div className="mt-3 pt-5 footerstyle">

            <div className="container my-2">
                <div className="row">
                    <div className="col-md-3 s_f_logo_col">
                        <img src={admin_logo}
                            width={180}
                            // onClick={imgNavHome} 
                            style={{ cursor: 'pointer' }} />
                        <div className="d-flex flex-row mt-4">
                            <div className="">
                                <ul className="remove-dots margin_l_footer" >
                                    {/* <div className="custom-footer-Header">Southshore Innovations Pvt. Ltd</div> */}
                                    <div className="follow mb-2">
                                        Follow us on
                                    </div>

                                    <div className={`d-inline ${isSmallTabScreen !== true ? 'pe-2' : 'pe-0'} `}>
                                        <img src={facebook_logo} width={20} />
                                    </div>
                                    <div className={`d-inline ${isSmallTabScreen !== true ? 'pe-2' : 'pe-0'} `}>
                                        <img src={instagram_logo} width={23} />
                                    </div>
                                    <div className={`d-inline ${isSmallTabScreen !== true ? 'pe-2' : 'pe-1'} `}>
                                        <img src={x} width={20} />
                                    </div>
                                    <div className="d-inline">
                                        <img src={linkedin_logo} width={20} />
                                    </div>



                                </ul>
                            </div>


                        </div>
                    </div>
                    {/* <div className="col-md-2 s_f_mar_bot">
                        <div className="d-flex flex-row">
                            <div className="">
                                <ul className="remove-dots" >
                                    <div className="custom-footer-Header">Southshore Innovations Pvt. Ltd</div>
                                    <div className="follow mb-2">
                                        Follow Us on
                                    </div>

                                    <div className="d-inline pe-2">
                                        <img src={facebook_logo} width={20}/>
                                    </div>
                                    <div className="d-inline pe-2">
                                        <img src={instagram_logo} width={23}/>
                                    </div>
                                    <div className="d-inline pe-2">
                                        <img src={x} width={20}/>
                                    </div>
                                    <div className="d-inline">
                                        <img src={linkedin_logo} width={20}/>
                                    </div>



                                </ul>
                            </div>


                        </div>
                    </div> */}
                    <div className={`${isTabScreen !== true ? 'col-md-2' : 'col-md-1'} s_f_mar_bot`}>
                        <div className="d-flex flex-row">
                            <div className="">
                                <ul className="remove-dots" >
                                    <div className="custom-footer-Header">Links</div>
                                    {/* {allActivePublisher.map((data, index) => ( */}
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}
                                    // key={index} 
                                    // hidden={data.isactive === 1 ? false : true}
                                    // onClick={(e) => { get_publisher_data(data.id) }}
                                    >
                                        <Link className="nav-link" to="/juris/about">
                                            Juris Press
                                        </Link>
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        <Link className="nav-link" to="/thomson/about">
                                            Thomson Reuters
                                        </Link>
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        <Link className="nav-link" to="/representation/brill">
                                            Brill
                                        </Link>
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        <Link className="nav-link" to="/representation/jove">
                                            MyJoVE
                                        </Link>
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        <Link className="nav-link" to="/representation/writefull">
                                            Writefull
                                        </Link>
                                    </li>
                                    {/* ))} */}


                                </ul>
                            </div>


                        </div>
                    </div>


                    <div className="col-md-2 s_f_mar_bot">
                        <div className="d-flex flex-row">
                            <div className="">
                                <ul className="remove-dots">
                                    <div className="custom-footer-Header">Platforms</div>

                                    <li className="custom-footer-li">
                                        <Link className="nav-link" to="https://ebooksjunction.com/">
                                            e-BooksJunction
                                        </Link>
                                    </li>
                                    <li className="custom-footer-li">
                                        <Link className="nav-link" to="https://bookscentral.in/">
                                            BooksCentral
                                        </Link>
                                    </li>


                                </ul>
                            </div>


                        </div>
                    </div>


                    <div className="col-md-3 s_f_mar_bot">
                        <ul className="remove-dots">
                            <div className="custom-footer-Header">Southshore Innovations Pvt. Ltd</div>

                            <li className="custom-footer-li">
                                {/* Southshore Innovations Private Limited */}
                                Plot 13, Heritage Phase II,
                                Telephone Nagar, Perungudi,
                                Chennai - 600096, Tamil Nadu, India

                                {/* <p className="mt-2" style={{ cursor: 'pointer' }}
                                // onClick={openMailto}
                                ><b>Mail Us </b>: sales@southshore.in </p> */}
                            </li>
                            <li className="custom-footer-li">
                                <div className="south_key">CIN No : <span className="south_val">U22219TN2022PTC151260</span> </div>
                                <div className="south_key">GSTIN : <span className="south_val">33ABICS2457D1ZI</span></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 s_f_mar_bot">
                        <ul className="remove-dots">
                            <div className="custom-footer-Header"> Contact us</div>
                            {/* <Button className="mt-2 rounded-pill px-4" variant="outline-primary">Contact us</Button> */}
                            <div className="mt-4">
                                {/* <h6>Social Media</h6> */}
                                <div className="d-flex justify-content-between p-2" style={{ width: '180px' }}>
                                    <img src={sms} />
                                    <div onClick={() => window.location = 'mailto:sales@southshore.in'} style={{ cursor: 'pointer' }}>sales@southshore.in</div>
                                </div>
                                <div className="d-flex justify-content-between p-2" style={{ width: '163px' }}>
                                    <img src={call} height={20} />
                                    <div>+91-44-79624624</div>
                                </div>
                                {/* <div className="d-inline p-2">
                                    <img src={linkedin_logo} />
                                </div>
                                <div className="d-inline p-2">
                                    <img src={instagram_logo} />
                                </div> */}

                            </div>
                            {/* <div className="pos_rel">
                                <input type="text" className="newsletter_email" placeholder="Enter Email" />
                                <img src={arrow_right} className="arrow_pos" />
                            </div> */}


                        </ul>

                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex align-items-center justify-content-center footer-note py-2">
                <span className="text-center"> Powered by <a className="footer-note" href="#">Southshore Innovations Private Limited</a></span>
                {/* <div className="" >
                    
                </div> */}
            </div>
        </div>

    )
}

export default FooterSouthsore