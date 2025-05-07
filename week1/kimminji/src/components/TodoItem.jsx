import styles from './TodoItem.module.css';
import { useState } from 'react';

function TodoItem({id, name, date, onEditTodo, onCompleteTodo, complete, onDeleteTodo }) {
    const [isChecked, setIsChecked] = useState(complete);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onCompleteTodo(id);
    }
    const handleDeleteClick = () => {
        onDeleteTodo(id);
    }

    const [newContent, setNewContent] = useState(name);

    return (
        <div className={styles.frame}>
            <input 
                type='checkbox' 
                className={styles.checkbox}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <input 
                className={styles.content} 
                value={newContent} 
                onChange={(e) => setNewContent(e.target.value)} 
            />
            <div className={styles.date}>{date}</div>
            <button 
                className={styles.editButton}
                onClick={() => {
                    if (newContent) {
                        onEditTodo(id, newContent);
                    }
                }
                }
            >
                수정
            </button>
            <button 
                className={styles.deleteButton}
                onClick={handleDeleteClick}
            >
                삭제
            </button>
        </div>
    );
}

export default TodoItem;
