import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bxs-graduation about__icon' ></i>
            <h3 className="about__title">Engineer</h3>
            <span className="about__subtitle">Information Technology</span>
        </div>
        <div className="about__box">
        <i className='bx bx-code-alt about__icon' ></i>
            <h3 className="about__title">Developer</h3>
            <span className="about__subtitle">Completed 20+ Projects</span>
        </div>
        <div className="about__box">
        <i className='bx bx-laptop about__icon'></i>
            <h3 className="about__title">Programmer</h3>
            <span className="about__subtitle">1000+ DSA Questions</span>
        </div>
    </div>
  )
}

export default Info