import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import logo from '../assets/images/southshore_logo_alt.svg';
import dwn_btn from '../assets/images/dwn_btn.png';
import inv_pdf from '../assets/images/Southshore_Snippets_Issue_1.pdf';
import arrow from '../assets/images/arrow-right.png';


export const Newsletter = () => {

    return (
        <>
            <div className="row mt-4">
                <div className="col-12 col-sm-12">
                    <div className="cards" style={{ borderRadius: '50px' }}>
                        <div className="screen_head" style={{ fontSize: '40px' }}>Exploring Boundless Worlds, One Page at a Time</div>
                        <div className="ervice_card_details mt-3">Subscribe Our Newsletter, and get the latest updates</div>
                        <div className="d-flex justify-content-center mt-5" style={{ width: '94%' }}>
                            <div className="mb-4" style={{ width: '58%' }}>
                                <label className="form-label label_font mb-2 mr_86">Email ID</label>
                                <input type="email" className="form-control input_style" placeholder="Enter Your Email" />
                            </div>
                            <div className="d-flex justify-content-center mt_16 position-relative">
                                <button className="explore_btn" style={{ fontSize: '14px', paddingLeft: '0%', textAlign: 'center', paddingRight: '44%', width: '120px', height: '47px' }}
                                // onClick={() => getDownLoadLinks(book.id)}
                                >Send</button>
                                <div className="rightarrow" style={{ right: '1%', height: '46px' }}><img src={arrow} height={20} width={20} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
export default Newsletter;