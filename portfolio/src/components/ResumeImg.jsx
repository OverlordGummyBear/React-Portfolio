import React from "react";

function ResumeImg(props){
    return (
        <div className="resume-img">
            <img src={props.src} alt={props.alt} className={props.extraClass + " edupictures"} /> 
        </div>
    );
        
}

export default ResumeImg;