import styles from './ShowTodo.module.css';
import TodoItem from './TodoItem';
import useInput from '../hooks/useInput';

function ShowTodo( { todos, onEditTodo, onCompleteTodo, onDeleteTodo } ) {

    const [search, onChangeSearch] = useInput(''); // 사용자 정의 Hook 사용

    const filteredTodos = () => {
        if (search === '') return todos;
        return todos.filter(todo =>
        todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const searchedTodos = filteredTodos();

    return (
        <div className={styles.frame}>
            <input 
                placeholder='할 일을 검색해보세요'
                onChange={onChangeSearch}
                value={search}
            />
            <div className={styles.todoList}>
                {searchedTodos.map((todo) => (
                    <TodoItem 
                        key={todo.id} 
                        id={todo.id}
                        name={todo.content} 
                        date={new Date(todo.date).toLocaleDateString()}
                        onEditTodo={onEditTodo}
                        onCompleteTodo={onCompleteTodo}
                        complete={todo.complete}
                        onDeleteTodo={onDeleteTodo}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShowTodo;
