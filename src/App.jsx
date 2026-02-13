import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
function App(){
  return(
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </div>
  )

}

export default App;