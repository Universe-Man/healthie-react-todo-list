export type ListType = "toDo" | "doing" | "done";

export interface ListItemType {
  id: number;
  content: string;
  done: boolean;
  list: ListType;
};