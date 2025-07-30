import { useState, useCallback } from "react";
import { useRef } from "react";
import { useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/ToDoList.css";

interface ToDoListProps {
  toDoItems: ListItemType[];
  setToDoItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  moveItem: (currentIndex: number, newIndex: number, list: string) => void;
  addToToDoList: (index: number, list: string) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({ toDoItems, setToDoItems, moveItem, addToToDoList }) => {
  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: { id: number, index: number, list: string }) => {
      addToToDoList(item.index, item.list);
    },
  }));

  return (
    <div className="todo-list-container" ref={(element) => { drop(element) }}>
      <h2>To-Do:</h2>
      {toDoItems.map((toDoItem, index) => (
        <ListItem key={`${toDoItem.id}`} listItem={toDoItem} index={index} moveItem={moveItem} dropTargetList="toDo" />
      ))}
    </div>
  );
};

export default ToDoList;