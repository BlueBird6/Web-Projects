import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './Nav2';
import Footer from './footer';

import './news.css';

let data = [];

let oldTitle = "";

function UpdateNews() {

    const [rec, setRec] = useState();
    const notify = () => toast.success("News Created");
    const notify2 = () => toast.success("News Updated");
    const notify3 = () => toast.success("News Deleted");

    const handleSubmit = (formData) => {
        formData.preventDefault()
        axios({
            method: "POST",
            url: "/api/news/create",
            data: {
                title: formData.target.title.value,
                overview: formData.target.overview.value,
                content: formData.target.content.value,
                date: formData.target.date.value,
                img: formData.target.image.value,
            },
        }).then((res) => {
            notify();
        });
    };

    const getNews = (formData) => {
        formData.preventDefault();
        axios({
            method: "GET",
            url: "/api/news/fetchTitle?title=" + formData.target.title.value,
        }).then((res) => {
            setRec(data);
            data = res.data.data;
            oldTitle = res.data.data.Title;
        }).catch(() => {
            data = {
                Title: "Not Found",
                Overview: "Not Found",
                Image: "Not Found",
                Content: "Not Found",
            }
        })
    };


    const updateNews = (formData) => {
        formData.preventDefault();
        axios({
            method: "POST",
            url: "/api/news/update?oldTitle=" + data.Title,
            data: {
                Title: formData.target.title.value,
                Overview: formData.target.overview.value,
                Image: formData.target.image.value,
                Content: formData.target.content.value,
            }
        }).then((res) => {
            notify2()
        })
    };

    const Delete = (formData) => {
        formData.preventDefault();
        axios({
            method: "POST",
            url: "/api/news/delete?title=" + data.Title,
        }).then((res) => {
            notify3()
        })
    };

    console.log(data);

    return (
        <div>
            <Nav />

            <div className="heading">
                <h1>News Management</h1>
            </div>

            <div className="container">
                <h1 className="heading">Create News</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="title" id="titlr" placeholder="News Title" />

                    </div>
                    <div className="form-group">
                        <label>Overview</label>
                        <textarea type="text" className="form-control" name="overview" id="storyText" rows="1" placeholder="News overview" />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea type="text" className="form-control" name="content" id="teamText" rows="10" placeholder="News content" />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" id="news_date" name="date" />
                    </div>
                    <div className="form-group">
                        <label>Image Name</label>
                        <input type="text" className="form-control" id="img_path" name="image" placeholder="Image Name with extension (example event.png)" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create News</button>
                </form>

            </div>

            <div className="container">
                <h2 className="heading">Update News</h2>
                <form onSubmit={getNews}>
                    <div className="form-group">
                        <label>Old Title</label>
                        <input type="text" className="form-control" name="title" id="title" placeholder="Title of news you want to update" />
                    </div>
                    <button type="submit" className="btn btn-primary fetch-btn">Fetch News Details</button>
                </form>

                <form onSubmit={updateNews}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" id="title" name="title" defaultValue={data.Title} />
                    </div>
                    <div className="form-group">
                        <label>Overview</label>
                        <textarea type="text" className="form-control" name="overview" id="storyText" rows="1" defaultValue={data.Overview} />
                    </div>
                    <div className="form-group">
                        <label>Image Name</label>
                        <input type="text" className="form-control" id="img" name="image" defaultValue={data.Image} />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea type="text" className="form-control" name="content" id="teamText" rows="10" defaultValue={data.Content} />
                    </div>

                    <button type="submit" className="btn btn-primary">Edit News</button>
                    <button className="btn btn-primary delete-btn" onClick={Delete}>Delete News</button>
                </form>

            </div>

            <ToastContainer />
            <Footer />
        </div>
    );
};

export default UpdateNews;