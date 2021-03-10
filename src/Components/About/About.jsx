import React from 'react';
import { Fragment } from 'react';
import './About.css';
import profil from '../../images/profil.png';
import Knowledge from '../Knowledge/Knowledge';
import Footer from '../Footer/Footer';

const About = () => {
    return ( 
        <Fragment>
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="title">About me</h2>
                        </div>
                    </div>
                    <div className="row about__image">
                        <div className="col-md-5 col-sm-12">
                            <img src={profil} alt="profil" />
                        </div>
                        <div className="col-md-7 col-sm-12 about__text">
                            <p>I'm an active student at Bina Nusantara University, majoring in computer science. Very motivated to develop my skills in application development, especially the website. I'm a highly committed person and enjoy exploring new things.</p>
                            <a href="contact">Hire Me</a>
                        </div>
                    </div>
                </div>
            </section>
            <Knowledge />
            <Footer />
        </Fragment>
        
     );
}
 
export default About;