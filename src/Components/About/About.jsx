import React from 'react';
import { Fragment } from 'react';
import './About.css';
import profil from '../../images/profil.png';

const About = () => {
    return ( 
        <Fragment>
            <section class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title">About me</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 col-sm-12">
                            <img src={profil} alt="profil" />
                        </div>
                        <div class="col-md-7 col-sm-12 about__text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                            <a href="#">Hire Me</a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default About;