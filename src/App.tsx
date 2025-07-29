import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import "./App.css";
import AddItemForm from "./components/AddItemForm";
import ToDoList from "./components/ToDoList";
import DoingList from "./components/DoingList";
import DoneList from "./components/DoneList";

function App() {
  const [itemId, setItemId] = useState<number>(5); // because we are pre-loading 4 items, but this would normally be 1
  const [toDoItems, setToDoItems] = useState<ListItemType[]>([
    { id: 1, content: "Turn On Computer", done: false },
    { id: 2, content: "Build React To Do List", done: false },
    { id: 3, content: "Buy Groceries", done: false },
    { id: 4, content: "Submit Healthie Take Home Assessment", done: false },
  ]);

  const addNewItem = (itemContent) => {
    setToDoItems([...toDoItems, {
      id: itemId, content: itemContent, done: false
    }]);
    setItemId(itemId + 1);
  };

  return (
    <div className="container">
      <h1>Healthie Assessment To-Do List:</h1>
      <AddItemForm addNewItem={addNewItem} />
      <div className="lists-container">
        <ToDoList toDoItems={toDoItems} />
        <DoingList />
        <DoneList />
      </div>
    </div>
  );
};

export default App;
