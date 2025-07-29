// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import ToDoList from './components/ToDoList';
import DoingList from './components/DoingList';
import DoneList from './components/DoneList';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Healthie Assessment To-Do List:</h1>
      <div className="lists-container">
        <ToDoList />
        <DoingList />
        <DoneList />
      </div>
    </div>
  );
};

export default App;
