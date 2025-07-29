import { useState } from "react";
import type { ListItemType } from "../types";
import ListItem from "./ListItem";
import "../styles/DoneList.css";



const DoneList: React.FC = () => {
  // const [listItems, setListItems] = useState<ListItemType[]>([
  //   { id: 1, content: "Turn On Computer", done: false },
  //   { id: 2, content: "Build React To Do List", done: false },
  //   { id: 3, content: "Buy Groceries", done: false },
  //   { id: 4, content: "Submit Healthie Take Home Assessment", done: false },
  // ])

  return (
    <div className="done-list-container">
      <h2>Done List:</h2>
      {/* {listItems.map((item, index) => (
        <ListItem key={item.id} item={item} index={index} />
      ))} */}
      hello this is the done list
    </div>
  );



};

export default DoneList;