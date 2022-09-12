import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import News from './pages/news';
import NewsPage from './pages/news_title';
import Events from './pages/events';
import EventsPage from './pages/event_title';
import Donation from './pages/donation';
import SignUp from './pages/signup';
import SignIn from './pages/signin';


//user Routes
import HomeUser from './user/home';
import AboutUser from './user/about';
import GalleryUser from './user/gallery';
import NewsUser from './user/news';
import NewsPageUser from './user/news_title';
import EventsUser from './user/events';
import EventsPageUser from './user/event_title';
import DonationUser from './user/donation';
import ForgotPassword from './pages/forgotPassword';
import ForgotPasswordVerify from './pages/forgotPasswordVerify';
import NewPassword from "./pages/NewPassword";
import ContactUs from "./user/contact";


//admin Routes
import Admin from './admin/admin';
import UserList from './admin/userList';
import DonationRecord from './admin/donation-rec';
import UpdateAbout from './admin/updateAbout';
import UpdateNews from './admin/news';
import UpdateEvents from './admin/events';
import GalleryUpdate from './admin/gallery';
import Feedback from './admin/feedback';

function AllComponent() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/news" element={<News />} />
                <Route path="news-title" element={<NewsPage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/event-title" element={<EventsPage />} />
                <Route path="/donation" element={<Donation />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword /> } />
                <Route path="/set-new-password" element={<NewPassword />} />

                <Route path="/user" element={<HomeUser />} />
                <Route path="/user/about" element={<AboutUser />} />
                <Route path="/user/gallery" element={<GalleryUser />} />
                <Route path="/user/news" element={<NewsUser />} />
                <Route path="/user/news-title" element={<NewsPageUser />} />
                <Route path="/user/events" element={<EventsUser />} />
                <Route path="/user/event-title" element={<EventsPageUser />} />
                <Route path="/user/donation" element={<DonationUser />} />
                <Route path='/user/contact-us' element={<ContactUs />} />

                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/user-list" element={<UserList />} />
                <Route path="/admin/feedback" element={<Feedback />} />
                <Route path="/admin/donation-record" element={<DonationRecord />} />
                <Route path="/admin/update-about" element={<UpdateAbout />} />
                <Route path="/admin/news" element={<UpdateNews />} />
                <Route path="/admin/events" element={<UpdateEvents />} />
                <Route path="/admin/gallery" element={<GalleryUpdate /> } />
                <Route path="/forgot-password/verify" element={<ForgotPasswordVerify />} />
            </Routes>
        </div>
    );
};

export default AllComponent;