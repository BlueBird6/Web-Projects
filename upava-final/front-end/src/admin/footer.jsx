import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { instagram } from './icons/instagram.svg'

function Footer() {
    return (
        <div className="footer-basic" style={{"margin-top":"5rem"}}>
            <footer>
                <div className="social"><a href="#"><FontAwesomeIcon className="instagram" icon="fa-brands fa-instagram" /></a><a href="#"><FontAwesomeIcon className="twitter" icon="fa-brands fa-twitter" /></a><a href="#"><FontAwesomeIcon className="facebook" icon="fa-brands fa-facebook" /></a></div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/admin/news">News Management</a></li>
                    <li className="list-inline-item"><a href="/admin/events">Events Management</a></li>
                    <li className="list-inline-item"><a href="/admin/update-about">About Us Management</a></li>
                    <li className="list-inline-item"><a href="/admin">User List</a></li>
                    <li className="list-inline-item"><a href="/admin/donation-record">Donation Records</a></li>
                </ul>
                <p className="copyright">UPAVA © 2022</p>
            </footer>
        </div>
    )
};

export default Footer;