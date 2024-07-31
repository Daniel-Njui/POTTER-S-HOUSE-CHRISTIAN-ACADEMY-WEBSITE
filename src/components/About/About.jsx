import React from 'react'
import './About.css'
import about_img from'../../assets/about.png'
import play_icon from'../../assets/play-icon.png'

const About = ({setPlayState}) => { 
  return (
    <div className='about' >
      <div className="about-left">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

      </div>
      <div className="about-right">
        <h3>ABOUT SCHOOL</h3>
        <h2> Nurturing Tomorrows Leaders Today</h2>
        <p>Potters House School is an esteemed educational institution dedicated to providing a holistic and nurturing environment for its students. Situated in a serene and inspiring setting, the school prides itself on fostering academic excellence, personal growth, and community involvement. With a curriculum that blends rigorous academic standards with innovative teaching methods, Potter's House ensures that students are well-prepared for the challenges of higher education and beyond.</p>
        <p>At Potters House, the emphasis is on cultivating a well-rounded education that goes beyond the classroom. The school offers a diverse range of extracurricular activities, including sports, arts, and community service programs, allowing students to explore their interests and develop their talents. The dedicated faculty and staff are committed to mentoring and guiding students, helping them to build confidence, resilience, and a strong sense of purpose. This supportive atmosphere encourages students to reach their full potential and become responsible, compassionate citizens.</p>
        <p>The Potters House community is characterized by a spirit of collaboration and inclusivity. Parents, teachers, and students work together to create a vibrant and dynamic school culture. Regular events, such as family days, cultural festivals, and academic competitions, foster a sense of belonging and pride in the school. With a focus on character development and moral values, Potter's House School aims to instill in its students the importance of integrity, respect, and empathy, preparing them to make meaningful contributions to society.</p>
      </div>
    </div>
  )
}

export default About
