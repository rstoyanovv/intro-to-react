export default function Navbar() {
    const styleOfATag = {
        display: 'block',
        textDecoration: 'none',
        padding: '20px 20px',
    }

    const styleOfButton = {
        border: 'white',
        borderRadius: '30px',
    }

    return (
        <nav>
            <a href='/api/create-task'>
                <h3>Simple To-Do application</h3>
            </a>
            <button style={styleOfButton}>
                <a style={styleOfATag} href='/api/create-task'> Create a new task </a>
            </button>
            <button style={styleOfButton}>
                <a style={styleOfATag} href='/api/get-tasks'> View all tasks </a>
            </button>
        </nav>
    );
}