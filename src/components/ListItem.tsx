import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import "../styles/ListItem.css";

interface ListItemProps {
  item: ListItemType;
  index: number;
  moveItem: (currentIndex: number, newIndex: number) => void;
};

const ListItem: React.FC<ListItemProps> = ({ item, index, moveItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const odd = (index + 1) % 2 !== 0 ? "odd" : "even";
  // console.log("LOOKK!!!", item)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id: item.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "item",
    hover(draggedItem: ListItemType, monitor) {
      if (!ref.current) {
        return;
      };
      const dragIndex = draggedItem.index;
      const hoverIndex = index;
      console.log(dragIndex)
      console.log(hoverIndex)
      if (dragIndex === hoverIndex) {
        return;
      };
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },

  }),
  );

  return (
    <div className={`list-item list-item-${item.id} ${odd}`} ref={(element) => {
      drag(element);
      ref.current = element;
    }}
    >
      {item.content}
    </div>
  );
};

export default ListItem;