export default function TodoList({ todos, onDelete, onUpdate }) {
    return <div className="todo_list">
        {
            todos.map(todo => {
                return <div key={todo.id} style={{ display: 'flex', gap: '5px', flexDirection: 'row' }}>
                    <li>{todo.todo}</li>
                    <button type="button" onClick={() => onDelete(todo.id)}>Delete</button>
                    <button type="button" onClick={() => {
                        let data = prompt("Update todo")
                        onUpdate(todo.id, data);
                    }}>Update</button>
                </div>
            }
            )}
    </div>
}