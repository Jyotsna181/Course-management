import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

const Home = () => {
  return (
    <div className="container">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
    
    )
}

export default Home;