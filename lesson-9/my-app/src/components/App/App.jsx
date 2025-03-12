import { useState } from 'react';
import BuyList from '../BuyList/BuyList';
import ToDolist from "../ToDoList/ToDoList";
import Timer from '../Timer/Timer';

import './App.css'

function App() {
  const [showTimer, setShowTimer] = useState(false);

  const toggleTimer = ()=> setShowTimer(prevState => !prevState);

  return (
    <>
    {/* <button onClick={toggleTimer}>{showTimer ? "Спрятать таймер" : "Показать таймер"} </button>
    {showTimer && <Timer />} */}
    {/* <BuyList /> */}
    <ToDolist />
    </>
  )
}

export default App
