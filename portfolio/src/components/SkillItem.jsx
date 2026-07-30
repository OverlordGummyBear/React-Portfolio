import React from "react";

function SkillItem(props){
    return (
        <div className="skill-text"> 
            <h3> {props.title} </h3>
            <p> {props.content} </p>
        </div>
    );
}   

export default SkillItem;