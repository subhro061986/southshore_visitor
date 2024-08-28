import { SearchBar } from "./SearchBar";


export const Header = (props) => {
    const defaultLogoWidth = 55;
    const defaultLogoHeight = 54;

    return (
        <div>
            <div className="d-flex align-items-center py-2 bottom-border">
                <img
                    src={props?.logoLink}
                    alt="Logo"
                    width={props?.logoWidth || defaultLogoWidth}
                    height={props?.logoHeight || defaultLogoHeight}
                />
                <div className="d-flex align-items-center ms-auto">
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <button className="btn southshore-blue-1 border-radius-10 color-white ms-2" >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}