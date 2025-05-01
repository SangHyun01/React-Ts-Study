import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList.jsx';

const App = () => {
  const [todos] = useState([
    // { id: 1, text: '할 일 1', checked: true },
    // { id: 2, text: '할 일 2', checked: true },
    // { id: 3, text: '할 일 3', checked: false }
  ]);

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;