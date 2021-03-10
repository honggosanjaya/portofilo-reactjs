import React from 'react';
import { Fragment } from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {
    return ( 
        <Fragment>
            <section className="contact">
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h2 className="title">Contact me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 col-sm-12 contact__aside">
                            <h2>Get in Touch</h2>
                            <p>It is good to know each other and make something<br/> great together</p>
                                <i className="bi bi-person-lines-fill"><span>Honggo Sanjaya</span></i>
                                <i className="bi bi-envelope-fill"><span>honggosanjaya@gmail.com</span></i>
                        </div>
                        <div className="col-md-7 col-sm-12 contact__form">
                            <h2>Message me</h2>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Full name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email address"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" className="form-control" placeholder="Subject"/>
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea type="text" className="form-control" placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
     );
}
 
export default Contact;