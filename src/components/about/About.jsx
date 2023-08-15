import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {FaAward} from 'react-icons/fa'
import {RiFolderChartFill} from 'react-icons/ri'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know </h5>
            <h2> About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                     </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5> Experience </h5>
                            <small>3+ Years Reseraching </small>
                        </article>
                        <article className='about__card'>
                            <RiFolderChartFill className='about__icon'/>
                            <h5> Projects</h5>
                            <small>Undergraded Reseasrch</small>
                        </article>
                    </div>
                    <p>
                    My name is Sharon Wong, and I am a rising junior at Earlham College, 
                    pursuing a double major in Computer Science and Neuroscience.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk </a>
                </div>
            </div>
        </section>
    )
}

export default About
