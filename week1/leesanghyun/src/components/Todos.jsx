import { useRef } from "react";
import classes from "./todos.module.css";
import TodoList from "./TodoList";
import useLocalstorage from "../hooks/useLocalstorage";

function Todos() {
  const [todos, setTodos] = useLocalstorage("mytodos", []);

  const inputRef = useRef();

  // 아이템 제출
  function submitHandler(event) {
    event.preventDefault();
    const enteredValue = inputRef.current.value;

    if (enteredValue.trim().length === 0) return;

    setTodos((prev) => [...prev, { text: enteredValue, isChecked: false }]);
    inputRef.current.value = "";
  }

  // 아이템 삭제
  function handleRemoveItem(indexToRemove) {
    setTodos((prev) => prev.filter((_, index) => index !== indexToRemove));
  }

  // 아이템 수정
  function handleChangeItem(indexToChange, newValue) {
    // 인덱스에 해당하는 li에 input 창이 생기고 focus가 out되면 수정완료
    setTodos((prev) =>
      prev.map((item, index) =>
        index === indexToChange ? { ...item, text: newValue } : item
      )
    );
  }

  // 체크박스 선택 시 완료한 목록 밑줄
  function handleToggleComplete(index) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor="todo">할 일 목록</label>
        <input type="text" id="todo" ref={inputRef} />
        <button type="submit">추가</button>
      </form>
      <TodoList
        todos={todos}
        onRemoveItem={handleRemoveItem}
        onChangeItem={handleChangeItem}
        onToggleComplete={handleToggleComplete}
      />
    </>
  );
}

export default Todos;
