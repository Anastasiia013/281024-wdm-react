import ToDoListForm from "./ToDoListForm/ToDoListForm";
import ToDoListItems from "./ToDoListItems/ToDoListItems";

import styles from "./ToDoList.module.css";

const mockToDoItems = [
    {
        id: "23tdga",
        todo: "Покормить кота",
        completed: false,
    },
    {
        id: "23tdg1",
        todo: "Покормить кота",
        completed: true,
    },
]

const ToDoList = () => {
  return (
    <div className={styles.wrapper}>
      <ToDoListForm />
      <ToDoListItems items={mockToDoItems} />
    </div>
  );
};

export default ToDoList;
