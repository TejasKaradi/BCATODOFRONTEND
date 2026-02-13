import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

let AUTH_KEY = "todo_user";
function Login(){
    let navigate = useNavigate();
    let[email,setEmail] = useState("");
    let[password,setPassword] = useState("");

    // logic for LOGIN FORM
    async function subLogin(e){
        e.preventDefault();
        const res = await axios.get("https://todo-back-end-cj6q.onrender.com/users");
        const user = res.data.find((u)=>u.email === email && u.password === password)
        if(user){
            localStorage.setItem(
                AUTH_KEY,
            JSON.stringify({
                id: user.id,
                name: user.name,
                email: user.email
            })
        );
        navigate('/todo');


        }else{
            alert("Invalid Login")
        }




    }
    return(
        <div className="login-page">
            <form  className="login-card" onSubmit={subLogin}>
                <h2>Login</h2>
                <input 
                className="login-input"
                type="email"
                name="email" 
                placeholder="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input 
                className="login-input"
                 type="password"
                name="password" 
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <button type="submit" className="login-btn">Login</button>
                <p className="login-link-text">Don't have an account ?
                    <Link to ='/signup' className="login-link">Sign Up</Link>
                </p>
            </form>
            
        </div>
    )
}

export default Login;