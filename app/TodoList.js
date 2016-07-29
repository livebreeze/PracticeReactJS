const {       
    TodoItem
} = window.App;

class TodoList extends React.Component {
	render() {
        const { todos, onDeleteTodo, onToggleTodo } = this.props;
        const todoElements = todos.map((todo) => {            
            return <li key={todo.id}>            
                <TodoItem
                    title={todo.title}
                    completed={todo.completed}
                    onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
                    onToggle={() => onToggleTodo && onToggleTodo(todo.id, completed)}
                />
            </li>
        });
        return <ul>{todoElements}</ul>;
	}
}

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onDeleteTodo: React.PropTypes.func
};

window.App.TodoList = TodoList;