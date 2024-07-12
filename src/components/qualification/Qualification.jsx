import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [Toggle, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div className={Toggle === 1 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex" } onClick={()=> toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
          </div>

          <div className={Toggle === 2 ? "qualification__button qualification__active button--flex" :"qualification__button button--flex" } onClick={()=> toggleTab(2)}>
            <i className="bx bx-certification qualification__icon"></i>{" "}Certification
          </div>
        </div>
        <div className="qualification__sections">
          <div className={Toggle === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
          onClick={()=> toggleTab(1)}
          >
            <div className="qualifaction__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">Sagi Rama Krishnam Raju Engineering College <br></br> specilization-Electrical & Electronics Engg</span>
                <div className="qualifaction__calender">
                  <i class="uil uil-calendar-alt"></i>2019-2013
                </div>
              </div>
            </div>

            <div className="qualifaction__data">
                <h3 className="qualification__title">Intermediate</h3>
                <span className="qualification__subtitle">Sri Chaitanya Institution College </span>
                <div className="qualifaction__calender">
                  <i class="uil uil-calendar-alt"></i>2017-2019
                </div>

            </div>

            <div className="qualifaction__data">
              <div>
                <h3 className="qualification__title">X <sup>th</sup></h3>
                <span className="qualification__subtitle">St.Ann's School affiliated under ICSE</span>
                <div className="qualifaction__calender">
                  <i class="uil uil-calendar-alt"></i>2016-2017
                </div>
              </div>
            </div>
          </div>

          <div className={Toggle === 2 ? "qualification__content qualification__content-active" : "qualification__content"} onClick={()=> toggleTab(2)}>
            <div className="qualifaction__data">
              <div>
                <h3 className="qualification__title">Introduction to Web Development[HTML, CSS, JAVASCRIPT]</h3>
                <span className="qualification__subtitle">UDEMY</span>
                <div className="qualifaction__calender">
                  <i class="uil uil-calendar-alt"></i>2022
                </div>
              </div>
            </div>

              <div className="qualifaction__data">
              <div>
                <h3 className="qualification__title">Crash Course on Python</h3>
                <span className="qualification__subtitle">COURSERA</span>
                <div className="qualifaction__calender">
                  <i class="uil uil-calendar-alt"></i>2022-2023
                </div>
              </div>
            </div>

            <div className="qualifaction__data">
                <h3 className="qualification__title">Java Full Stack Development course</h3>
                <span className="qualification__subtitle">JSPIDERS</span>
                <div className="qualifaction__calender">
                  <i class="uil uil-calendar-alt"></i>2023-2024
                </div>
              </div>
            
              
            </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification

