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

    return (
        <div className="list-with-tasks">
            <h1>Tasks: </h1>
            <ul className="list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}