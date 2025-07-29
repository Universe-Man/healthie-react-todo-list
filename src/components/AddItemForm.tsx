import { useState } from "react";
import "../styles/AddItemForm.css";

interface AddItemProps {
  addNewItem: (newItemContent) => void;
}

const AddItemForm: React.FC<AddItemProps> = ({ addNewItem }) => {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  const [newItemContent, setNewItemContent] = useState<string>("");

  const openAddItemForm = () => {
    setFormOpen(true);
  };

  const closeAndClearAddItemForm = () => {
    setFormOpen(false);
    setNewItemContent("");
  };

  const handleNewItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItemContent(event.target.value);
  };

  const handleAddNewItem = () => {
    if (newItemContent === "") {
      return;
    };
    addNewItem(newItemContent);
    closeAndClearAddItemForm();
  };

  return (
    <>
      {formOpen ? (
        <div>
          <form onSubmit={handleAddNewItem}>
            <input
              type="text"
              id="new-item"
              name="new-item"
              value={newItemContent}
              onChange={handleNewItemChange}
              autoFocus
            />
          </form>
          <button className="add-and-cancel-buttons" onClick={handleAddNewItem}>Add Item</button>
          <button className="add-and-cancel-buttons" onClick={closeAndClearAddItemForm}>Cancel</button>
        </div>
      ) : (
          <button className="add-new-item-button" onClick={openAddItemForm}>Add New To-Do Item</button>
        )}
    </>
  );
};

export default AddItemForm;