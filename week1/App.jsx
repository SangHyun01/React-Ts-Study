import React, { useState } from 'react';
import TodoList from './TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]); // todo 항목 저장 배열, useState([])로 초기화 -> todo가 여기에 추가됨 
  const [input, setInput] = useState(''); // 사용자 입력 텍스트 관리, useState('')로 초기화 -> 사용자가 입력한 텍스트를 저장하는 상태 변수
  // 핸들러 함수 
  const handleAdd = () => { // Add 버튼 클릭 시 실행 
    if (input.trim() === '') return; // 입력 필드에 아무것도 없으면 아무 일도 안 함 
    setTodos([...todos, input]); // 값이 있으면 todos 배열에 새 항목 추가
    setInput(''); // 항목 추가 후, 입력 필드 초기화 
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        value={input} // input 상태와 연결 
        onChange={(e) => setInput(e.target.value)} // 사용자가 입력할 때마다 상태 업데이트
        // 사용자가 입력할 때마다 {} 함수 실행됨
        // e: event 객체, 브라우저가 자동으로 전달하는 객체 -> 이벤트 정보 담고 있음 
        // e.target: 이벤트가 발생한 DOM 요소 가리킴 
        // input 필드에 입력된 현재 텍스트 값을 반환
        // setInput(e.target.value)가 호출되어 input 상태를 업데이트
        placeholder="할 일을 입력하세요" // placeholder 속성으로 입력 필드에 안내 문구 추가
      />
      <button onClick={handleAdd}>add</button> // Add 버튼 클릭 시 handleAdd 함수 실행
      <TodoList todos={todos} /> // TodoList 컴포넌트에 todos 배열 전달
    </div>
  );
}

export default App;