import React, { Fragment } from "react";
import SkillImg from "./SkillImg";
import SkillItem from "./SkillItem";

import FileIcon from "../assets/icons/file.png";
import ProgrammingIcon from "../assets/icons/programming.png";
import TaskIcon from "../assets/icons/task.png";


function Skills(){
    return(
        <Fragment>
            <h2> My Skills </h2>
            <div className="skill-container">
                <SkillImg extraClass="details" src={FileIcon} alt="detail oriented icon"/>
                <SkillImg extraClass="programming" src={ProgrammingIcon} alt="computer icon"/>
                <SkillImg extraClass="organized" src={TaskIcon} alt="checklist icon"/>

                <SkillItem  title="Detail-oriented" 
                            content="Workingg as a QA tester have taught me to be very precise and concious details. This ensures that the developers can reproduce and resolve the bugs I report effectively."/>
                <SkillItem  title="Programming" 
                            content="As a Software Design student, I have gained experience with several programming languages, including Java, C#, Python, and F#. Currently I am learning HTML, CSS and JavaScript and React to expand web development skills."/>
                <SkillItem  title="Organized" 
                            content="Managing multiple courses and projects while also learning new skills in my free time requires strong organizational skills. Being organized allows me to structure my time efficiently and complete all the tasks I set for myself."/>
            </div>
        </Fragment>
    );
}

export default Skills;