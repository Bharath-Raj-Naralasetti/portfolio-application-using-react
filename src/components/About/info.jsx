import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className="about__box">
        <i class="bx bx-award"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 year</span>
      </div>
      <div className="about__box">
        <i class="bx bx-briefcase-alt"></i>
        <h3 className="about__title">completed</h3>
        <span className="about__subtitle">15+ projects</span>
      </div>
    </div>
  )
}

export default Info;
