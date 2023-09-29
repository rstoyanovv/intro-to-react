import '../styles/welcomePageStyle.css';

export default function WelcomePage() {
    const styleOfATag = {
        display: 'block',
        textDecoration: 'none',
        padding: '20px 20px',
    }

    return (
        <div className="welcome-container">
            <header className="welcome-header">
                <h1>Welcome to your To-Do organizer</h1>
                <p>Organize your tasks and stay productive</p>
            </header>
            <main className="welcome-main">
                <section className="section">
                    <h2>Get started</h2>
                    <p>Here you can create tasks, set deadlines and be organized</p>
                </section>
                <section className="section">
                    <h2>Ready to begin</h2>
                    <p>Click below</p>
                    <button className="start-button">
                        <a style={styleOfATag} href='/api/create-task'> Create your first task </a>
                    </button>
                </section>
            </main>
            <footer className="welcome-footer">
                <p>&copy; To-Do Application</p>
            </footer>
        </div>
    );
}