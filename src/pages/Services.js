import React from "react";
import { Header } from "../components/Header";
import NavbarSouthshore from "../components/NavBarSouthshore";
import FooterSouthsore from "../components/FooterSouthsore";
import copy from "../assets/images/copy.png";
import proofreading from "../assets/images/proofreading.png";
import font from "../assets/images/font.png";
import index from "../assets/images/index.png";
import keyword from "../assets/images/keyword.png";

const Services = () => {
    return (
        <>
            <div className="container">
                <Header />
                <NavbarSouthshore />

                <div className="mt-3 mb-4">
                    <div className="screen_head" style={{ textAlign: 'left' }}>Our Services</div>
                </div>

                <div>
                    <div className="row mb-3">
                        <div className="col-12 col-md-4">
                            <div class="card service_card mb_12">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={copy} className="me-2" />
                                        <div className="service_card_head d-flex align-items-center">Copyediting</div>
                                    </div>
                                    <div className="service_card_details mt-3">
                                        Our copyediting services ensure that your manuscript is not only grammatically correct but also coherent and presents your thoughts clearly.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div class="card service_card mb_12">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={proofreading} className="me-2" />
                                        <div className="service_card_head d-flex align-items-center">Proofreading</div>
                                    </div>
                                    <div className="service_card_details mt-3">
                                        Our proofreading services help you to weed out unnoticed errors in grammar, spelling, punctuation, and style to provide your readers with clean text for uninterrupted reading.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div class="card service_card mb_12">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={font} className="me-2" />
                                        <div className="service_card_head d-flex align-items-center">Typesetting </div>
                                    </div>
                                    <div className="service_card_details mt-3">
                                        We typeset books, journals, and other documents, as print and e-files, to help you provide an optimal reading experience for your readers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 mt-5">
                        <div className="col-12 col-md-4">
                            <div class="card service_card mb_12">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={index} className="me-2" />
                                        <div className="service_card_head d-flex align-items-center">Indexing</div>
                                    </div>
                                    <div className="service_card_details mt-3">
                                        We compile and create indexes, a critical component of books that help readers find relevant terms, names, and subjects discussed in the book at a glance.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div class="card service_card mb_12">
                                <div class="card-body">
                                    <div className="d-flex">
                                        <img src={keyword} height={60} width={60} className="me-2" />
                                        <div className="service_card_head d-flex align-items-center">Abstracts and keyword creation </div>
                                    </div>
                                    <div className="service_card_details mt-3">
                                        We create abstracts and present the summary of the text succinctly and clearly for easy understanding along with the relevant keywords.
                                    </div>
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

export default Services;
