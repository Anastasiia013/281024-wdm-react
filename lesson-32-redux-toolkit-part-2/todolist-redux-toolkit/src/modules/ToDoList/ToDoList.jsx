import { useSelector, useDispatch } from "react-redux";

import ToDoListForm from "./ToDoListForm/ToDoListForm";
import ToDoListItems from "./ToDoListItems/ToDoListItems";

import { addTodo } from "../../redux/todo/todo-slice";

import { selectAllTodo } from "../../redux/todo/todo-selectors";

import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const items = useSelector(selectAllTodo);

  const dispatch = useDispatch();

  const onAddTodo = data => {
    dispatch(addTodo(data));
  }

  return (
    <div className={styles.wrapper}>
      <ToDoListForm submitForm={onAddTodo} />
      <ToDoListItems items={items} />
    </div>
  );
};

export default ToDoList;
