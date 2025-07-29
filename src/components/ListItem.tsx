import type { ListItemType } from "../types";
import "../styles/ListItem.css";

interface ListItemProps {
  item: ListItemType;
  index: number;
};

const ListItem: React.FC<ListItemProps> = ({ item, index }) => {
  const odd = (index + 1) % 2 !== 0 ? "odd" : "even";

  return (
    <div className={`list-item list-item-${item.id} ${odd}`}>
      {item.content}
    </div>
  );
};

export default ListItem;