import React from "react";
import { Header } from "../components/Header";
import NavbarSouthshore from "../components/NavBarSouthshore";
import FooterSouthsore from "../components/FooterSouthsore";
import sms from "../assets/images/sms.png";
import call from "../assets/images/call.png";
import Config from "../Config/Config.json"
import useWindowDimensions from '../hooks/windowDimensions';

const ContactUs = () => {

  const windowDimensions = useWindowDimensions();

  const isTabScreen = windowDimensions?.width <= 991 && windowDimensions?.width >= 768 ? true : false;

  return (
    <>
      <div className="container">
        <Header />
        <NavbarSouthshore />

        <div className="d-flex flex-column justify-content-center align-items-center mb-5">
          <h1 className="contactUs_heading d-flex justify-content-center align-items-center mb-3 ">
            Contact Us
          </h1>
          <p className=" contactUs_desc d-flex justify-content-center align-items-center">
            Contact us about anything related to our company or services.
            <br />
            We'll do our best to get back to you as soon as possible.
          </p>
        </div>
        <h1 className=" contactUs_SouthShore d-flex justify-content-center align-items-center mb-5">

          Southshore Innovations Private Limited
        </h1>

        <div>
          <div className="row mb-3">
            <div className="col-md-6" style={{ paddingRight: 0 }}>
              <div className="card_style_1 p-5">
                <div className="d-flex justify-content-around align-items-center">
                  <h4 className=" contactUs_card_heading me-5 contact_mb_14"
                  // style={isTabScreen !== true ? { marginBottom: '14%' } : { marginBottom: '32%' }}
                  >Address</h4>
                  <p className="contactUs_card_desc">
                    <b>Southshore Innovations Private Limited</b>
                    <br />
                    Plot 13, Heritage Phase II
                    Telephone Nagar, Perungudi
                    Chennai – 600096

                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ paddingRight: 0 }}>
              <div
                className="card_style_1 p-5 mt_4"
                style={{ justifyContent: "start" }}
              >
                <div>
                  <div className="d-flex justify-content-around align-items-center mb-1">
                    <h4 className=" contactUs_card_heading me-5">Email ID</h4>
                    <img
                      className="me-2"
                      src={sms}
                      style={{ marginTop: "-4%" }}
                    />
                    <p className="contactUs_card_desc"> sales@southshore.in</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <h4 className="contactUs_card_heading me-5">Phone</h4>
                    <img src={call} style={{ marginTop: '-4%' }} />
                    <p className="contactUs_card_desc"> +91-44-79624624</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-6" style={{ paddingRight: 0 }}>
              <div
                className="card_style_1 p-5"
                style={{ justifyContent: "start" }}
              >
                <div className="d-flex justify-content-around align-items-center">
                  <h4 className="contactUs_card_heading me-5">Sales queries</h4>
                  <img className="me-2" src={sms} style={{ marginTop: "-4%" }} />
                  <p className="contactUs_card_desc"> sales@southshore.in</p>
                </div>
              </div>
            </div>
            <div className="col-md-6" style={{ paddingRight: 0 }}>
              <div
                className="card_style_1 p-5 mt_4"
                style={{ justifyContent: "start" }}
              >
                <div className="d-flex justify-content-around align-items-center">
                  <h4 className="contactUs_card_heading me-5">VAT</h4>
                  <p className="contactUs_card_desc"> 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <FooterSouthsore />
    </>
  );
};

export default ContactUs;
