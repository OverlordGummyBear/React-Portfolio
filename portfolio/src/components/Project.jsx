import React from "react";

function Project(props){
    const usedSkills = props.skills;

    return (
        <div className="project-container">
            <div className="project-picture-container">
                {props.githubLink !== "" ? 
                    <a href={props.githubLink}> 
                        <img src={props.src} alt={props.alt} /> 
                    </a> :
                    <a> 
                        <img src={props.src} alt={props.alt} /> 
                    </a>
                }
            </div>
            <div className="project-text-container">
                <h2> {props.name} </h2>
                <p> {props.description} </p>
                <p> Skills used for the project </p>
                <ul>
                    {usedSkills.map((skill, index) => {
                        return (
                            <li key={index}> {skill} </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Project;