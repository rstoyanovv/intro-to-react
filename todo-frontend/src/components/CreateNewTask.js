import React, { useState } from 'react';
import axios from 'axios';
import '../styles/style.css';

export default function CreateNewTask() {
  const [newTask, setNewTask] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    axios
      .post('/api/create-task', { title: newTitle, task: newTask})
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

  const style = {
    marginLeft: '40px',
    marginTop: '30px',
  };

  return (
    <div className="create-new-task" style={style}>
      <h2>Create New Task</h2>
      {isSubmitted ? (
        <p>Task created successfully!</p>
      ) : (
        <form style={{ width: '40vw' }} onSubmit={handleSubmit}>
          <div className='form-row'>
            <p className='paragraph' style={{ marginRight: '12px' }}>Enter title of your task</p>
            <input
              type="text"
              placeholder="Enter task title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className='input-text'
              required
            />
          </div>
          <div className='form-row'>
            <p className='paragraph' style={{ marginRight: '12px' }}>Enter descirption of your task</p>
            <input
              type="text"
              placeholder="Enter description of task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className='input-text'
              required
            />
          </div>
          <div className='form-row'>
            <button id='create-button' type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Task'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}


