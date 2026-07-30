import React from "react";
import mePic from "../assets/diverse/me.jpg";

function Hero(){
    return (
        <div className="hero-container">
            <div>
                <p> I just finished my masters in Software Design at the IT university of Copenhagen.
                    I used to study Accounting, but did not find it fulfilling, so I returned to a passion for me which is IT and programming. 
                    <br />
                    <br />
                    I am very excited about growing my skills through projects and continious learning with the goal of  becoming a competent software developer.
                </p>
            </div>
            <div> 
                <img src={mePic} className="me" /> 
            </div> 
        </div>
    );
}

export default Hero;