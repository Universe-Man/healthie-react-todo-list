import { useState } from "react";
import { useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/DoingList.css";

interface DoingListProps {
  doingItems: ListItemType[];
  setDoingItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  moveItem: (currentIndex: number, newIndex: number, list: string) => void;
  addToDoingList: (index: number, list: string) => void;
};

const DoingList: React.FC<DoingListProps> = ({ doingItems, setDoingItems, moveItem, addToDoingList }) => {
  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: { id: number, index: number, list: string }) => {
      addToDoingList(item.index, item.list);
    },
  }));

  return (
    <div className="doing-list-container" ref={(element) => { drop(element) }}>
      <h2>Doing:</h2>
      {doingItems.map((doingItem, index) => (
        <ListItem key={`${doingItem.id}`} listItem={doingItem} index={index} moveItem={moveItem} dropTargetList="doing" />
      ))}
    </div>
  );
};

export default DoingList;