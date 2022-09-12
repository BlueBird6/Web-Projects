import React, { useEffect, useState } from 'react';
import Nav from './Nav2';
import Footer from './footer';
import NewLineText from '../components/NewLineText';
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './event-title.css';


const path = "../images/events/";
let data = {
    Content: "",
};

function EventTitle() {

    const url = window.location.href;
    const splitUrl = url.split('?');
    const title = splitUrl[1];

    const [rec, setRec] = useState();

    const fetchEventData = () => {
        axios({
            method: "GET",
            url: "/api/event/fetchTitle?title=" + title,
        }).then((res) => {
            data = res.data.data;
            setRec(data);
            console.log(data)
        });
    }

    useEffect(() => {
        fetchEventData();
    }, []);

    const imgPath = (path + data.Image)

    return (
        <div>
            <Nav />

            <div className="event_header">
                <h1 className="event_title">{data.Title}</h1>
            </div>

            <div className="container event_section">
                <img className="event_img" src={imgPath} />
                <NewLineText text={data.Content} />
            </div>

            <div className="back" style={{"margin-bottom":"5rem"}}>
                <a className="back_btn" href="/events"><FontAwesomeIcon className="arrow-left" icon="fa-solid fa-arrow-left" />All Events</a>
            </div>

            <Footer />
        </div>
    );
};

export default EventTitle;