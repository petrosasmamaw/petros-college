import React from 'react'
import './About.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

const About = ({setPlayVideo}) => {
  return (
    <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img' />
          <img src={play_icon} alt="" className='play-icon' onClick={() => setPlayVideo(true)} />
        </div>
        <div className="about-right">
          <h3>About University</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Embark on a transformative educational journey with our
            university's comprehensive education programs. Our cutting-edge
            curriculum is designed to empower students with the knowledge,
            skills, and experience needed to excel in the dynamic field of
             education.
          </p>
          <p>With a focus innovation, hands on learning , and personaliszed
            mentorship, our programs prepare aspiring educators to make a 
            meaningful impact in the classroom and beyond. Join us in shaping
          </p>
          <p>Whether you aspire to become a teacher , administrator,
            counselor, or education leader, our university offers a wide range of Programs
            offers the perfect pathway to achieve your goals and unlockm your 
            full potential in shaping the future of education
          </p>
        </div>
      
    </div>
  )
}

export default About
