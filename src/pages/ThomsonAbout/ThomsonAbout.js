import React from "react";
import FooterSouthsore from "../../components/FooterSouthsore";
import { Header } from "../../components/Header";
import NavBarSouthsore from "../../components/NavBarSouthshore";
import { Link, useNavigate } from "react-router-dom";
import about_thomson_1 from "../../assets/images/about_thomson_1.png";
import about_thomson_2 from "../../assets/images/thompson_books.png";
import about_thomson_3 from "../../assets/images/about_thomson_3.png";
import Config from "../../Config/Config.json"
import useWindowDimensions from "../../hooks/windowDimensions";


const ThomsonAbout = () => {
    const navigate=useNavigate()
    const windowDimensions = useWindowDimensions();
    const isTabScreen = windowDimensions?.width <= Config.TAB_SCREEN_MAX_WIDTH && windowDimensions?.width >= Config.TAB_SCREEN_MIN_WIDTH ? true : false;

    
    const gotoForm=()=>{
        navigate('/thomson/publishwithus')
    }
    return (
        <>
            <div class="container">
                <Header />
                <NavBarSouthsore />

                <div className="d-flex justify-content-start mt-3">
                    <h1 className="about-juris-title">About Thomson Reuters</h1>
                </div>
                <div className="d-flex justify-content-start mt-2">
                    <p className="about-juris-description">
                    Thomson Reuters is a leading international publisher in the legal space. It has been a leading player in India for close to two decades.
                    </p>
                </div>
                <div className="d-flex justify-content-start flex-column">
                    <p className="about-juris-description">
                    For the Indian market, Thomson Reuters South Asia Private Limited has partnered with Southshore Innovations Private Limited to undertake all publishing in the legal print space on their behalf. Southshore thus contracts/commissions authors and publishes their content as books. Southshore undertakes the printing, warehousing, and sales and distribution of all Thomson Reuters legal titles.
                    </p>
                    <p className="about-juris-description">
                    In addition, as Thomson Reuters’ in-country partner, Southshore reprints specific titles from Sweet and Maxwell UK for the SAARC region, and imports titles from Sweet and Maxwell UK and sells them to customers in India.
                    </p>
                    <p className="about-juris-description">
                    Southshore also manages Thomson Reuters’ digital content sales of titles from Sweet and Maxwell UK and from within India. All sales are meant exclusively for the SAARC region. With over 350 Indian titles, 250 reprint titles and 1,000 titles from Sweet and Maxwell UK, Southshore brings to its customers a large repository of legal content. The titles are listed on our proprietary platform <Link className="link" to={`https://www.bookscentral.in`} target="_blank">Books Central</Link>. With a view to increasing the availability of good legal content, Southshore is constantly on the lookout for new authors and ideas. We invite aspiring and established authors to publish with us. <span style={{cursor:'pointer'}} onClick={gotoForm}>Click here</span> to reach out to us about your book.
                    </p>
                </div>
                <div className="row mb-5 mt-3">
                    <div className="col-12 col-lg-7">
                        <div className="image-container">
                            <img src={about_thomson_1} className="about-image"></img>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="d-flex h-100 flex-column justify-content-between">
                            <div className="image-container">
                                <img src={about_thomson_2} className="about-image" style={isTabScreen !== true ? { height:'250px' } : { height:'204px' } }></img>
                            </div>
                            <div className="image-container">
                                <img src={about_thomson_3} className="about-image" style={isTabScreen !== true ? { height:'250px' } : { height:'204px' } }></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterSouthsore />
        </>
    )
}

export default ThomsonAbout;