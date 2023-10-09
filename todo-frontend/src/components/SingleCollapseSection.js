import { useState } from "react";
import '../styles/todoPageStyle.css';	
import axios from "axios";

export default function SingleCollapseSection({ task, onTaskDeleted }) {
    const [isCollapsed, setIsCollapsed] = useState(true);  

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleDelete = async () => {
        try {
            await axios.put(`/api/delete-task?id=${task.id}`);
            onTaskDeleted();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                    <button
                        className={`btn btn-link ${isCollapsed ? 'collapsed' : ''}`}
                        onClick={toggleCollapse}
                        id="collapsing"
                    >
                        {task.title}
                    </button>
                </h5>
                <div>
                    <button 
                        type="button" 
                        class="btn btn-danger center-text"
                        onClick={handleDelete}
                    >Delete</button>
                </div>
            </div>

            <div className={`collapse ${isCollapsed ? '' : 'show'}`} >
                <div className="card-body">
                    {task.task}
                </div>
            </div>
        </div>
    );
}