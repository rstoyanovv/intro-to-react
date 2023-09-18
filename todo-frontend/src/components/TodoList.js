import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/style.css';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        axios.get('/api/todos')
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const addTodo = () => {
        axios.post('/api/todos', { task: newTask })
            .then((response) => {
                setTodos([...todos, response.data]);
                setNewTask('');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="todo-container">
            <h1 className="todo-header">To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder='Add new task'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="task-input"
                />
                <button onClick={addTodo} className="add-button">Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">{todo.task}</li>
                ))}
            </ul>
        </div>
    );
}