import React from "react";
import Zoom from 'react-medium-image-zoom'
import Nav from './Nav2';
import Footer from './footer';

function Home() {
    return (
        <div>
            <Nav />

            <div className="home_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-sm-6"></div>
                        <div className="col-lg-5 col-sm-12 welcome_mssg">
                            <p className="name">Uganda the Pearl of Africa Victoria Association Incorporated</p>
                            <p className="join">Contribute to help the community</p>
                            <a className="member" href="/user/donation">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    )
};

export default Home;