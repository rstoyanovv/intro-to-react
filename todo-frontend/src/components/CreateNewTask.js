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
      .post('/api/create-task', { title: newTitle, task: newTask })
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
      <h2 style={{fontWeight: 'bold', marginBottom: '1.5rem'}}>Create New Task</h2>
      {isSubmitted ? (<p>Task created successfully!</p>) : (
        <form style={{ width: '40vw' }} onSubmit={handleSubmit}>
          <div className='form-row'>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Task</span>
              <input type="text" class="form-control"
                placeholder="Name your task"
                aria-label="Task"
                aria-describedby="basic-addon1"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className='form-row'>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Describtion</span>
              <input type="text" class="form-control"
                placeholder="Add some description"
                aria-label="Description"
                aria-describedby="basic-addon1"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='form-row'>
            <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Task'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}


