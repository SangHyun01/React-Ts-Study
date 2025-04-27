import { useEffect, useState } from "react";
import classes from "./todolist.module.css";

function TodoList({ todos, onRemoveItem, onChangeItem, onToggleComplete }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    console.log("현재 todos 배열: ", todos);
  }, [todos]);

  return (
    <ul className={classes.list}>
      {todos.map((todo, index) => {
        const isEditing = index === editingIndex;

        return (
          <div className={classes.listwrap} key={index}>
            <input
              type="checkbox"
              checked={todo.isChecked}
              onChange={() => onToggleComplete(index)}
            />
            <li
              className={`${classes.item} ${
                todo.isChecked ? classes.completed : ""
              }`}
              onClick={() => {
                if (!isEditing) onRemoveItem(index);
              }}
            >
              {isEditing ? (
                <input
                  value={editingText}
                  autoFocus
                  onChange={(e) => setEditingText(e.target.value)}
                  onBlur={() => {
                    onChangeItem(index, editingText);
                    setEditingIndex(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onChangeItem(index, editingText);
                      setEditingIndex(null);
                    }
                  }}
                />
              ) : (
                <span>{todo.text}</span>
              )}
            </li>
            {!isEditing && (
              <button
                onClick={() => {
                  setEditingIndex(index);
                  setEditingText(todo.text);
                }}
              >
                수정
              </button>
            )}
          </div>
        );
      })}
    </ul>
  );
}

export default TodoList;
