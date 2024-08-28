import publisher_logo from "../assets/images/publisher_demo.png";
import admin_logo from "../assets/images/southshore_logo.png";
import facebook_logo from "../assets/images/Facebook-icon.png";
import x from "../assets/images/x.png";
import sms from "../assets/images/sms.png";
import call from "../assets/images/call.png";
import linkedin_logo from "../assets/images/Linkedin-icon.png";
import instagram_logo from "../assets/images/Instagram-icon.png";
import arrow_right from "../assets/images/arrow_right.png";
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { UserProfile } from "../Context/Usercontext";


const FooterSouthsore = () => {






    return (
        <div className="mt-5">

            <div className="container my-2">
                <div className="row">
                    <div className="col-md-2 s_f_logo_col" style={{ width: 'fit-content' }}>
                        <img src={admin_logo} width={80}
                            // onClick={imgNavHome} 
                            style={{ cursor: 'pointer' }} />
                    </div>
                    <div className="col-md-2 s_f_mar_bot">
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
                    </div>
                    <div className="col-md-2 s_f_mar_bot">
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
                                        {/* {console.log("PUB DATA : ", data)} */}
                                        {/* {data.name}  */}
                                        Juris Press
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        Thomson Reuters
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        Brill
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        MyJove
                                    </li>
                                    <li className="custom-footer-li" style={{ cursor: 'pointer' }}>
                                        Writefull
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
                                        <Link className="nav-link" to="/privacypolicy">
                                            E-Books Junction
                                        </Link>
                                    </li>
                                    <li className="custom-footer-li">
                                        <Link className="nav-link" to="/terms">
                                            Books Central
                                        </Link>
                                    </li>


                                </ul>
                            </div>


                        </div>
                    </div>


                    <div className="col-md-2 s_f_mar_bot">
                        <ul className="remove-dots">
                            <div className="custom-footer-Header">Southshore Innovations Pvt. Ltd</div>

                            <li className="custom-footer-li">
                                Southshore Innovations Private Limited Plot 13, Heritage Phase II Telephone Nagar, Perungudi Chennai - 600096
                                {/* <p className="mt-2" style={{ cursor: 'pointer' }}
                                // onClick={openMailto}
                                ><b>Mail Us </b>: sales@southshore.in </p> */}
                            </li>
                            <li className="custom-footer-li">
                                <div className="south_val"><span className="south_key">CIN No:</span> U22219TN2022PTC151260</div>
                                <div className="south_val"><span className="south_key">GSTIN:</span> 33ABICS2457D1ZI</div>
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
                                    <div>sales@southshore.in</div>
                                </div>
                                <div className="d-flex justify-content-between p-2" style={{ width: '163px' }}>
                                    <img src={call} />
                                    <div>+1 (650) 555-0111</div>
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