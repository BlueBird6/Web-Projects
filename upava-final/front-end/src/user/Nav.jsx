import React from "react";
import './Nav.css'

function Nav() {
    return (
        <nav className="custom-navbar navbar navbar-expand-lg">
            <a className="navbar-brand custom-brand" href="/">UPAVA</a>
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav custom-list">
                    <li className="list-item nav-item active">
                        <a className="nav-link" href="/user">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="list-item nav-item">
                        <a className="nav-link" href="/user/events">Events</a>
                    </li>
                    <li className="list-item nav-item">
                        <a className="nav-link" href="/user/news">News</a>
                    </li>
                    <li className="list-item nav-item">
                        <a className="nav-link" href="/user/gallery">Gallery</a>
                    </li>
                    <li className="list-item nav-item">
                        <a className="nav-link" href="/user/donation">Donate</a>
                    </li>
                    <li className="list-item nav-item">
                        <a className="nav-link" href="/user/about">About</a>
                    </li>
                    <li className="list-item nav-item">
                        <a className="nav-link" href="/">Signout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;