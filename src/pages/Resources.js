import React, { useEffect, useState, } from "react";
import { useNavigate, Link } from 'react-router-dom';
import FooterSouthsore from "../components/FooterSouthsore";
import { Header } from "../components/Header";
import book1 from '../assets/images/book1.png';
import book2 from '../assets/images/book2.png';
import book3 from '../assets/images/book3.png';
import book4 from '../assets/images/book4.png';
import download from '../assets/images/download.png';
import pdf from '../assets/images/pdf.png'
import pdf_icon from '../assets/images/pdf_icon.png'
import NavBarSouthsore from "../components/NavBarSouthshore";
import { UserProfile } from "../Context/Usercontext";
import Config from "../Config/Config.json"



const Resources = () => {

    const { allPublisherResources, allResources, getResourceById } = UserProfile()

    // const [resourceByIdResp, setResourceByIdResp] = useState(null);



    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    //     console.log('Tab changed to:', tab);
    // };

    useEffect(() => {
        // getDownLoadLinks();
    }, []);

    // const [activePublisherId, setActivePublisherId] = useState(allPublisherResources[0]?.id);
    const [activePublisherId, setActivePublisherId] = useState(1);

    // Handle tab click to set the active publisher
    const handleTabClick = (publisherId) => {
        setActivePublisherId(publisherId);
    };

    // Filter books by active publisher
    const filteredBooks = allResources.filter(
        (book) => book.publisherId === activePublisherId && book.isActive
    );

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
                    <div className="screen_sub_head mt-1" style={{ textAlign: 'left' }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</div>
                </div>

                <nav className="navbar" style={{ overflowX: 'auto' }}>
                    <ul className="navbar-list nav_border">
                        {allPublisherResources.map((publisher, index) => (
                            <li
                                key={publisher.id}
                                className={`navbar-item me_3 ${activePublisherId === publisher.id ? "active" : ""}`}
                                // onClick={() => setActiveTab(tab.publisherName)}
                                onClick={() => handleTabClick(publisher.id)}
                            >
                                {publisher.publisherName}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="download_head mt-4">Download the listed <span> PDF Books</span></div>
                <div className="row d-flex" style={{ marginBottom: '15%' }}>
                    {
                        filteredBooks?.length > 0 ? (
                            filteredBooks.map((book) => (
                                <div className="col-md-3 mt-2 d-flex justify-content-center" key={book.id}>
                                    <div className="card card_style" style={{ width: '17rem' }}>
                                        <div className="d-flex justify-content-center img_div_style position-relative">
                                            <button
                                                className="border border-white rounded-circle d-flex justify-content-center align-items-center position-absolute pdf_btn_style">
                                                {/* <img src={pdf} height={20} width={20} /> bg-white */}
                                                <img src={pdf_icon} height={40} width={40}/>
                                            </button>
                                            <img
                                                // src={data.image}
                                                height={170}
                                                width={150}
                                                src={Config.API_URL + Config.RESOURCE_IMAGE_URL + "/" + book.coverImageLink + '?d=' + new Date()}
                                                className="mt-4" />
                                        </div>
                                        <div className="card-body">
                                            <div className="card_head">{book?.bookTitle?.length > 15 ? book?.bookTitle?.substring(0, 15) + ".." : book?.bookTitle}</div>
                                            {/* <div className="card_author my-3">Author: <span style={{ fontWeight: '500' }}>{data.author}</span></div> */}
                                            {/* <a  */}
                                            {/* href={book.downloadLink} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} download={Config.API_URL + "resources/pdfs" + "/" + book.downloadLink + '?d=' + new Date()} */}
                                            {/* > */}
                                            <div className="d-flex justify-content-center mt-3 position-relative">
                                                <button className="explore_btn" style={{ fontSize: '12px', paddingLeft: '10%', textAlign: 'center', paddingRight: '32%' }} onClick={() => getDownLoadLinks(book.id)}>Download</button>
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
                    }

                </div>

            </div>

            <FooterSouthsore />
        </>
    )
}

export default Resources;