import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from './Nav2';
import Footer from './footer';


let data = [];

function Admin() {

    const [index, setIndex] = useState(0);

    const fetchFeedbackData = () => {
        axios({
            method: "GET",
            url: "/api/feedback/fetchAll",
        }).then((res) => {
            data = res.data.user;
            
            console.log(data);
        });
    }

    useEffect(() => {
        fetchFeedbackData();
    }, []);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 1000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);


    return (
        <div>
            <Nav />

            <div className="heading">
                <h1>User Feedback</h1>
            </div>

            <div className="container">
                <table class="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((feedback, index) => {
                                let Name, Email, Subject, Message;
                                ({ Name, Email, Subject, Message } = feedback);

                                {/* console.log( {Name} ); */}

                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{Name}</td>
                                        <td>{Email}</td>
                                        <td>{Subject}</td>
                                        <td>{Message}</td>
                                    </tr>

                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    );
};

export default Admin;