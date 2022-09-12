import React from "react";
import Nav2 from './Nav2';
import Footer from './footer';

import "./about.css";
import about from "../images/about.webp"
import story from "../images/story.jpg";
import team from "../images/team.png";
import board from "../images/board.png";


function About() {

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
                            <p className="about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius lorem sed erat blandit volutpat. Donec quis convallis libero, at placerat ante. Nam vel tincidunt neque. Sed interdum erat sed tincidunt dictum. Vestibulum condimentum finibus sem a malesuada. In maximus mauris eget ex sagittis tincidunt. Integer a eleifend ex, eget tincidunt magna. Quisque sagittis enim in ultricies sodales. Mauris luctus ullamcorper mauris sed pretium. Morbi in augue laoreet arcu convallis facilisis in ut lacus. Nulla est erat, luctus eget diam in, convallis luctus eros. Cras congue, turpis ut pulvinar fringilla, urna lacus lobortis diam, nec tempor lectus ex fringilla massa. Mauris molestie porttitor mauris, sed venenatis dolor posuere volutpat. Maecenas sed dui aliquam erat euismod hendrerit. Morbi a turpis turpis. Maecenas id leo non metus congue tristique. Donec lectus ex, sodales eget tortor ac, scelerisque iaculis neque.</p>
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
                            <p className="about_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius lorem sed erat blandit volutpat. Donec quis convallis libero, at placerat ante. Nam vel tincidunt neque. Sed interdum erat sed tincidunt dictum. Vestibulum condimentum finibus sem a malesuada. In maximus mauris eget ex sagittis tincidunt. Integer a eleifend ex, eget tincidunt magna. Quisque sagittis enim in ultricies sodales. Mauris luctus ullamcorper mauris sed pretium. Morbi in augue laoreet arcu convallis facilisis in ut lacus. Nulla est erat, luctus eget diam in, convallis luctus eros.</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="about_imgs" src={team} />
                            <h2 className="about_heading">Our Team</h2>
                            <p className="about_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius lorem sed erat blandit volutpat. Donec quis convallis libero, at placerat ante. Nam vel tincidunt neque. Sed interdum erat sed tincidunt dictum. Vestibulum condimentum finibus sem a malesuada. In maximus mauris eget ex sagittis tincidunt. Integer a eleifend ex, eget tincidunt magna. Quisque sagittis enim in ultricies sodales. Mauris luctus ullamcorper mauris sed pretium. Morbi in augue laoreet arcu convallis facilisis in ut lacus. Nulla est erat, luctus eget diam in, convallis luctus eros.</p>
                        </div>
                        <div className="col-lg-4">
                            <img className="about_imgs" src={board} />
                            <h2 className="about_heading">Our Board</h2>
                            <p className="about_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius lorem sed erat blandit volutpat. Donec quis convallis libero, at placerat ante. Nam vel tincidunt neque. Sed interdum erat sed tincidunt dictum. Vestibulum condimentum finibus sem a malesuada. In maximus mauris eget ex sagittis tincidunt. Integer a eleifend ex, eget tincidunt magna. Quisque sagittis enim in ultricies sodales. Mauris luctus ullamcorper mauris sed pretium. Morbi in augue laoreet arcu convallis facilisis in ut lacus. Nulla est erat, luctus eget diam in, convallis luctus eros.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;