import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className='fotter'>
            <div className="footer__container container">
                <h1 className="footer__title">Bharath Raj Naralasetti</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Project</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="" className="footer__link"></a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://github.com/Bharath-Raj-Naralasetti" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/bharath-raj-naralasetti" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin-square"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; Bharath Raj Naralasetti. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;
