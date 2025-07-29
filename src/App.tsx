import { useState, useCallback } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti"; // my linter keeps telling me it cannot find the module "react-confetti", but the import is working as expected on my machine, so hopefully there are no issues on other machines
import type { ListItemType } from "./types";
import "./App.css";
import AddItemForm from "./components/AddItemForm";
import ToDoList from "./components/ToDoList";
import DoingList from "./components/DoingList";
import DoneList from "./components/DoneList";

function App() {
  const { width, height } = useWindowSize();
  const [confettiPieces, setConfettiPieces] = useState<number>(0);
  const [itemId, setItemId] = useState<number>(5); // because we are pre-loading 4 items, but this would normally be 1
  const [toDoItems, setToDoItems] = useState<ListItemType[]>([
    { id: 1, content: "Turn On Computer", done: false, list: "toDo" },
    { id: 2, content: "Build React To Do List", done: false, list: "toDo" },
    { id: 3, content: "Buy Groceries", done: false, list: "toDo" },
    { id: 4, content: "Submit Healthie Take Home Assessment", done: false, list: "toDo" },
  ]);
  const [doingItems, setDoingItems] = useState<ListItemType[]>([
    { id: 1, content: "doing", done: false, list: "doing" },
    { id: 2, content: "more doing", done: false, list: "doing" },
  ]);
  const [doneItems, setDoneItems] = useState<ListItemType[]>([{ id: 1, content: "done", done: false, list: "done" },
  ]);

  const moveItem = useCallback(
    (dragIndex: number, dropIndex: number) => {
      console.log("I'm running")
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
    // console.log("adding new item")
    const newToDoItems: ListItemType[] = [...toDoItems, { id: itemId, content: itemContent, done: false, list: "toDo" }]
    setToDoItems(newToDoItems);
    setItemId(itemId + 1);
    console.log(toDoItems, itemId)
  };

  const addToToDoList = (index, list) => {
    console.log("To Do List")
    let oldList = [];
    let oldListSetter;
    if (list === "toDo") {
      return;
    } else if (list === "doing") {
      oldList = doingItems;
      oldListSetter = setDoingItems;
    } else if (list === "done") {
      oldList = doneItems;
      oldListSetter = setDoneItems;
    };
    // remove from other list and add to do list
    const newItem = oldList[index];
    newItem.list = "toDo";
    const oldItems = [...oldList];
    const newItems = [...toDoItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    oldListSetter(oldItems);
    setToDoItems(newItems);
    // console.log(newList, "sdfsdsd")
    // console.log(list)
    // console.log("-----")

  };

  const addToDoingList = (index, list) => {
    console.log("Doing List", toDoItems, itemId)
    let oldList = [];
    let oldListSetter;
    if (list === "doing") {
      return;
    } else if (list === "toDo") {
      oldList = toDoItems;
      oldListSetter = setToDoItems;
    } else if (list === "done") {
      oldList = doneItems;
      oldListSetter = setDoneItems;
    };
    // console.log("asdfasdfasdf", doingItems)
    // remove from other list and add to do list
    console.log("oldList", oldList)
    console.log("index", index)

    const newItem = oldList[index];
    newItem.list = "doing";
    const oldItems = [...oldList];
    const newItems = [...doingItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    console.log("newItem:", newItem)
    console.log("oldItems:", oldItems)
    console.log("newItems:", newItems)
    oldListSetter(oldItems);
    setDoingItems(newItems);
    // console.log(newList, "sdfsdsd")
    // console.log(list)
    // console.log("-----")


    // remove from other list and add doing list
    // console.log(index)
    // console.log(list)
    // console.log("-----")
  };

  const addToDoneList = (index, list) => {
    console.log("Done List")
    let oldList = [];
    let oldListSetter;
    if (list === "done") {
      return;
    } else if (list === "toDo") {
      oldList = toDoItems;
      oldListSetter = setToDoItems;
    } else if (list === "doing") {
      oldList = doingItems;
      oldListSetter = setDoneItems;
    };
    // remove from other list and add to do list
    const newItem = oldList[index];
    newItem.list = "done";
    const oldItems = [...oldList];
    const newItems = [...toDoItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    oldListSetter(oldItems);
    setDoneItems(newItems);
    // console.log(newList, "sdfsdsd")
    // console.log(list)
    // console.log("-----")


    // remove from other list and add done list
    console.log(index)
    console.log(list)
    console.log("-----")
    setConfettiPieces(300);
    setTimeout(() => setConfettiPieces(0), 6000);
  };

  return (
    <div className="container">
      <Confetti
        style={{ top: "-50px" }}
        width={width}
        height={height}
        numberOfPieces={confettiPieces}
      />
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
