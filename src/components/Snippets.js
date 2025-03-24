import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import logo from '../assets/images/southshore_logo_alt.svg';
import ban4 from '../assets/images/ban4.jpeg';
import ban3 from '../assets/images/issue_3.jpeg';
import ban2 from '../assets/images/issue_2.jpeg';
import ban1 from '../assets/images/issue_1.jpeg';
import dwn_btn from '../assets/images/dwn_btn.png';
import inv_pdf from '../assets/images/Southshore_Snippets_Issue_1.pdf';
import inv_pdf2 from '../assets/images/Southshore_Snippets_Issue_2.pdf';
import inv_pdf3 from '../assets/images/SouthShore_snippets_issue_3.pdf';
import inv_pdf4 from '../assets/images/Southshore_Snippets_Issue_4_Final_150225.pdf';
import Config from "../Config/Config.json";
import { UserProfile } from "../Context/Usercontext";


export const Snippets = () => {
    const { allSnippets } = UserProfile()
    const SnippetArray = [
        {
            id: 1,
            title: 'Snippets Issue 1',
            image: ban1,
            postedOn: 'October 29, 2024',
            downloadLink: inv_pdf
        },
        {
            id: 2,
            title: 'Snippets Issue 2',
            image: ban2,
            postedOn: 'November 7, 2024',
            downloadLink: inv_pdf2
        },
        {
            id: 3,
            title: 'Snippets Issue 3',
            image: ban3,
            postedOn: 'November 11, 2024',
            downloadLink: inv_pdf3
        },
        {
            id: 4,
            title: 'Snippets Issue 4',
            image: ban4,
            postedOn: 'February 17, 2025',
            downloadLink: inv_pdf4
        }
    ]

    // const SNIPPET_PDF_URL = Config.API_URL + Config.SNIPPET_PDF_URL + "/" + data.SNIPPET_PDF_URL + '?d=' + new Date()



    return (
        <>
            <div className="screen_head mt-5" style={{ textAlign: 'left', fontSize: '38px' }}>Snippets from Southshore Innovations</div>
            <div className="row mt-4 mb-5">
                {allSnippets?.map((data, index) => (
                    data?.is_active === 1 && (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center" style={{ marginTop: "inherit" }} key={index}>
                            <div className="card" style={{ width: '22rem', border: '1px solid #B1BEC9', borderRadius: '40px' }}>
                                <img
                                    // src={data.image}
                                    src={Config.API_URL + Config.SNIPPET_IMAGE_URL + "/" + data.image_file_name + '?d=' + new Date()}
                                    className="card-img-top" alt="..."
                                    style={{ borderRadius: '40px' }}
                                />
                                <div className="card-body">
                                    <p className="card-text" style={{ fontFamily: 'Ubuntu', fontSize: '14px' }}>Posted On: {data.published_date}</p>
                                    <h5 className="card-title" style={{ fontFamily: 'Ubuntu', fontSize: '20px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{data.title}</h5>
                                    {/* <p className="card-text" style={{ fontFamily: 'Ubuntu', fontSize: '14px' }}>{data.subTitle}</p> */}
                                </div>
                                <div className="card-body">
                                    <button href="#"
                                        className="card-link" style={{ border: 'none', background: 'none', padding: 0 }}
                                        onClick={() => Config.API_URL + Config.SNIPPET_PDF_URL + "/" + data.pdf_file_name + '?d=' + new Date() && window.open(Config.API_URL + Config.SNIPPET_PDF_URL + "/" + data.pdf_file_name + '?d=' + new Date(), '_blank', 'noopener,noreferrer')}
                                        disabled={!data.pdf_file_name}
                                    ><img src={dwn_btn} /></button>
                                </div>
                            </div>
                        </div>
                    )

                ))}


            </div>
        </>

    );
}
export default Snippets;