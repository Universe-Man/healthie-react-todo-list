import { useState } from "react";
import { useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/DoneList.css";

interface DoneListProps {
  doneItems: ListItemType[];
  setDoneItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  moveItem: (currentIndex: number, newIndex: number, list: string) => void;
  addToDoneList: (index: number, list: string) => void;
};

const DoneList: React.FC<DoneListProps> = ({ doneItems, setDoneItems, moveItem, addToDoneList }) => {
  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: { id: number, index: number, list: string }) => {
      addToDoneList(item.index, item.list);
    },
  }));

  return (
    <div className="done-list-container" ref={(element) => { drop(element) }}>
      <h2>Done:</h2>
      {doneItems.map((doneItem, index) => (
        <ListItem key={`${doneItem.id}`} listItem={doneItem} index={index} moveItem={moveItem} dropTargetList="done" />
      ))}
    </div>
  );
};

export default DoneList;