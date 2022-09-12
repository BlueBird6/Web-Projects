import React from "react";
import Nav from './Nav2';
import Footer from './footer';

import "./admin.css";

let data = [];

function Admin() {

    return (
        <div>
            <Nav />

            <div className="heading">
                <h1>Admin Panel</h1>
            </div>

            <div className="container">
                <div className="card shadow" >
                    <div className="card-body margin-left">
                        <h5 className="card-title">News Management</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">Add/Delete and Update News Information</p>
                        <a href="/admin/news" className="card-link">Go</a>
                    </div>
                </div>

                <div className="card shadow" >
                    <div className="card-body margin-left">
                        <h5 className="card-title">Events Management</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">Add/Delete and Update Events Information</p>
                        <a href="/admin/events" className="card-link">Go</a>
                    </div>
                </div>

                <div className="card shadow" >
                    <div className="card-body margin-left">
                        <h5 className="card-title">Gallery Management</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">Add and Delete Images from the Gallery</p>
                        <a href="/admin/gallery" className="card-link">Go</a>
                    </div>
                </div>

                <div className="card shadow" >
                    <div className="card-body margin-left">
                        <h5 className="card-title">User List</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">View Complete List of Users Registered</p>
                        <a href="/admin/user-list" className="card-link">Go</a>
                    </div>
                </div>

                <div className="card shadow" >
                    <div className="card-body margin-left">
                        <h5 className="card-title">Donation List</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                        <p className="card-text">View Complete Donation Records</p>
                        <a href="/admin/donation-record" className="card-link">Go</a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Admin;