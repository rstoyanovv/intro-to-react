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
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/api/get-tasks');
                const { tasks, todaysTasks } = response.data;
                setTodos(tasks);
                setTodays(todaysTasks);
            } catch (error) {
                console.error(error);
            }
        };
        fetchTasks();
    }, []);

    const handleTaskDeleted = (taskId) => {
        const updatedTodos = todos.filter((task) => task.id !== taskId);
        setTodos(updatedTodos);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 ps-5">
                    <div className="container mt-4 mb-4">
                        <h3 className='task-header'>Your tasks</h3>
                        <div id="accordion">
                            {todos.map((task) => (
                                <SingleCollapseSection
                                    key={task.id}
                                    task={task}
                                    onTaskDeleted={() => handleTaskDeleted(task.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="container mt-4 mb-4">
                        <h3 className="task-header">Your schedule for today</h3>
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