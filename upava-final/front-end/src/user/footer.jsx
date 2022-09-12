import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { instagram } from './icons/instagram.svg'

function Footer() {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social"><a href="#"><FontAwesomeIcon className="instagram" icon="fa-brands fa-instagram" /></a><a href="#"><FontAwesomeIcon className="twitter" icon="fa-brands fa-twitter" /></a><a href="#"><FontAwesomeIcon className="facebook" icon="fa-brands fa-facebook" /></a></div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/user">Home</a></li>
                    <li className="list-inline-item"><a href="/user/gallery">Gallery</a></li>
                    <li className="list-inline-item"><a href="/user/donation">Donation</a></li>
                    <li className="list-inline-item"><a href="/user/about">About</a></li>
                    <li className="list-inline-item"><a href="/user/events">Events</a></li>
                </ul>
                <p className="copyright">UPAVA © 2022</p>
            </footer>
        </div>
    )
};

export default Footer;