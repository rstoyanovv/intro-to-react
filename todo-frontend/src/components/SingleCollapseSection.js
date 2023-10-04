import { useState } from "react";

export default function SingleCollapseSection({ task }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    const titleStyle = {
        textDecoration: 'none',
        color: 'rgb(97, 122, 190)',
        fontSize: '1 rem'
    }
  
    return (
      <div className="card mb-2">
        <div className="card-header">
          <h5 className="mb-0">
            <button
              className={`btn btn-link ${isCollapsed ? 'collapsed' : ''}`}
              onClick={toggleCollapse}
              style={titleStyle}
            >
              {task.title}
            </button>
          </h5>
        </div>
  
        <div
          className={`collapse ${isCollapsed ? '' : 'show'}`}
        >
          <div className="card-body">
            {task.task}
          </div>
        </div>
      </div>
    );
}