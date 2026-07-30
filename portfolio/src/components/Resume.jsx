import React from "react";
import Skills from "./Skills";

import ResumeImg from "./ResumeImg";
import ResumeItem from "./ResumeItem";
import ItuPic from "../assets/diverse/itu.jpeg";
import KogamaPic from "../assets/diverse/kogama.jpg";

function Resume(){
    return (
        <div className="resume">
            <h2>Education and Work</h2>
            <div className="education-container">
                
                <ResumeImg extraClass="itu" src={ItuPic} alt="IT university of Copenhagen"/>
                <div>
                    <ResumeItem title="BSc Business Administration & Sociology" name="Copenhagen Business School" time="August 2020 - July 2023"/>
                    <ResumeItem title="MSc Software Design" name="IT University of Copenhagen" time="August 2024 - June 2026"/>
                </div>

                <ResumeImg extraClass="kogama" src={KogamaPic} alt="Multiverse Kogama logo" />
                <ResumeItem title="Quality Assurance Tester" name="Multiverse Aps" time="February 2018 - February 2026"/>
            </div>

            <Skills />
        </div>
    );
}

export default Resume;