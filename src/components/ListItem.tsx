// import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { ListItemType } from "../types";
import "../styles/ListItem.css";

interface ListItemProps {
  toDoItem: ListItemType;
  index: number;
  moveItem: (currentIndex: number, newIndex: number) => void;
};

const ListItem: React.FC<ListItemProps> = ({ toDoItem, index, moveItem }) => {
  // const ref = useRef<HTMLDivElement>(null);
  const odd = (index + 1) % 2 !== 0 ? "odd" : "even";
  // console.log("LOOKK!!!", item)
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id: toDoItem.id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "item",
    drop: (item: { id: number, index: number }) => {
      // console.log("dropped item:", item);
      // console.log(toDoItem)
      // console.log(index)


      const dragIndex = item.index;
      const dropIndex = index;
      if (dragIndex === dropIndex) {
        return;
      };

      moveItem(dragIndex, dropIndex);
      item.index = dropIndex;
    }
  }))



  // const [, drop] = useDrop(
  //   () => ({
  //     accept: ItemTypes.KNIGHT,
  //     drop: () => moveKnight(x, y)
  //   }),
  //   [x, y]
  // )


  // const [{ isOver }, drop] = useDrop(
  //   () => ({
  //     accept: ItemTypes.KNIGHT,
  //     drop: () => moveKnight(x, y),
  //     collect: (monitor) => ({
  //       isOver: !!monitor.isOver()
  //     })
  //   }),
  //   [x, y]
  // )

  // const [, drop] = useDrop(() => ({
  //   accept: "item",
  //   hover(draggedItem: toDoItemType, monitor) {
  //     if (!ref.current) {
  //       return;
  //     };
  //     const dragIndex = draggedItem.index;
  //     const hoverIndex = index;
  //     console.log(dragIndex)
  //     console.log(hoverIndex)
  //     if (dragIndex === hoverIndex) {
  //       return;
  //     };
  //     moveItem(dragIndex, hoverIndex);
  //     item.index = hoverIndex;
  //   },

  // }),
  // );

  return (
    <div className={`list-item list-item-${toDoItem.id} ${odd}`} ref={(element) => { drag(drop(element)) }}>
      {toDoItem.content}
    </div>
  );
};

export default ListItem;