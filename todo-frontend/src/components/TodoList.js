import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.css';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios
            .get('/api/get-tasks')
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const style = {
        marginLeft: '20px',
    }

    return (
        <div className="list-with-tasks" style={style}>
            <h1>Tasks: </h1>
            <ul className="list">
                {todos.map((todo) => (
                    <div className='single-item'>
                        <li key={todo.id} className='todo-item'> Title: {todo.title} </li>
                        <li key={todo.id} className='todo-item'> Task: {todo.task} </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}