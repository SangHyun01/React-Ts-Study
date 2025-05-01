import React from 'react';
import TodoItem from './TodoItem.jsx';

const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return <p className="empty">empty</p>;
  }

  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
