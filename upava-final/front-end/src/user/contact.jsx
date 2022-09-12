import React, { useState } from 'react';
import Nav2 from './Nav2';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import "./contact.css";

function Donation() {

    const notify = () => toast("Form Submitted");


    const handleSubmit = (formData) => {
        formData.preventDefault();
        axios({
            method: "POST",
            url: "/api/feedback/contact-us",
            data: {
                name: formData.target.name.value,
                email: formData.target.email.value,
                subject: formData.target.subject.value,
                message: formData.target.message.value
            }
        }).then(res => {
            notify()
        })
    }

    return (
        <div>
            <Nav2 />

            <div className='contact_section'>
                <div className='container'>
                    <h2 className='contact_heading'>Get in touch</h2>
                    <p className='contact_desc'>If you want to give feedback or you are facing any issues, write to us!</p>
                </div>
            </div>

            <div className='heading'>
                <h1>Contact Us</h1>
            </div>

            <div className='container' style={{ "margin-bottom": "5rem" }}>
                <section class="mb-4">

                    <div class="row">


                        <div class="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>


                                <div class="row">


                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="name" class="">Your name</label>
                                            <input type="text" id="name" name="name" class="form-control" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="email" class="">Your email</label>
                                            <input type="text" id="email" name="email" class="form-control" />
                                        </div>
                                    </div>


                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="subject" class="">Subject</label>
                                            <input type="text" id="subject" name="subject" class="form-control" />
                                        </div>
                                    </div>
                                </div>



                                <div class="row">


                                    <div class="col-md-12">

                                        <div class="form-group">
                                            <label for="message">Your message</label>
                                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                        </div>

                                    </div>
                                </div>
                                <div class="text-center text-md-left">
                                    <input type="submit" value="Send" class="btn btn-primary" />
                                </div>

                            </form>


                            <div class="status"></div>
                        </div>



                        <div class="col-md-3 text-center">
                            <ul class="list-unstyled mb-0">
                                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                                    <p>Ontario, 91710, Canada</p>
                                </li>

                                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+ 01 234 567 89</p>
                                </li>

                                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@upava.com</p>
                                </li>
                            </ul>
                        </div>


                    </div>

                </section>
            </div>
            
            <ToastContainer />
            <Footer />
        </div>
    );
}

export default Donation;