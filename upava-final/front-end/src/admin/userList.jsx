import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from './Nav2';
import Footer from './footer';


let data = [];

function Admin() {

    const [index, setIndex] = useState(0);

    const fetchUserData = () => {
        axios({
            method: "GET",
            url: "/api/user/fetchAll",
        }).then((res) => {
            data = res.data.user;
            
            console.log(data);
        });
    }

    useEffect(() => {
        fetchUserData();
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
                <h1>Users List</h1>
            </div>

            <div className="container">
                <table class="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => {
                                let fullName, Email;
                                ({ fullName, Email } = user);

                                console.log( {fullName} );

                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{fullName}</td>
                                        <td>{Email}</td>
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