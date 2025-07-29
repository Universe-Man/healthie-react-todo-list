import { useState } from "react";
import { useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/DoneList.css";

interface DoneListProps {
  doneItems: ListItemType[];
  setDoneItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  moveItem: (currentIndex: number, newIndex: number) => void;
  addToDoneList: (index: number, list: string) => void;
};

const DoneList: React.FC<DoneListProps> = ({ doneItems, setDoneItems, moveItem, addToDoneList }) => {
  // const [listItems, setListItems] = useState<ListItemType[]>([
  //   { id: 1, content: "Turn On Computer", done: false },
  //   { id: 2, content: "Build React To Do List", done: false },
  //   { id: 3, content: "Buy Groceries", done: false },
  //   { id: 4, content: "Submit Healthie Take Home Assessment", done: false },
  // ])

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
      addToDoneList(item.index, item.list);
      // item.index = dropIndex;
    }
  }));

  return (
    <div className="done-list-container" ref={(element) => { drop(element) }}>
      <h2>Done List:</h2>
      {doneItems.map((doneItem, index) => (
        <ListItem key={doneItem.id} listItem={doneItem} index={index} moveItem={moveItem} />
      ))}
    </div>
  );



};

export default DoneList;