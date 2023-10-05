export default function Schedule({ task }) {
    // Can use Accordian later
    return (
        <li class="list-group-item" key={task.id}
            style={{ backgroundColor: '#f0f0f0' }}>
            {task.title}
        </li>
    );   
}