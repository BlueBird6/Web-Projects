import React, { useEffect, useState } from 'react';
import Nav2 from './Nav2';
import Footer from './footer';
import axios from "axios";


const path = "../images/news/";
let data = [];

function News() {

    const [rec, setRec] = useState();

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



    return (
        <div>
            <Nav2 />

            <div className="heading">
                <h1>News</h1>
            </div>

            <div className="container" style={{"margin-bottom":"5rem"}}>
                <div className="row">
                    {
                        data.map((item) => {

                            let link = "news-title?" + item.Title;
                            const imgPath = path + item.Image;
                            console.log(imgPath);

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

export default News;