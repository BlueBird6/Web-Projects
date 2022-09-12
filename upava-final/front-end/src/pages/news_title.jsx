import React, { useEffect, useState } from "react";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/footer';
import NewLineText from "../components/NewLineText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import './news_title.css';


const path = "./images/news/";
let data = {
    Content: "",
};
function NewsTitle() {

    const url = window.location.href;
    const splitUrl = url.split('?');
    const title = splitUrl[1];

    const [rec, setRec] = useState();

    const fetchNewsData = () => {
        axios({
            method: "GET",
            url: "/api/news/fetchTitle?title=" + title,
        }).then((res) => {
            data = res.data.data;
            setRec(data);
            console.log(data)
        });
    }

    useEffect(() => {
        fetchNewsData();
    }, []);

    
    const imgPath = path + data.Image;

    return (
        <div>
            <Nav />

            <div className="news_header">
                <h1 className="news_title">{data.Title}</h1>
            </div>

            <div className="container news_section">
                <img className="news_img" src={imgPath} />
                <NewLineText text={data.Content} />
            </div>

            <div className="back" style={{"margin-bottom":"5rem"}}>
                <a className="back_btn" href="/news"><FontAwesomeIcon className="arrow-left" icon="fa-solid fa-arrow-left" />All News</a>
            </div>

            <Footer />
        </div>
    );
};

export default NewsTitle;