import React, { useState, useEffect } from "react";
import Nav2 from '../components/Nav2/Nav2';
import Footer from '../components/Footer/footer';
import axios from "axios";

import "./about.css";
import about from "../images/about.webp"
import story from "../images/story.jpg";
import team from "../images/team.png";
import board from "../images/board.png";

let data = [{
    About: "",
}];


function About() {

    const [rec, setRec] = useState();

    const fetchAboutData = () => {
        axios({
            method: "GET",
            url: "/api/about/fetch",
        }).then((res) => {
            data = res.data.data;
            setRec(data);
            // console.log(data[0])
        });
    }

    useEffect(() => {
        fetchAboutData();
    }, data);

    return (
        <div>
            <Nav2 />
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="about" src={about} />
                        </div>
                        <div className="col-lg-6">
                            <p className="about_text">{data[0].About}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img className="about_imgs" src={story} />
                            <h2 className="about_heading">Our Story</h2>
                            <p className="about_desc">{data[0].Story}</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="about_imgs" src={team} />
                            <h2 className="about_heading">Our Team</h2>
                            <p className="about_desc">{data[0].Team}</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="about_imgs" src={board} />
                            <h2 className="about_heading">Our Board</h2>
                            <p className="about_desc">{data[0].Board}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;