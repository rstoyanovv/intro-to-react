import React, { useState } from 'react';
import axios from 'axios';
import '../styles/style.css';

export default function CreateNewTask() {
    const [newTask, setNewTask] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      axios
        .post('/api/create-task', { task: newTask })
        .then(() => {
          setIsSubmitted(true);
          setIsSubmitting(false);
          setNewTask('');
        })
        .catch((error) => {
          console.error(error);
          setIsSubmitting(false);
        });
    };
  
    return (
      <div className="create-new-task">
        <h1>Create New Task</h1>
        {isSubmitted ? (
          <p>Task created successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter task description"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Task'}
            </button>
          </form>
        )}
      </div>
    );
  }
  

