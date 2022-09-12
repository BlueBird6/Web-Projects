import React from "react";
import './Nav2.css'

function Nav2() {
    return (
        <nav className="custom-navbar2 navbar navbar-expand-lg">
            <a className="navbar-brand custom-brand2" href="/">UPAVA</a>
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav custom-list2">
                    <li className="list-item2 nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/events">Events</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/news">News</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/donation">Donate</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/sign-in">Sign In</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/sign-up">Join our community</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav2;