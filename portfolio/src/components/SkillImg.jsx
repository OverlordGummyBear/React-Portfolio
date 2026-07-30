import React from "react";

function SkillImg(props){
    return (
        <div className={"skill-img " + props.extraClass}> 
            <img src={props.src} alt={props.alt} /> 
        </div>
    );
}

export default SkillImg;