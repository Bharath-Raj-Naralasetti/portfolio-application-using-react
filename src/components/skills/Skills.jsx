import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';
import "./skills.css";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">SKILLS</h2>
            <span className="section__subtitle">MY TECHNICAL LEVEL</span>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>
        </section>
    )
}

export default Skills;