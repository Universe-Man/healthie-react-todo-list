import { useState } from "react";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/ToDoList.css";

interface ToDoListProps {
  toDoItems: ListItemType[];
}

const ToDoList: React.FC<ToDoListProps> = ({ toDoItems }) => {
  // const [listItems, setListItems] = useState<ListItemType[]>([
  //   { id: 1, content: "Turn On Computer", done: false },
  //   { id: 2, content: "Build React To Do List", done: false },
  //   { id: 3, content: "Buy Groceries", done: false },
  //   { id: 4, content: "Submit Healthie Take Home Assessment", done: false },
  // ])

  return (
    <div className="todo-list-container">
      <h2>To Do List:</h2>
      {toDoItems.map((toDoItem, index) => (
        <ListItem key={toDoItem.id} item={toDoItem} index={index} />
      ))}
    </div>
  );



};

export default ToDoList;