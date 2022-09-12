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
                        <a className="nav-link" href="/admin/news">News<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="list-item2 nav-item active">
                        <a className="nav-link" href="/admin/events">Events</a>
                    </li>
                    <li className="list-item2 nav-item active">
                        <a className="nav-link" href="/admin/gallery">Gallery</a>
                    </li>
                    <li className="list-item2 nav-item active">
                        <a className="nav-link" href="/admin/update-about">About Us</a>
                    </li>
                    <li className="list-item2 nav-item active">
                        <a className="nav-link" href="/admin/user-list">Users List</a>
                    </li>
                    <li className="list-item2 nav-item active">
                        <a className="nav-link" href="/admin/feedback">Feedback</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/admin/donation-record">Donation Record</a>
                    </li>
                    <li className="list-item2 nav-item">
                        <a className="nav-link" href="/">Sign out</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav2;