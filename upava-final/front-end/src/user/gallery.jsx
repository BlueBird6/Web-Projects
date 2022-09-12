import React, { useState, useEffect } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Nav2 from "./Nav2";
import Footer from "./footer";
import axios from "axios";

import './gallery.css';


let data = [];
const path = "../images/gallery/";

function Gallery() {

    const [rec, setRec] = useState();

    const getImgs = () => {
        axios({
            method: "GET",
            url: "/api/gallery/fetch",
        }).then((res) => {
            setRec(data);
            data = res.data.data;
        })
    };

    useEffect(() => {
        getImgs()
    }, []);

    console.log(data);

    return (
        <div>
            <Nav2 />

            <div className="heading">
                <h1>Gallery</h1>
            </div>

            <div className="container" style={{"margin-bottom":"5rem"}}>
                <div className="row">
                    {
                        data.map((item) => {
                            const imgPath = path + item.Image;

                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Zoom>
                                        <img className="images" src={imgPath} />
                                    </Zoom>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
            </div>

            <Footer />
        </div>
    );
};

export default Gallery;