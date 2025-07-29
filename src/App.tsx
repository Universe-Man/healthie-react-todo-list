import { useState, useCallback } from "react"
import "./App.css";
import AddItemForm from "./components/AddItemForm";
import ToDoList from "./components/ToDoList";
import DoingList from "./components/DoingList";
import DoneList from "./components/DoneList";

function App() {
  const [itemId, setItemId] = useState<number>(5); // because we are pre-loading 4 items, but this would normally be 1
  const [toDoItems, setToDoItems] = useState<ListItemType[]>([
    { id: 1, content: "Turn On Computer", done: false, list: "toDo" },
    { id: 2, content: "Build React To Do List", done: false, list: "toDo" },
    { id: 3, content: "Buy Groceries", done: false, list: "toDo" },
    { id: 4, content: "Submit Healthie Take Home Assessment", done: false, list: "toDo" },
  ]);
  const [doingItems, setDoingItems] = useState<ListItemType[]>([{ id: 1, content: "doing", done: false, list: "toDo" },
  ]);
  const [doneItems, setDoneItems] = useState<ListItemType[]>([{ id: 1, content: "done", done: false, list: "toDo" },
  ]);

  const moveItem = useCallback(
    (dragIndex: number, dropIndex: number) => {
      const draggedItem = toDoItems[dragIndex];
      const newItems = [...toDoItems];
      newItems.splice(dragIndex, 1);
      newItems.splice(dropIndex, 0, draggedItem);
      // console.log("HEELOO")
      setToDoItems(newItems);
    },
    [toDoItems],
  );

  const addNewItem = (itemContent) => {
    setToDoItems([...toDoItems, {
      id: itemId, content: itemContent, done: false
    }]);
    setItemId(itemId + 1);
    console.log(toDoItems)
  };

  const addToToDoList = (index, list) => {
    console.log("To Do List")
    let oldList = [];
    if (list === "toDo") {
      return;
    } else if (list === "doing") {
      oldList = doingItems;
    } else if (list === "done") {
      oldList = doneItems;
    };
    // remove from other list and add to do list
    const newItem = oldList[index];
    const oldItems = [...oldList];
    const newItems = [...toDoItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    setToDoItems(newItems);
    // console.log(newList, "sdfsdsd")
    // console.log(list)
    // console.log("-----")

  };

  const addToDoingList = (index, list) => {
    console.log("Doing List")
    let oldList = [];
    if (list === "doing") {
      return;
    } else if (list === "toDo") {
      oldList = toDoItems;
    } else if (list === "done") {
      oldList = doneItems;
    };
    // remove from other list and add to do list
    const newItem = oldList[index];
    const oldItems = [...oldList];
    const newItems = [...doingItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    setDoingItems(newItems);
    // console.log(newList, "sdfsdsd")
    // console.log(list)
    // console.log("-----")


    // remove from other list and add doing list
    console.log(index)
    console.log(list)
    console.log("-----")
  };

  const addToDoneList = (index, list) => {
    console.log("Done List")
    let oldList = [];
    if (list === "done") {
      return;
    } else if (list === "toDo") {
      oldList = toDoItems;
    } else if (list === "doing") {
      oldList = doingItems;
    };
    // remove from other list and add to do list
    const newItem = oldList[index];
    const oldItems = [...oldList];
    const newItems = [...toDoItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    setToDoItems(newItems);
    // console.log(newList, "sdfsdsd")
    // console.log(list)
    // console.log("-----")


    // remove from other list and add done list
    console.log(index)
    console.log(list)
    console.log("-----")
  };

  return (
    <div className="container">
      <h1>Healthie Assessment To-Do List:</h1>
      <div className="new-item-form-container">
        <AddItemForm addNewItem={addNewItem} />
      </div>
      <div className="lists-container">
        <ToDoList toDoItems={toDoItems} setToDoItems={setToDoItems} moveItem={moveItem} addToToDoList={addToToDoList} />
        <DoingList doingItems={doingItems} setDoingItems={setDoingItems} moveItem={moveItem} addToDoingList={addToDoingList} />
        <DoneList doneItems={doneItems} setDoneItems={setDoneItems} moveItem={moveItem} addToDoneList={addToDoneList} />
      </div>
    </div>
  );
};

export default App;
