import React from "react";
import FacebookSVG from "../assets/svg/facebook.svg";
import InstagramSVG from "../assets/svg/instagram.svg";

function Footer(){
    return (
        <div className="footer-container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <div className="col-md-4 d-flex align-items-center"> 
                    <a href="/"
                        className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap"> 
                        <svg className="bi" width="30" height="24" aria-hidden="true">
                            <use xlink:href="#bootstrap"></use>
                        </svg> 
                    </a> 
                    <span className="mb-3 mb-md-0 text-body-secondary">© Daniel W. Laursen</span> 
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex" style={{paddingRight: "40px"}}>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#" aria-label="Instagram">
                            <img src={InstagramSVG} alt="facebook icon" />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-body-secondary" href="#" aria-label="Facebook">
                            <img src={FacebookSVG} alt="instagram icon" />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;