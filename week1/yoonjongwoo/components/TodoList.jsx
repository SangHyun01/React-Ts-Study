import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete }) => {
  if (todos.length === 0) {
    return <p className="empty-message">할 일이 없습니다.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
