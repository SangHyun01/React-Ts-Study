import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {// todos라는 props를 받음 
  return (
    <ul>
      {todos.map((item, index) => ( // todos 배열의 각 항목 순회하면서, 각 항목 TodoItem 컴포넌트로 전달하여 렌더링 
        <TodoItem key={index} item={item} /> // 각 항목의 인덱스를 key로 사용 
      ))}
    </ul>
  );
}

export default TodoList;
