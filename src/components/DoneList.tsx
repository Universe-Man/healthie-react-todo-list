import { useState } from "react";
import { useDrop } from "react-dnd";
import type { ListType, ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/DoneList.css";

interface DoneListProps {
  doneItems: ListItemType[];
  setDoneItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  moveItem: (currentIndex: number, newIndex: number, list: ListType) => void;
  addToDoneList: (index: number, list: ListType) => void;
};

const DoneList: React.FC<DoneListProps> = ({ doneItems, setDoneItems, moveItem, addToDoneList }) => {
  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: { id: number, index: number, list: ListType }) => {
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