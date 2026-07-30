import React from "react";
import ProjectList from "../data/projects.json";
import Project from "./Project";

function Projects(){
    return (
        <div className="personal-projects-container">
            <div className="personal-project-text-container">
                <h2>Projects</h2>
                <p>Most images link to the GitHub repository for the project</p>
            </div>
            <div className="portfolio-container">
                {ProjectList.map((project, index) => {
                    return (
                        <Project 
                            key={index}
                            githubLink={project.githubLink}
                            src={project.image.imageLink}
                            alt={project.image.imageAlt}
                            name={project.projectName}
                            description={project.projectDescription}
                            skills={project.projectSkills}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Projects;