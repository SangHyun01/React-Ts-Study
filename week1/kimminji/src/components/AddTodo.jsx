import styles from './AddTodo.module.css';
// import { useState } from 'react';
import useInput from '../hooks/useInput';

function AddTodo({ onAddTodo }) {

    const [content, onChangeContent, resetContent] = useInput(''); // 사용자 정의 Hook 사용

    const onSubmit = () => {
      if (content === '') {
        alert('할 일을 입력해주세요');
        return;
      }
      onAddTodo(content);
      resetContent(); 
    };
  
    const onKeyDown = (e) => {
      if (e.keyCode === 13) {
        onSubmit();
      }
    };

    return (
        <div className={styles.frame}>
        <input 
            value={content} 
            onChange={onChangeContent} 
            placeholder='새로운 할 일 추가하기 . . '
            onKeyDown={onKeyDown}
        />
        <button 
            onClick = {onSubmit} 
            className={styles.button}
        >
            추가
        </button>
        </div>
    );
}

export default AddTodo;
