import React from "react";
import FooterSouthsore from "../../components/FooterSouthsore";
import { Header } from "../../components/Header";
import NavBarSouthsore from "../../components/NavBarSouthshore";
import { Link } from "react-router-dom";
import about_juris_img_1 from "../../assets/images/about_juris_img_1.png";
import about_juris_img_2 from "../../assets/images/about_juris_img_2.png";
import about_juris_img_3 from "../../assets/images/about_juris_img_3.svg";
import Config from "../../Config/Config.json"
import useWindowDimensions from "../../hooks/windowDimensions";


const JurisAbout = () => {
    const windowDimensions = useWindowDimensions();
    const isTabScreen = windowDimensions?.width <= Config.TAB_SCREEN_MAX_WIDTH && windowDimensions?.width >= Config.TAB_SCREEN_MIN_WIDTH ? true : false;

    return (
        <>
            <div class="container">
                <Header />
                <NavBarSouthsore />

                <div className="d-flex justify-content-start mt-3">
                    <h1 className="about-juris-title">About Juris Press</h1>
                </div>
                <div className="d-flex justify-content-start mt-2">
                    <p className="about-juris-subtitle">
                        Juris Press is an imprint of<br />
                        Southshore Innovations Private Limited.
                    </p>
                </div>
                <div className="d-flex justify-content-start flex-column">
                    <p className="about-juris-description">
                        Publishing has, over the years, become increasingly mechanical and process oriented. We felt a need to provide authors with a space where they would be involved in the publication of their books, participate in the process through discussions, sharing their ideas and thoughts, and publishing good content as the final outcome. With such a vision in mind, Juris began its journey in publishing in 2023, backed by a team that is experienced in all aspects of book production.
                    </p>
                    <p className="about-juris-description">
                        Juris has published titles across the genres of spirituality, self-help, biographies, poetry, and health. The genres and the list of authors continue to grow.
                    </p>
                    <p className="about-juris-description">
                        Juris markets its titles through a distribution channel and through online aggregators such as Amazon as well as through its own proprietary platform <Link className="link" to={`https://www.bookscentral.in`} target="_blank">Books Central</Link>. The digital versions of the published books are made available to customers to buy and read on the proprietary <Link className="link" to={`https://ebooksjunction.com/`} target="_blank">e-BooksJunction</Link> platform. One of the several aims of Juris is to look at the way publishers handle author royalties. Our intent is to maximize the revenue potential for the authors as well as provide them with a transparent mechanism to understand how their book is doing in the market and get an estimate of their royalty month on month.
                    </p>
                </div>
                <div className="row mb-5 mt-3">
                    <div className="col-12 col-lg-7">
                        <div className="image-container">
                            <img src={about_juris_img_1} className="about-image"></img>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="d-flex h-100 flex-column justify-content-between">
                            <div className="image-container">
                                <img src={about_juris_img_2} className="about-image" style={isTabScreen !== true ? { height:'250px' } : { height:'204px' } }></img>
                            </div>
                            <div className="image-container">
                                <img src={about_juris_img_3} className="about-image" style={isTabScreen !== true ? { height:'250px' } : { height:'204px' } }></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSouthsore />
        </>
    )
}

export default JurisAbout;