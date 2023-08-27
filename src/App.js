import './App.css';
import React, { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addTodo = () => {
    if (toDo.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: toDo,
        status: false,
        timestamp: new Date().toLocaleString(), // Add timestamp
      };
      setToDos([...toDos, newTodo]);
      setToDo('');
    }
  };

  const toggleTodoStatus = (id) => {
    const updatedTodos = toDos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: !todo.status };
      }
      return todo;
    });
    setToDos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's a Nice Day 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="left">
              <input
                onChange={() => toggleTodoStatus(todo.id)}
                checked={todo.status}
                type="checkbox"
              />
              <p className={todo.status ? 'completed' : ''}>{todo.text}</p>
              <p className="timestamp">Added on: {todo.timestamp}</p> {/* Display timestamp */}
            </div>
            <div className="right">
              <i onClick={() => removeTodo(todo.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
