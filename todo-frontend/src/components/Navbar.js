export default function Navbar() {
    return (
        <nav>
            <h3>Simple To-Do application</h3>
            <button><a href='/api/create-task'> Create a new task </a></button>
            <button><a href='/api/get-tasks'> View all tasks </a></button>
        </nav>
    );
}