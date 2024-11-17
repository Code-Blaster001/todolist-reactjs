import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import Todo from './components/Todo';

function App() {
  return (
    <div className="todo-app">
      {/* <h1>Todo App</h1>
      <TodoForm/> */}
      <TodoList/>
      {/* //the need to import todo.js isn't there as it's directly coming with todoList */}
    </div>
  );
}

export default App;
