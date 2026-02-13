import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup(){
    let navigate = useNavigate();

    //for form logic
   let [form , setForm] =  useState(
    {
        name:"",
        email:"",
        password:""
    }
   );
   //input logic
   function change(e){
        setForm(
            {
             ...form,
            [e.target.name]:e.target.value
            }
        )
   }

   //form logic
   async function submit(e){
        e.preventDefault();
        await axios.post("https://todo-back-end-cj6q.onrender.com/users",form);
        navigate('/login')
   }
    return(
        <div className="signup-page">
            <form className="signup-card" onSubmit={submit}>
                <h2>Create Account</h2>
                <p className="Signup-sub">Join and Start organizing your tasks.</p>
                <input 
                className="signup-input"
                type="text" 
                name="name"
                placeholder="Name"
                required
                value={form.name}
                onChange={change} 
                 />
                 <input 
                className="signup-input"
                type="email" 
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={change} 
                 />
                 <input 
                className="signup-input"
                type="password" 
                name="password"
                placeholder="Password"
                required
                value={form.password}
                onChange={change} 
                 />
                 <button type="submit" className="signup-btn">Register</button>
            </form>
            
        </div>
    )
}

export default Signup;