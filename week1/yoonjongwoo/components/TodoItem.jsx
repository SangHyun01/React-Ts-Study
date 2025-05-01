// src/components/TodoItem.jsx

const TodoItem = ({ todo: { id, text }, onDelete }) => (
  <li className="todo-item">
    <span className="item-text">{text}</span>
    <button
      className="delete-button"
      onClick={() => onDelete(id)}
    >
      삭제
    </button>
  </li>
);

export default TodoItem;
