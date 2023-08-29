import React from 'react'
import Typical from 'react-typical'
import Aboutme from '../../AboutMe/Aboutme';

import './Profile.css';
import { Link } from 'react-router-dom';
export default function Profile() {
   
  return (
    <div className='profile-container' align='center'>
       
        <div className='profile-parent'>
            <div className='profile-details'>
            
                <div className='colz'>
                <div className='colz-icon'>
                    <a href='#'>
                        <i className='fa fa-facebook-square'> </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'>  </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-instagram'> </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-youtube-square'> </i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-twitter'> </i>
                    </a>
                </div>
                </div>
                <div className='profile-details-name'>
                    <span>
                        {" "}
                        Hello! I'm <span className='highlighted-text'>Siva Shankar</span>
                    </span>
                </div>
                <div className='profile-details-role'>

                    <span className='primary-text'>
                        {" "}
                        <h1>
                                {" "}
                                <Typical loop={Infinity}
                                         steps={[
                                            "Enthusiastic Guy ",
                                            2000,
                                            "Full Stack devoloper",
                                            2000,
                                            "React developer", 
                                            2000,
                                            // "Good Resume", 
                                            // 2000
                                         ]}></Typical>
                        </h1>
                        <span className='profile-role-tagline'> Making Good applications with frontend and backend operations.</span>
                    </span>
                </div>
                <div className='profile-options'>
                <button className='btn primary-btn'>Hire Me
                    </button>
                    <a href='SivaCv.pdf' download={'SivaCv.pdf'}>
                        <button className='btn highlighted-btn'> Get Resume</button>

                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
          
            </div>
           
        </div>
    </div>
   
    
  )
}
