import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const AUTH_KEY = "todo_user";


function Navbar(){

    const navigate = useNavigate();

    const [user,setUser] = useState(()=>{
        try{
         return JSON.parse(localStorage.getItem(AUTH_KEY))
        }catch(err){
         return null;
         
        }
    });

        const logout =()=>{
            localStorage.removeItem(AUTH_KEY);
        navigate('/login');
        };

    return(
        <div>
            <nav className="nav">
             <div className="nav-logo">TodoApp</div>
             
             {
                user ? (<button className="nav-btn" onClick={logout}>Logout</button>):
                (
                  <button className="nav-btn" type="button"
                  onClick={()=> navigate('/signup')}>Sign Up</button>
                )
            }

            </nav>
        </div>
            
            
            )
        }
    
export default Navbar;