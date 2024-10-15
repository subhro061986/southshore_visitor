import React from "react";
import { Header } from "../components/Header";
import NavbarSouthshore from "../components/NavBarSouthshore";
import FooterSouthsore from "../components/FooterSouthsore";
import sms from "../assets/images/sms.png";
import call from "../assets/images/call.png";

const ContactUs = () => {
  return (
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

        Southshore Innovations Pvt. Ltd
      </h1>

      <div>
        <div className="row mb-3">
          <div className="col-md-6">
            <div className="card_style_1 p-5">
              <div className="d-flex justify-content-around align-items-center mb-2">
                <h4 className=" contactUs_card_heading me-5" style={{marginBottom:'14%'}}>Address</h4>
                <p className="contactUs_card_desc">
                  Southshore Innovations Private Limited Plot 13, Heritage Phase
                  II Telephone Nagar, Perungudi Chennai - 600096
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card_style_1 p-5 "
              style={{ justifyContent: "start" }}
            >
              <div>
                <div className="d-flex justify-content-around align-items-center mb-1">
                  <h4 className=" contactUs_card_heading me-5">Email Id</h4>
                  <img
                    className="me-2"
                    src={sms}
                    style={{ marginTop: "-4%" }}
                  />
                  <p className="contactUs_card_desc"> sales@southshore.in</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="contactUs_card_heading me-5">Phone</h4>
                  <img  src={call} style={{marginTop:'-4%'}} />
                  <p className="contactUs_card_desc"> +1 (650) 555-0111</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <div
              className="card_style_1 p-5"
              style={{ justifyContent: "start" }}
            >
              <div className="d-flex justify-content-around align-items-center mb-5">
                <h4 className="contactUs_card_heading me-5">Sales quarries</h4>
                <img className="me-2" src={sms} style={{ marginTop: "-4%" }} />
                <p className="contactUs_card_desc"> sales@southshore.in</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card_style_1 p-5"
              style={{ justifyContent: "start" }}
            >
              <div className="d-flex justify-content-around align-items-center mb-5">
                <h4 className="contactUs_card_heading me-5">VAT</h4>
                <p className="contactUs_card_desc"> 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSouthsore />
    </div>
  );
};

export default ContactUs;
