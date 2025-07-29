import type { ListItemType } from "../types";

interface ListItemProps {
  item: ListItemType;
  index: number;
};

const ListItem: React.FC<ListItemProps> = ({ item, index }) => {

  return (
    <div>
      {item.content}
    </div>
  );
};

export default ListItem;