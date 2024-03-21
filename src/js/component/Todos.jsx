import React, { useState, useEffect } from "react";

const Todos = () => {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const getTodos = () => {
    fetch ('https://playground.4geeks.com/apis/fake/todos//user/Carla',{
      'Content-Type': "application/json"
    })
    .then (response => {
      if (!response.ok) {
        return createUser();
      } else {
        return response.json();
      }
    })
    .then(data => {
      setTasksList(data);
    })
    .catch(error => {
      console.log('Error', error); 
    });
  };

 const createUser = () => {
  fetch ('https://playground.4geeks.com/apis/fake/todos//user/Carla'),{
    'method': 'POST',
    'Content-Type': "application/json",
    'BODY': JSON.stringify([])
  }
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
};

  const updateTodos = () => {
    fetch ('https://playground.4geeks.com/apis/fake/todos//user/Carla'),{
    'method': 'PUT',
    'Content-Type': "application/json",
    'BODY': JSON.stringify(tasksList)
  }
  .then(response => response.json())
  .then(data => {
    setTasksList(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
};

  const deleteTodos = () => {
    fetch('https://playground.4geeks.com/apis/fake/todos/user/Carla', {
      'method': 'DELETE',
      'Content-Type': "application/json"
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Limpiar la lista después de eliminar todas las tareas
      setTasksList([]);
    })
    .catch(error => {
      console.log('Error:', error);
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setTasksList([...tasksList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTasksList = tasksList.filter((_, i) => i !== index);
    setTasksList(newTasksList);
    updateTodos(); // Actualizar lista después de eliminar una tarea
  };

    // Llamar a getTodos al montar el componente
  useEffect(() => {
    getTodos();
  }, []);

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
      <button type="button" className="btn btn-danger" onClick={deleteTodos}> Eliminar todas las tareas </button>
    </div>
  );
};


export default Todos;