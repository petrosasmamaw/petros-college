import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'


const Testimonials = () => {

    const slider= useRef()
    let tx =0;

   const slideForward = () => {
     if(tx> -50){
        tx -= 25;
     }

     slider.current.style.transform = `translateX(${tx}%)`;
   }

   const slideBackward = () => {
      if(tx < 0){
         tx += 25;
      }

      slider.current.style.transform = `translateX(${tx}%)`;
   }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider} className="slider-list">
            <li>
                <div className="slide">
                <div className="user-info">
                    <img src={user1} alt="User 1" />
                    <div>
                        <h3>William jackson</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                     <p> Choosing to persue my dgree at Edusity was one of 
                          the best dicisions I have ever made. The supportive 
                          community, state-of-the-art facilities, and expert faculty
                        have all contributed to an exceptional learning experience.
                      </p>
            </div>
        </li>
        <li>
                <div className="slide">
                <div className="user-info">
                    <img src={user2} alt="User 1" />
                    <div>
                        <h3>Edisson Anora</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                     <p> Enrolling at Edusity has been a life-changing decision. From 
                    cutting-edge resources to supportive classmates, every aspect 
                    of this university pushes me toward excellence. I am grateful 
                    for the opportunities and guidance I receive every day.
                      </p>
            </div>
        </li>
        <li>
                <div className="slide">
                <div className="user-info">
                    <img src={user3} alt="User 1" />
                    <div>
                        <h3>angela Jhona</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                     <p> Studying at Edusity has truly shaped my future in ways I never imagined
                        . The hands-on projects, engaging classes, and dedicated professors 
                         have given me both confidence and practical skills. I feel prepared 
                       to take on challenges in the real world
                      </p>
            </div>
        </li>
            
         <li>
                <div className="slide">
                <div className="user-info">
                    <img src={user4} alt="User 1" />
                    <div>
                        <h3>Joseph Gonzalez</h3>
                        <span>Edusity, USA</span>
                    </div>
                </div>
                     <p> My time at Edusity has been nothing short of inspiring. The
                         diverse community encourages collaboration, while the campus
                         provides everything a student could need. I have grown not
                         only academically but also personally throughout this journey.
                      </p>
            </div>
        </li>
        
            
            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
