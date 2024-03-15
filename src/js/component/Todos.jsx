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
    <div className="text-center content-box m-5 border">
      <input className="input-group" 
      type="text" value={task} onChange={(event) => setTask(event.target.value)} onKeyDown={handleKeyDown} placeholder="Añadir tarea y presionar Enter"/>
      <ul>{tasksList.map((task, index) => (
          <ul className="border" 
          key={index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(-1)}>
          {task} {hoverIndex === index && (<button onClick={() => handleDelete(index)}>X</button>)}
          </ul>))}
      </ul>
    </div>
  );
};

export default Todos;