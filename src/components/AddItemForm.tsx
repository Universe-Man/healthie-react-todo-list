import { useState } from "react";

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
    addNewItem(newItemContent);
    closeAndClearAddItemForm();
  };


  return (
    <>
      {formOpen ? (
        <div>
          <form>
            <input
              type="text"
              id="new-item"
              name="new-item"
              value={newItemContent}
              onChange={handleNewItemChange}
            />
          </form>
          <button onClick={handleAddNewItem}>Add Item</button>
          <button onClick={closeAndClearAddItemForm}>Cancel</button>
        </div>
      ) : (
          <button onClick={openAddItemForm}>Add New To-Do Item</button>
        )}
    </>
  );
};

export default AddItemForm;