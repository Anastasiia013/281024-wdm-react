import ToDoListForm from "./ToDoListForm/ToDoListForm";
import ToDoListItems from "./ToDoListItems/ToDoListItems";

import styles from "./ToDoList.module.css";

const ToDoList = () => {
  return (
    <div className={styles.wrapper}>
      <ToDoListForm />
      <ToDoListItems items={[]} />
    </div>
  );
};

export default ToDoList;
