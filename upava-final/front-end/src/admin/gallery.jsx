import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav2';
import Footer from './footer';

import './news.css';

let data = [];

let oldTitle = "";

function UpdateGallery() {

    const [rec, setRec] = useState();
    const notify = () => toast.success("Image Added");
    const notify2 = () => toast.success("Image Deleted");

    const handleSubmit = (formData) => {
        formData.preventDefault()
        axios({
            method: "POST",
            url: "/api/gallery/add",
            data: {
                img: formData.target.image.value,
                date: formData.target.date.value,
            },
        }).then((res) => {
            notify();
        });
    };


    const Delete = (formData) => {
        formData.preventDefault();
        axios({
            method: "POST",
            url: "/api/gallery/delete",
            data: {
                image: formData.target.img.value,
            }
        }).then((res) => {
            notify2()
        })
    };

    console.log(data);

    return (
        <div>
            <Nav />

            <div className="heading">
                <h1>Gallery Management</h1>
            </div>

            <div className="container">
                <h1 className="heading">Add Images</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Image Name</label>
                        <input type="text" className="form-control" id="img_path" name="image" placeholder="Image Name with extension (example event.png)" />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" name="date" id="date" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Image</button>
                </form>

            </div>

            <div className="container">
                <h2 className="heading">Delete Image</h2>
                <form onSubmit={Delete}>
                    <div className="form-group">
                        <label>Image Name</label>
                        <input type="text" className="form-control" name="img" placeholder="Name of Image you want to delete" />
                    </div>
                    <button type="submit" className="btn btn-primary fetch-btn">Delete Image</button>
                </form>

            </div>

            <ToastContainer />
            <Footer />
        </div>
    );
};

export default UpdateGallery;