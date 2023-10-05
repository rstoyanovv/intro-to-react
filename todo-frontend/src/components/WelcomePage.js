import '../styles/welcomePageStyle.css';
import '../styles/style.css';
import Footer from './Footer';

export default function WelcomePage() {
    //Add Toasts with todays tasks

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
                        <div style={{ textAlign: 'center' }}>
                            <div className="first-heading-section">
                                <h2 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Task Mate</h2>
                                <h4>Your daily to-do organizer</h4>
                            </div>
                            <div className="second-heading-section">
                                <h2 style={{ fontWeight: 'bold', marginBottom: '0.8rem' }}>Get started</h2>
                                <h6>Here you can create tasks, set deadlines and be organized</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}