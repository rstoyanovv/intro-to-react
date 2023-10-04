import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCollapseSection from './SingleCollapseSection';
//import Calendar from './Calendar';
import '../styles/style.css';
import '../styles/todoPageStyle.css';

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

    const h3Style = {
        paddingLeft: '0.1rem',
        marginBottom: '1rem',
        fontWeight: 'bold'
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="container mt-4 mb-4 ps-5">
                        <h3 style={h3Style}>Your tasks </h3>
                        <div id="accordion">
                            {todos.map((task) => (
                                <SingleCollapseSection key={task.id} task={task} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="container mt-4 mb-4 ms-5 me-5">
                        <h3 style={h3Style}>Your calendar </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}