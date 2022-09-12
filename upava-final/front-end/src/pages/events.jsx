import React, { useEffect, useState } from 'react';
import Nav2 from '../components/Nav2/Nav2';
import Footer from '../components/Footer/footer';
import axios from 'axios';

import './events.css';

const path = "./images/events/";
let data = [];

function Events() {

    const [rec, setRec] = useState();

    const fetchEventsData = () => {
        axios({
            method: "GET",
            url: "/api/event/fetch",
        }).then((res) => {
            data = res.data.data;
            setRec(data);
            // console.log(data)
        });
    }

    useEffect(() => {
        fetchEventsData();
    }, data);

    return (
        <div>
            <Nav2 />

            <div className="heading">
                <h1>Events</h1>
            </div>

            <div className="container" style={{"margin-bottom":"5rem"}}>
                <div className="row">
                    {
                        data.map((item) => {

                            let link = "event-title?" + item.Title;
                            const imgPath = (path + item.Image);

                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="card">
                                        <img className="card-img-top" src={imgPath} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.Title}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{item.Date}</h6>
                                            <p className="card-text">{item.Overview}</p>
                                            <a href={link} className="btn btn-primary">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Events;