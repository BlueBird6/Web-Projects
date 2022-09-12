import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from './Nav2';
import Footer from './footer';


let data = [];

function DonationRecord() {

    const [index, setIndex] = useState(0);

    const fetchUserData = () => {
        axios({
            method: "GET",
            url: "/api/donate/fetchall",
        }).then((res) => {
            data = res.data.donation;

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
                <h1>Donation Records</h1>
            </div>

            <div className="container">
                <table class="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((donation, index) => {
                                let fullName, Amount, Method;
                                ({ fullName, Amount, Method } = donation);

                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{fullName}</td>
                                        <td>{Amount}</td>
                                        <td>{Method}</td>
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

export default DonationRecord;