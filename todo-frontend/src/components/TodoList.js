import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCollapseSection from './SingleCollapseSection';
import Schedule from './Schedule';
import '../styles/style.css';
import '../styles/todoPageStyle.css';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [todays, setTodays] = useState([]);

    useEffect(() => {
        axios
            .get('/api/get-tasks')
            .then((response) => {
                const { tasks, todaysTasks } = response.data;
                setTodos(tasks);
                console.log(todaysTasks);
                setTodays(todaysTasks);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const h3Style = {
        marginBottom: '1rem',
        fontWeight: 'bold',
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 ps-5">
                    <div className="container mt-4 mb-4">
                        <h3 style={h3Style}>Your tasks</h3>
                        <div id="accordion">
                            {todos.map((task) => (
                                <SingleCollapseSection key={task.id} task={task} />
                            ))}
                        </div>
                        <div className="d-flex justify-content-between" style={{marginTop: '1.2rem'}}>
                            <button class="btn btn-primary" type="submit" value="Submit"> Complete tasks</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="container mt-4 mb-4">
                        <h3 style={h3Style}>Your schedule for today</h3>
                        <h5 style={{ marginBottom: '1rem' }}> You have to do </h5>
                        <div id="schedule">
                            <ul className="list-group">
                                {todays.map((todayTask) => (
                                    <Schedule key={todayTask.id} task={todayTask} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}