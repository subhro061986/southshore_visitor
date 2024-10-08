import { useNavigate } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import logo from '../assets/images/southshore_logo_alt.svg';


export const Header = (props) => {
    const defaultLogoWidth = 192;
    const defaultLogoHeight = 52;
    const navigate = useNavigate();

    return (
        <div>
            <div className="d-flex align-items-center py-2 bottom-border">
                <img style={{'cursor': 'pointer'}}
                    src={logo}
                    alt="Logo"
                    width={props?.logoWidth || defaultLogoWidth}
                    height={props?.logoHeight || defaultLogoHeight}
                    onClick={() => {navigate("/")}}
                />
                <div className="d-flex align-items-center ms-auto">
                    {/* <div>
                        <SearchBar />
                    </div> */}
                    <div>
                        <button className="btn southshore-blue-1 border-radius-10 color-white ms-2 px-4" >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}