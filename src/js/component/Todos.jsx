import React, { useState, useEffect } from "react";

const Todos = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    setTasksList(tasksList.filter((_, i) => i !== index));
  };

  return (
    
    <div className="container text-center">
      <h1 className="display-4">To Do</h1>
      <div className="card m-5 border">
        <div className="card-body">
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              value={task} 
              onChange={(event) => setTask(event.target.value)} 
              onKeyDown={handleKeyDown} 
              placeholder="Añadir tarea y presionar Enter"
            />
          </div>
          <ul className="list-group">
            {tasksList.map((task, index) => (
              <li 
                key={index} 
                className="list-group-item d-flex justify-content-between align-items-center"
                onMouseEnter={() => setHoverIndex(index)} 
                onMouseLeave={() => setHoverIndex(-1)}
                >{task} {hoverIndex === index && (
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>X
                  </button>)}
              </li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Todos;