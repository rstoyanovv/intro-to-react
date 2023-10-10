import '../styles/welcomePageStyle.css';
import '../styles/style.css';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Toast } from 'bootstrap';

export default function WelcomePage() {
    const [todayTask, setTodayTask] = useState([]);

    useEffect(() => {
        const fetchLastTask = async () => {
            try {
                const response = await axios.get('/api/fetch-last-task');
                const lastTask = response.data[0];
                setTodayTask(lastTask);
            } catch (error) {
                console.error(error);
            }
        };
        fetchLastTask();
    }, []);

    const styleOfATag = {
        textDecoration: 'none',
        color: 'black',
        fontWeight: '900',
        marginBottom: '1rem',
        fontSize: 'xx-large'
    }

    console.log(`Today task: ${todayTask.title}`);

    useEffect(() => {
        if (todayTask) {
            setTimeout(() => {
                const toastElement = new Toast(document.querySelector('.toast'));
                toastElement.show();
            }, 2000); 
        }
    }, [todayTask]);

    return (
        <>
            <div className="container-fluid" style={{ height: '85vh' }}>
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className='logo text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" className="bi bi-check-all"
                                viewBox="0 0 16 16" >
                                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>
                            <h1 className="welcome-title">Task Mate</h1>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                            <div className="first-heading-section">
                                <a href="/api/create-task" style={styleOfATag}>Welcome to Task Mate</a>
                                <h4>Your daily to-do organizer</h4>
                            </div>
                            <div className="second-heading-section">
                                <h2 style={{ fontWeight: '600', marginBottom: '0.8rem', fontSize: 'xx-large' }}>Get started</h2>
                                <h6>Here you can create tasks, set deadlines and be organized</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/*Here is a toast ->*/}
            <div
                aria-live="polite"
                aria-atomic="true"
                class="position-fixed bottom-0 end-0"
                style={{
                    paddingTop: '23rem', paddingLeft: '23rem', paddingRight: '23rem',
                    paddingBottom: '11rem'
                }}>
                <div class="toast-container">
                    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                        <div class="toast-header">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16"
                                fill="currentColor"
                                class="bi bi-check-all"
                                viewBox="0 0 16 16"
                                style={{ marginRight: '0.3rem', paddingTop: '0.1rem' }}> <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                            </svg>
                            <strong class="me-auto">Your most recent task</strong>
                            <small class="text-body-secondary">just now</small>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            <p style={{fontWeight: 'bold'}}>{todayTask.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}