import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <>
            <h1> To-Do List </h1>
            <input
                type="text"
                placeholder='Add new task'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTodo}> Add </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}> {todo.task} </li>
                ))}
            </ul>
        </>
    );
}