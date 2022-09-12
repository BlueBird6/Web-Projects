import React, { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom'
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/footer';
import axios from 'axios';

import home_img from '../images/home.jpg';
import mission_img from "../images/mission.png";
import gal1 from "../images/gallery1.jpeg";
import gal2 from "../images/gallery2.jpeg";
import gal3 from "../images/gallery3.jpg";
import news from "../images/news.jpg";
import event from "../images/events.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./home.css"

const path = "./images/";
let data = [];
let data2 = [];
let imgs = [{
    Image: "",
}, {
    Image: "",
}, {
    Image: "",
}];

function Home() {


    const [rec, setRec] = useState();

    const getImgs = () => {
        axios({
            method: "GET",
            url: "/api/gallery/fetch",
        }).then((res) => {
            setRec(data);
            imgs = res.data.data;
        })
    };

    useEffect(() => {
        getImgs()
    }, []);

    const fetchNewsData = () => {
        axios({
            method: "GET",
            url: "/api/news/fetch",
        }).then((res) => {
            data = res.data.data;
            setRec(data);
            // console.log(data)
        });
    }

    useEffect(() => {
        fetchNewsData();
    }, data);


    const fetchEventData = () => {
        axios({
            method: "GET",
            url: "/api/event/fetch",
        }).then((res) => {
            data2 = res.data.data;
            setRec(data);
            // console.log(data)
        });
    }

    useEffect(() => {
        fetchEventData();
    }, data);



    return (
        <div>
            <Nav />

            <div className="home_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-6"></div>
                        <div className="col-lg-5 col-sm-12 welcome_mssg">
                            <p className="name">Uganda the Pearl of Africa Victoria Association Incorporated</p>
                            <p className="join">Join us to serve the community</p>
                            <a className="member" href="/sign-up">Become a member</a>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
};

export default Home;