# README

Hello Healthie Team!!

I'm Ian Pollack and thank you for reviewing my JS/React/CSS assessment!

I utilized the internet and Google to reference docs and syntax, but if you have any questions about my approach I'd love to answer them.

## To run this application:
  - Run "npm install" to ensure all dependencies are installed.
  - Run "npm run dev" to start the development application (http://localhost:5173/).

## Files you should care about:

  - Main and App:
    - /src/main.tsx
    - /src/App.tsx (linter is complaining about "react-confetti" import but it should be working fine)

  - Components:
    - /src/components/AddItemForm.tsx
    - /src/components/DoingList.tsx
    - /src/components/DoneList.tsx
    - /src/components/ListItem.tsx
    - /src/components/ToDoList.tsx

  - CSS:
    - /src/styles/AddItemForm.css
    - /src/styles/DoingList.css
    - /src/styles/DoneList.css
    - /src/styles/ListItem.css
    - /src/styles/ToDoList.css
    - /src/App.css

  - Types:
    - /src/types.ts

## What It Does:
  - Render three lists (To-Do, Doing, and Done) with pre-loaded data from useState.
  - Clicking "Add New To-Do Item" renders a text form and submitting it adds a new item to the To-Do list.
  - Dragging an item from one list and dropping it on another item in the same list should reorder the list.
  - Dragging an item from one list and dropping it on another list should remove the item from the first list and add it to the second list.
  - Dragging an item to the Done list should add it to that list and confetti should fall from the top of the screen for a few seconds.

## Explanation:
  - Split pieces of the web app into separate Components (each "List" and the "Add Item Form").
  - Established state for each list with useState in the App.tsx file.
  - Installed "react-dnd" to add drag-and-drop functionality.
  - Installed "react-confetti" to add confetti when item added to "Done" list.
  - Added styling to each Component and the App.tsx file.

The biggest challenge in building this was managing state properly to ensure immutability and avoid stale closures. Using functional state updates with useCallback, and adding dependency arrays to useDrag and useDrop, resolved these issues.

Please let me know if you have any questions.

Thank you for your consideration and I'm looking forward to your feedback!

Ian Pollack