import BuyList from '../BuyList/BuyList';
import ToDolist from "../ToDoList/ToDoList";
import Timer from '../Timer/Timer';
import PostList from '../PostList/PostList';

import './App.css'

function App() {


  return (
    <>
    {/* <button onClick={toggleTimer}>{showTimer ? "Спрятать таймер" : "Показать таймер"} </button>
    {showTimer && <Timer />} */}
    {/* <BuyList /> */}
    {/* <ToDolist /> */}
    <PostList />
    </>
  )
}

export default App
