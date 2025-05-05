import styles from './App.module.css'; 

import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ShowTodo from './components/ShowTodo';
import { useState, useEffect, useRef } from 'react';

const mockdata = [
  {id: 0, complete: false, content: 'react 공부하기', date: new Date().getTime()},
  {id: 1, complete: false, content: 'typescript 공부하기', date: new Date().getTime()},
  {id: 2, complete: false, content: '산책하기', date: new Date().getTime()},
];

function App() {
  const [todos, setTodos] = useState(mockdata);
  const idRef = useRef(3);

  useEffect(() => { // 로그 출력용
    console.log('todos:', todos);
  }, [todos]);
  

  const onAddTodo = (content) => {
    const newTodo = {
      id: idRef.current++,
      complete: false,
      content: content,
      date: new Date().getTime(),
    }
    setTodos([...todos, newTodo]);
  }
  const onDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }
  const onCompleteTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, complete: !todo.complete};
      }
      return todo;
    });
    setTodos(newTodos);
  }

  const onEditTodo = (id, newContent) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, content: newContent};
      }
      return todo;
    });
    setTodos(newTodos);
  }


  return (
    <div className={styles.app}>
      <Header />
      <AddTodo onAddTodo = { onAddTodo }/>
      <ShowTodo todos = { todos } onEditTodo = { onEditTodo } onCompleteTodo = { onCompleteTodo } onDeleteTodo = { onDeleteTodo }/>
    </div>
  )
}

export default App;
