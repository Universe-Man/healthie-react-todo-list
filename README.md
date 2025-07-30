# README

Hello Healthie Team!!

I'm Ian Pollack and thank you for reviewing my JS/React/CSS assessment!

I setup this project using Vite "npm create vite@latest healthie-react-todo-list -- --template react-ts" and built my components for rendering in App.tsx.

It is also worth noting that I did use Google, StackOverFlow, the React docs, the Vite docs, and the docs to the "react-dnd" and "react-confetti" libraries I used, to reconfirm these commands, code setup, and code structure, as well as helping with debugging the issues I ran into, but implemented this code myself.

To run this application:
- Run "npm install" to ensure all dependencies are installed.
- Run "npm run dev" to start the development application (http://localhost:5173/).

Files you should care about (the rest is boilerplate from Vite + React):

- Main and App:
  - /src/main.tsx
  - /src/App.tsx (linter is complaining about "react-confetti" import but it should be working fine)

- Components:
  - /src/components/AddItemForm.tsx
  - /src/components/DoingList.tsx
  - /src/components/DoneList.tsx
  - /src/components/ListItem.tsx
  - /src/components/ToDoList.tsx
  - /src/App.tsx (linter is complaining about "react-confetti" import but it should be working fine)

- CSS:
  - /src/styles/AddItemForm.css
  - /src/styles/DoingList.css
  - /src/styles/DoneList.css
  - /src/styles/ListItem.css
  - /src/styles/ToDoList.css
  - /src/App.css

- Types:
  - /src/types.ts

What It Does (Or Should Do):
  - Render three lists (To-Do, Doing, and Done) with pre-loaded data from useState.
  - Clicking "Add New To-Do Item renders a text form and submitting it adds a new item to the To-Do list.
  - Dragging an item from one list and dropping it on another item in the same list should reorder the list. (There is some unusual behavior here that I will elaborate on below.)
  - Dragging an item from one list and dropping it on another list should remove the item from the first list and add it to the second list. (There is some unusual behavior here that I will elaborate on below.)
  - Dragging an item to the Done list should add it to that list and confetti should fall from the top of the screen for a few seconds.

Disclaimer: There are bugs in this application, which I'm not happy about, being a bit of a perfectionist, but I will elaborate on what they are, and what I believe caused them.

I'm fairly certain that almost all of these bugs are directly connected to not being able to grab the most recent state object in my functions (it would always be the default object the application loaded with) even though I was able to confirm that state was updated via a useEffect call. I spent quite a bit of time trying to resolve them and here is what I've found:

  - Most items can only be moved to another list once, moving it again will either do nothing, delete or change data elsewhere, or crash the application.
  - Sorting within a list should mostly work, but it is possible it will break (order weirdly, delete data, etc.) if you try to break it.
  - Sorting a list after adding a new item will remove the new item. (likely a state issue)
  - Moving a new item to another list will do nothing, and trying to sort the new item within its list will break the application. (likely a out of index issue due to state being out of date)
  - Sometimes the list data resets when changes are made.
  - Moving items to a new list will sometimes delete or duplicate other list items. (likely a state and/or index issue)

An interesting find:
  - Preventing moveItem() (src/components/ListItem.tsx:31) from running while adding new items to a list via the form persisted in state once moveItem() was allowed to run again. This was particulary confusing because moveItem() does not run when adding new items to the list via the form, so I wasn't sure how they were connected, but useful to know when debugging the issue.

I felt I was incredible close to resolving the remaining bugs, hence me pouring probably more time than I should have into this assessment, but it is difficult for me to submit work that has known bugs. I feel confident that if I were able to resolve the outdated state issue I was having, it would resolve most of, if not all the remaining bugs.

Please let me know if you have any questions! Looking forward to your feedback and discussing how I might have found a solution for my state issue!

Thanks so much!