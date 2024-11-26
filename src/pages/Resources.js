import React, { useEffect, useState, } from "react";
import { useNavigate, Link } from 'react-router-dom';
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import book1 from '../assets/images/book1.png';
import ban3 from '../assets/images/Mask group (6).png';
import ban2 from '../assets/images/mask4.png';
import ban1 from '../assets/images/Mask group (5).png';
import download from '../assets/images/download.png';
import arrow from '../assets/images/arrow-right.png';
import dwn_btn from '../assets/images/dwn_btn.png';
import pdf from '../assets/images/pdf.png'
import pdf_icon from '../assets/images/pdf_icon.png'
import NavBarSouthsore from "../components/NavBarSouthshore";
import Snippets from "../components/Snippets";
import { UserProfile } from "../Context/Usercontext";
import Config from "../Config/Config.json"
import Newsletter from "../components/Newsletter";
import useWindowDimensions from '../hooks/windowDimensions';



const Resources = () => {

    const { allPublisherResources, allResources, getResourceById, allBanner } = UserProfile()
    const windowDimensions = useWindowDimensions();

    // const [resourceByIdResp, setResourceByIdResp] = useState(null);



    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    //     console.log('Tab changed to:', tab);
    // };





    // const [activePublisherId, setActivePublisherId] = useState(allPublisherResources[0]?.id);
    const [activePublisherId, setActivePublisherId] = useState(2);
    const [filteredArray, setFilteredArray] = useState([]);

    // useEffect(() => {
    //     // getDownLoadLinks();
    //     filterfnc(2)

    // }, []);

    useEffect(() => {
        if (allResources?.length > 0 && allPublisherResources?.length > 0) {
            filterfnc(activePublisherId); // Load books for activePublisherId
        }
    }, [allResources, allPublisherResources]);

    const isTabScreen = windowDimensions?.width <= Config.TAB_SCREEN_MAX_WIDTH && windowDimensions?.width >= Config.TAB_SCREEN_MIN_WIDTH ? true : false;

    const modifiedOutput = allPublisherResources && allPublisherResources?.length > 1
        ? (() => {
            const updatedOutput = [...allPublisherResources]; // Create a copy to avoid mutating the original
            const secondItem = updatedOutput.splice(1, 1)[0]; // Extract the second item
            updatedOutput.unshift(secondItem); // Add it to the start
            return updatedOutput;
        })() : allPublisherResources;
    console.log("modified output", modifiedOutput);


    // Handle tab click to set the active publisher
    const handleTabClick = (publisherId) => {
        setActivePublisherId(publisherId);
        if (publisherId !== 8) {
            filterfnc(publisherId)
        }
        else {
            setFilteredArray([])
        }
    };

    // Filter books by active publisher
    const filterfnc = async (val) => {
        // if (activePublisherId !== 8) {
        let filteredBooks = allResources.filter((book) => {
            return (
                book.publisherId === val && book.isActive
            )
        }
        );
        setFilteredArray(filteredBooks)
        // }
    }

    const getDownLoadLinks = async (id) => {
        const resp = await getResourceById(id);
        const ResourceByIdResp = resp.data.output
        console.log("download resp", ResourceByIdResp);
        window.open(Config.API_URL + Config.RESOURCE_PDF_URL + "/" + ResourceByIdResp.downloadLink + '?d=' + new Date())
    }



    return (
        <>
            <div className="container">
                <Header />
                <NavBarSouthsore />

                <div className="mt-3 mb-4">
                    <div className="screen_head" style={{ textAlign: 'left' }}>Resources</div>
                    <div className="screen_sub_head mt-1" style={{ textAlign: 'left' }}>Southshore Innovations, through its publishing activity and its representation of different publishers, has a wide range of books and other content both in the print and digital formats. Listed below are the catalogues of the different publishers as well as presentations of the two platforms that the company owns and operates. </div>
                </div>

                <nav className="navbar" style={{ overflowX: 'auto' }}>
                    <ul className="navbar-list nav_border">
                        {modifiedOutput.map((publisher, index) => (
                            <li
                                key={publisher.id}
                                className={`navbar-item me_3 ${activePublisherId === publisher.id ? "active" : ""}`}
                                // onClick={() => setActiveTab(tab.publisherName)}
                                onClick={() => handleTabClick(publisher.id)}
                            >
                                {publisher.publisherName}
                            </li>
                        ))}
                        <li
                            className={`navbar-item me_3 ${activePublisherId === 8 ? "active" : ""}`}
                            // onClick={() => setActiveTab(tab.publisherName)}
                            onClick={() => handleTabClick(8)}
                        >
                            Newsletter
                        </li>
                    </ul>
                </nav>
                {activePublisherId !== 8 &&
                    <div className="download_head mt-4">Download the listed <span> PDF Books</span></div>
                }
                <div className="row d-flex" style={{
                    marginBottom: '6%',
                    justifyContent: activePublisherId !== 8 ? 'flex-start' : 'center'

                }}>
                    {activePublisherId !== 8 ? (
                        filteredArray?.length > 0 ? (
                            filteredArray?.map((book) => (
                                <div className="col-12 col-md-4 col-lg-3 mt-2 d-flex justify-content-center" key={book?.id}>
                                    <div className="card card_style" style={{ width: '17rem' }}>
                                        <div className="d-flex justify-content-center img_div_style position-relative">
                                            <button
                                                className="border border-white rounded-circle d-flex justify-content-center align-items-center position-absolute pdf_btn_style">
                                                {/* <img src={pdf} height={20} width={20} /> bg-white */}
                                                <img src={pdf_icon} height={isTabScreen !== true ? 40 : 30} width={isTabScreen !== true ? 40 : 30} />
                                            </button>
                                            <img
                                                // src={data.image}
                                                height={160}
                                                width={isTabScreen !== true ? 130 : 110}
                                                src={Config.API_URL + Config.RESOURCE_IMAGE_URL + "/" + book?.coverImageLink + '?d=' + new Date()}
                                                className="mt-4" />
                                        </div>
                                        <div className="card-body">
                                            {/*<div className="card_head">{book?.bookTitle?.length > 15 ? book?.bookTitle?.substring(0, 15) + ".." : book?.bookTitle}</div>*/}
                                            {/* <div className="card_author my-3">Author: <span style={{ fontWeight: '500' }}>{data.author}</span></div> */}
                                            {/* <a  */}
                                            {/* href={book.downloadLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} download={Config.API_URL + "resources/pdfs" + "/" + book.downloadLink + '?d=' + new Date()} */}
                                            {/* > */}
                                            <div className="d-flex justify-content-center mt-3 position-relative">
                                                <button className="explore_btn" style={{
                                                    fontSize: isTabScreen !== true ? '12px' : '11px',
                                                    paddingLeft: isTabScreen !== true ? '10%' : '8%',
                                                    textAlign: 'center',
                                                    paddingRight: isTabScreen !== true ? '32%' : '48%'
                                                }} onClick={() => getDownLoadLinks(book?.id)}>Download</button>
                                                <div className="rightarrow" style={{ right: '0%' }}><img src={download} height={20} width={20} /></div>
                                            </div>
                                            {/* </a> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center' }}>No books available for this publisher.</p>
                        )
                    ) : (
                        <>
                            <Newsletter />
                            <Snippets />
                        </>
                    )
                    }

                </div>



            </div>

            <FooterSouthsore />
        </>
    )
}

export default Resources;