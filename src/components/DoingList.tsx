import { useState } from "react";
import { useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/DoingList.css";


interface DoingListProps {
  doingItems: ListItemType[];
  setDoingItems: React.Dispatch<React.SetStateAction<ListItemType[]>>;
  moveItem: (currentIndex: number, newIndex: number) => void;
  addToDoingList: (index: number, list: string) => void;
};

const DoingList: React.FC<DoingListProps> = ({ doingItems, setDoingItems, moveItem, addToDoingList }) => {
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
      // console.log("-----IMPORTANT-----")
      // console.log(item)
      // console.log()
      // console.log()


      // moveItem(dragIndex, dropIndex);
      addToDoingList(item.index, item.list);
      // item.index = dropIndex;
    }
  }));

  return (
    <div className="doing-list-container" ref={(element) => { drop(element) }}>
      <h2>Doing List:</h2>
      {doingItems.map((doingItem, index) => (
        <ListItem key={`doing-${doingItem.id}-${index}`} listItem={doingItem} index={index} moveItem={moveItem} />
      ))}
    </div>
  );



};

export default DoingList;