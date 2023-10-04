import { useState } from "react";
import '../styles/todoPageStyle.css';

export default function SingleCollapseSection({ task }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const titleStyle = {
        textDecoration: 'none',
        color: 'rgb(97, 122, 190)',
        fontSize: '1 rem',
        cursor: 'pointer'
    }

    return (
        <div className="card mb-2">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                    <button
                        className={`btn btn-link ${isCollapsed ? 'collapsed' : ''}`}
                        onClick={toggleCollapse}
                        style={titleStyle}
                    >
                        {task.title}
                    </button>
                </h5>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id={`flexCheck${task.id}`}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={`flexCheck${task.id}`}
                    >
                        Completed
                    </label>
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