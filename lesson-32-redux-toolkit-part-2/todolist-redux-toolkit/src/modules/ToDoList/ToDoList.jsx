import { useSelector } from "react-redux";

import ToDoListForm from "./ToDoListForm/ToDoListForm";
import ToDoListItems from "./ToDoListItems/ToDoListItems";

import { selectAllTodo } from "../../redux/todo/todo-selectors";

import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const items = useSelector(selectAllTodo);

  return (
    <div className={styles.wrapper}>
      <ToDoListForm />
      <ToDoListItems items={items} />
    </div>
  );
};

export default ToDoList;
