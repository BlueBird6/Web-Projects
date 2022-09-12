import React from "react";
import { useState } from 'react';
import Nav from '../components/Nav2/Nav2';
import Footer from '../components/Footer/footer';

import './join.css';

function JoinUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submited");
    };

    return (
        <div>
            <Nav />

            <div className="welcome">
                <h1>Become one of us<span>Fill the form below</span></h1>
            </div>

            <div className="container member_form">

                <form className="">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputName">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputMobile">Mobile</label>
                        <input
                            type="number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            className="form-control"
                            id="exampleInputMobile"
                            placeholder="Mobile Number"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputAddress">Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            id="exampleInputAddress"
                            placeholder="Address"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>

            </div>

            <Footer />
        </div>
    );
};

export default JoinUs;