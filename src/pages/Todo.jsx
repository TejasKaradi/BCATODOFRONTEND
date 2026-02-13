import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Todo.css";

let AUTH_KEY = "todo_user";

function Todo(){

    const navigate = useNavigate();

    const [text,setText] = useState("");
    const [search, setSearch] = useState("");
    const [todos,setTodos] = useState([]);   // ✅ FIX — was undefined

    const getTodos = async()=>{
        const res = await axios.get("https://todo-back-end-cj6q.onrender.com/todos");
        setTodos(res.data);
    }

    useEffect(()=>{getTodos()},[]);

    useEffect(()=>{
        if(!localStorage.getItem(AUTH_KEY)){
            navigate('/signup',{replace:true})
        }
    },[])

    async function addTodo() {
        if(!text) return;

        await axios.post(
          "http://localhost:3001/todos",
          {text,done:false}
        );

        setText("");
        getTodos();
    }

    // ✅ FIX — added id parameter
    async function deleteTodo(id) {
        await axios.delete(`https://todo-back-end-cj6q.onrender.com/todos/${id}`);
        getTodos();
    }

    // ✅ FIX — use t.id not undefined id
    const toggle = async t=>{
        await axios.patch(
          `https://todo-back-end-cj6q.onrender.com/todos/${t.id}`,
          {done: !t.done}
        )
        getTodos();
    }

    const filtered = todos.filter(t =>
        t.text.toLowerCase()
        .includes(search.toLowerCase())
    );

    // ✅ FIX — pending should be !done
    const pending = todos.filter(t=>!t.done).length;

    return(
        <div className="todo-page">
            <Navbar/>

            <div className="todo-wrap">
                <div className="todo-header">
                    <h2 className="todo-title">Todo Dashboard</h2>
                    <span className="todo-badge">
                        Pending: {pending}
                    </span>
                </div>
            </div>

            <div className="todo-add-row">
                <input
                 className="todo-input"
                 type="text"
                 value={text}
                 onChange={e=>setText(e.target.value)}
                 placeholder="Add new Task"
                 />

                <button
                 type="submit"
                 className="todo-btn todo-btn-add"
                 onClick={addTodo}
                >
                    Add
                </button>
            </div>

            <input
                className="todo-input todo-search"
                type="text"
                placeholder="Search Tasks...."
                value={search}
                onChange={e=>setSearch(e.target.value)}
             />

            <div className="todo-list">
                {
                    filtered.map(t=>(
                        <div
                         className={
                           t.done
                           ? "todo-row todo-row-done"
                           : "todo-row"
                         }
                         key={t.id}
                        >

                         <span>{t.text}</span>

                         <button
                          className="todo-btn todo-btn-done"
                          type="button"
                          onClick={()=>toggle(t)}
                         >
                            Done
                         </button>

                         <button
                          type="button"
                          className="todo-btn todo-btn-del"
                          onClick={()=>deleteTodo(t.id)}
                         >
                            Delete
                         </button>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Todo;