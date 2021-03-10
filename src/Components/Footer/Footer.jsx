import React from 'react';
import { Fragment } from 'react';
import './Footer.css'

const Footer = () => {
    return ( 
        <Fragment>
            <footer class="footer">
                <div class="row footer__data text-center justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h2 class="footer__title">Honggo sanjaya</h2>
                        <p>I'm Honggo Sanjaya and this is my personal website</p>
                    </div>
                    <div class="col-md-6 footer__social">
                        <h2 class="footer__title">Follow</h2>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-twitter"></i>
                    </div>
                </div>
            </footer>
        </Fragment>
     );
}
 
export default Footer;