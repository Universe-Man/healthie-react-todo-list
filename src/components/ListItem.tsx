import { useDrag, useDrop } from "react-dnd";
import type { ListType, ListItemType } from "../types";
import "../styles/ListItem.css";

interface ListItemProps {
  listItem: ListItemType;
  index: number;
  moveItem: (currentIndex: number, newIndex: number, list: ListType) => void;
  dropTargetList: ListType;
};

const ListItem: React.FC<ListItemProps> = ({ listItem, index, moveItem, dropTargetList }) => {
  const odd = (index + 1) % 2 !== 0 ? "odd" : "even";
  const [, drag] = useDrag(() => ({
    type: "item",
    item: { id: listItem.id, index, list: listItem.list },
  }));

  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: { id: number, index: number, list: ListType }) => {
      if (item.list !== dropTargetList) {
        return;
      };
      const dragIndex = item.index;
      const dropIndex = index;
      if (dragIndex === dropIndex) {
        return;
      };
      // NOTE: commented out moveItem below before adding new items to the toDoList via addNewItem allows them to persist when uncommented it after, but if moveItem isn't commented out when running addNewItem, the new item doesn't stay in state after moveItem runs. This was particulary confusing because this useDrop function and the moveItem function do not run when addNewItem runs.
      moveItem(dragIndex, dropIndex, item.list);
    },
  }));

  return (
    <div className={`list-item list-item-${listItem.id} ${odd}`} ref={(element) => { drag(drop(element)) }}>
      {listItem.content}
    </div>
  );
};

export default ListItem;