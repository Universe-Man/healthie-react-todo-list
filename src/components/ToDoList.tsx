import { useState, useCallback } from "react";
import { useRef } from "react";
import { useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/ToDoList.css";

interface ToDoListProps {
  toDoItems: ListItemType[];
  setToDoItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  moveItem: (currentIndex: number, newIndex: number) => void;
  addToToDoList: (index: number, list: string) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({ toDoItems, setToDoItems, moveItem, addToToDoList }) => {
  // const [listItems, setListItems] = useState<ListItemType[]>([
  //   { id: 1, content: "Turn On Computer", done: false },
  //   { id: 2, content: "Build React To Do List", done: false },
  //   { id: 3, content: "Buy Groceries", done: false },
  //   { id: 4, content: "Submit Healthie Take Home Assessment", done: false },
  // ])
  // const ref = useRef<HTMLDivElement>(null);

  // const moveItem = useCallback(
  //   (dragIndex: number, hoverIndex: number) => {
  //     const draggedItem = toDoItems[dragIndex];
  //     const newItems = [...toDoItems];
  //     newItems.splice(dragIndex, 1);
  //     newItems.splice(hoverIndex, 0, draggedItem);
  //     // console.log("HEELOO")
  //     setToDoItems(newItems);
  //   },
  //   [toDoItems],
  // );

  // const renderListItem = useCallback(
  //   (item: ListItemType, index: number) => {
  //     return (
  //       <ListItem
  //         key={item.id}
  //         listItem={item}
  //         index={index}
  //         moveItem={moveItem}
  //       />
  //     );
  //   },
  //   [moveItem]
  // );

  // const [, drop] = useDrop(() => ({
  //   accept: "item",
  //   hover(item: ListItemType, monitor) {
  //     if (!drop) {
  //       return;
  //     }
  //     const dragIndex = item.index;
  //     const hoverIndex = toDoItems.findIndex(toDoItem => toDoItem.id === item.id);
  //     // console.log(monitor)
  //     // console.log(hoverIndex)
  //     if (dragIndex === hoverIndex) {
  //       return;
  //     };
  //     moveItem(dragIndex, hoverIndex);
  //     item.index = hoverIndex;
  //   },
  //   // collect: (monitor) => ({

  //   // })
  // }));

  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: { id: number, index: number, list: string }) => {
      // console.log("dropped item:", item);
      // console.log(toDoItem)
      // console.log(index)


      // const dragIndex = item.index;
      // const dropIndex = index;
      // if (dragIndex === dropIndex) {
      //   return;
      // };
      // console.log(dragIndex)
      // console.log(dropIndex)
      // console.log("-----")

      // moveItem(dragIndex, dropIndex);
      addToToDoList(item.index, item.list);
      // item.index = dropIndex;
    }
  }));

  return (
    <div className="todo-list-container" ref={(element) => { drop(element) }}>
      <h2>To Do List:</h2>
      {/* {console.log(toDoItems)} */}
      {/* {toDoItems.map((item, index) => renderListItem(item, index))} */}
      {toDoItems.map((toDoItem, index) => (
        <ListItem key={toDoItem.id} listItem={toDoItem} index={index} moveItem={moveItem} />
      ))}
    </div>
  );



};

export default ToDoList;