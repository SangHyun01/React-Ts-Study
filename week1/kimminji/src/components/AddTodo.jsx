import styles from './AddTodo.module.css';
import { useState } from 'react';

function AddTodo({ onAddTodo }) {

    const [content, setContent] = useState('');

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === '') {
            alert('할 일을 입력해주세요');
            return;
        }
        onAddTodo(content);
        setContent('');
    }

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

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
