import React from 'react';
import '../style/Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <h4>Contact</h4>
                    <a href="#">Get in Touch</a>
                    <a href="#">Feedback</a>
                    <a href="#">Feature Requests</a>
                    <a href="#">Roadmap</a>
                </div>
            <div>
                <h4>Developers</h4>
                    <a href="#">Documentation</a>
                    <a href="#">Feedback</a>
                    <a href="#">Feature Requests</a>
                    <a href="#">Roadmap</a>
            </div>
            <div className='email'>
                <h4>Newsletter</h4>
                <form>
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
