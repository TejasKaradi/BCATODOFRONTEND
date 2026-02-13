import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import"./Home.css"
function Home(){
    return(
        <div className="home-page">
           <Navbar/> 
           <div className="home-center">
            <h1 className="home-title">Modern Todo App</h1>
            <p>Clean Fast Productive</p>
            <div className="home-cta">
                <Link to='/signup' className="home-cta-link home-primary">Get Started</Link>
                <Link to='/login' className="home-cta-link home-secondary">Sign in</Link>

            </div>
           </div>
        </div>
    )
}
export default Home;