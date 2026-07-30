import React from "react";

function ResumeItem(props){
    return (<
        div className="resume-item">
            <h3> {props.title} </h3>
            <p> {props.name} </p>
            <p> {props.time} </p>
        </div> );
}

export default ResumeItem;