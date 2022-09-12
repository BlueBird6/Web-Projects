import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from './Nav2';
import Footer from './footer';


let data = [{
    About: "",
}];

function UpdateAbout() {

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


    const handleSubmit = (formData) => {
        formData.preventDefault()
        axios({
            method: "POST",
            url: "/api/about/update",
            data: {
                About: formData.target.main.value,
                Story: formData.target.story.value,
                Team: formData.target.team.value,
                Board: formData.target.board.value,
              },
        }).then((res) => {
            console.log(res);
        });
    }

    return (
        <div>
            <Nav />

            <div className="heading">
                <h1>About Us Management</h1>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label-heading" for="mainText">Main Text</label>
                        <textarea type="text" className="form-control" name="main" id="mainText" rows="10" defaultValue={data[0].About} />

                    </div>
                    <div className="form-group">
                        <label className="label-heading" for="storyText">Story</label>
                        <textarea type="text" className="form-control" name="story" id="storyText" rows="10" defaultValue={data[0].Story} />
                    </div>
                    <div className="form-group">
                        <label className="label-heading" for="teamText">Team</label>
                        <textarea type="text" className="form-control" name="team" id="teamText" rows="10" defaultValue={data[0].Team} />
                    </div>
                    <div className="form-group">
                        <label className="label-heading" for="boardText">Board</label>
                        <textarea type="text" className="form-control" name="board" id="boardText" rows="10" defaultValue={data[0].Board} />
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>

            </div>

            <Footer />
        </div>
    );
};

export default UpdateAbout;