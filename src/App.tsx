import { useState, useCallback, useEffect } from "react";
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
  const [itemId, setItemId] = useState<number>(8); // because we are pre-loading 7 items, but this would normally be 1
  const [toDoItems, setToDoItems] = useState<ListItemType[]>([
    { id: 1, content: "Turn On Computer", done: false, list: "toDo" },
    { id: 2, content: "Build React To Do List", done: false, list: "toDo" },
    { id: 3, content: "Buy Groceries", done: false, list: "toDo" },
    { id: 4, content: "Submit Healthie Take Home Assessment", done: false, list: "toDo" },
  ]);
  const [doingItems, setDoingItems] = useState<ListItemType[]>([
    { id: 5, content: "doing", done: false, list: "doing" },
    { id: 6, content: "more doing", done: false, list: "doing" },
  ]);
  const [doneItems, setDoneItems] = useState<ListItemType[]>([
    { id: 7, content: "done", done: false, list: "done" },
  ]);

  const moveItem = useCallback((dragIndex: number, dropIndex: number, list: string) => {
    let currentList = [];
    let currentListSetter;
    if (list === "toDo") {
      currentList = [...toDoItems];
      currentListSetter = setToDoItems;
    } else if (list === "doing") {
      currentList = [...doingItems];
      currentListSetter = setDoingItems;
    } else if (list === "done") {
      currentList = [...doneItems];
      currentListSetter = setDoneItems;
    };
    const draggedItem = currentList[dragIndex];
    const newItems = [...currentList];
    newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    currentListSetter(newItems);
  },
    [toDoItems, doingItems, doneItems],
  );

  // NOTE: left this version on moveItem in commented since I went back and forth between using useCallback and not.
  // const moveItem = (dragIndex: number, dropIndex: number, list: string) => {
  //   let currentList = [];
  //   let currentListSetter;
  //   if (list === "toDo") {
  //     currentList = [...toDoItems];
  //     currentListSetter = setToDoItems;
  //   } else if (list === "doing") {
  //     currentList = [...doingItems];
  //     currentListSetter = setDoingItems;
  //   } else if (list === "done") {
  //     currentList = [...doneItems];
  //     currentListSetter = setDoneItems;
  //   };
  //   const draggedItem = currentList[dragIndex];
  //   const newItems = [...currentList];
  //   newItems.splice(dragIndex, 1);
  //   newItems.splice(dropIndex, 0, draggedItem);
  //   currentListSetter(newItems);
  // };

  const addNewItem = (itemContent) => {
    setToDoItems(toDoItems => [...toDoItems, { id: itemId, content: itemContent, done: false, list: "toDo" }]);
    setItemId(prevId => prevId + 1);
  };

  const addToToDoList = (index, list) => {
    let oldList = [];
    let oldListSetter;
    if (list === "toDo") {
      return;
    } else if (list === "doing") {
      oldList = [...doingItems];
      oldListSetter = setDoingItems;
    } else if (list === "done") {
      oldList = [...doneItems];
      oldListSetter = setDoneItems;
    };
    const newItem = oldList[index];
    newItem.list = "toDo";
    const oldItems = [...oldList];
    const newItems = [...toDoItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    oldListSetter(oldItems);
    setToDoItems(newItems);
  };

  const addToDoingList = (index, list) => {
    let oldList = [];
    let oldListSetter;
    if (list === "doing") {
      return;
    } else if (list === "toDo") {
      oldList = [...toDoItems];
      oldListSetter = setToDoItems;
    } else if (list === "done") {
      oldList = [...doneItems];
      oldListSetter = setDoneItems;
    };
    const newItem = oldList[index];
    newItem.list = "doing";
    const oldItems = [...oldList];
    const newItems = [...doingItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    oldListSetter(oldItems);
    setDoingItems(newItems);
  };

  const addToDoneList = (index, list) => {
    let oldList = [];
    let oldListSetter;
    if (list === "done") {
      return;
    } else if (list === "toDo") {
      oldList = [...toDoItems];
      oldListSetter = setToDoItems;
    } else if (list === "doing") {
      oldList = [...doingItems];
      oldListSetter = setDoneItems;
    };
    const newItem = oldList[index];
    newItem.list = "done";
    const oldItems = [...oldList];
    const newItems = [...doneItems];
    oldItems.splice(index, 1);
    newItems.push(newItem);
    oldListSetter(oldItems);
    setDoneItems(newItems);
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
