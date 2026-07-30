import React from "react"
import WebDevelopmentPic from "../assets/icons/web-development.png"

function Header(){
    return (
            <div className="title-container">
                <div className="title-text">
                        <h1 style={{textIndent: "5px"}}> Hello, <br/> I'm Daniel <br/> </h1>
                        <h2 className="h2developer" style={{textIndent: "5px"}}> A Software Developer</h2>
                </div>

                <div>
                    <div>
                        <img src={WebDevelopmentPic} alt="web development icon" className="web-development-icon" />
                    </div>
                </div>
            </div> 
            );
}

export default Header;