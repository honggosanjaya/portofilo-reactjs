import React from 'react';
import { Fragment } from 'react';
import './Footer.css'

const Footer = () => {
    return ( 
        <Fragment>
            <footer className="footer">
                <div className="row footer__data text-center justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h2 className="footer__title">Honggo sanjaya</h2>
                        <p className="text-center"> I'm Honggo Sanjaya and this is my personal website</p>
                    </div>
                    <div className="col-md-6 footer__social">
                        <h2 className="footer__title">Follow Me</h2>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-twitter"></i>
                    </div>
                </div>
            </footer>
        </Fragment>
     );
}
 
export default Footer;