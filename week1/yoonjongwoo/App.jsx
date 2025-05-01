import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;
    setTodos([...todos, { id: Date.now(), text }]);
    setInput('');
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1 className="app-title">My Todo List</h1>

      <div className="input-group">
        <input
          className="todo-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button className="add-button" onClick={addTodo}>
          추가
        </button>
      </div>

      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
