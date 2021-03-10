import React from 'react';
import { Fragment } from 'react';

const Contact = () => {
    return ( 
        <Fragment>
            <section class="contact">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2 class="title">Contact me</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 col-sm-12 contact__aside">
                            <h2>Get in Touch</h2>
                            <p>It is good to know each other and make something great together</p>
                                <i class="bi bi-person-lines-fill"><span>Honggo Sanjaya</span></i>
                                <i class="bi bi-envelope-fill"><span>honggosanjaya@gmail.com</span></i>
                            
                        </div>
                        <div class="col-md-7 col-sm-12 contact__form">
                            <h2>Message me</h2>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                    <label>Name</label>
                                    <input type="text" class="form-control" placeholder="Full name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="Email address"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Subject</label>
                                    <input type="text" class="form-control" placeholder="Subject"/>
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea type="text" class="form-control" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" class="btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Contact;