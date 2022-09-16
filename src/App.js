import "./App.css";
import AddTodo from "./components/AddTodo.js";
import ListItem from "./components/ListItem.js";

function App() {
  return (
    <div className="app">
      <div className="app_card">
        <h1>Todo List</h1>
        <AddTodo />
        <ListItem />
        <p>
          <span>You have 4 pending task </span>
          <button className="clear_btn">Clear All</button>
        </p>
      </div>
    </div>
  );
}

export default App;
