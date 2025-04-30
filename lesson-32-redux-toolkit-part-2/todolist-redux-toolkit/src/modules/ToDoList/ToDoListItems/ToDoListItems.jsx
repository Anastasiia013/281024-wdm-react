import { useDispatch } from "react-redux";
import { List, Button, FlexboxGrid } from "rsuite";

import {
  deleteTodo,
  toggleTodoCompleted,
} from "../../../redux/todo/todo-slice";

import styles from "./ToDoListItems.module.css";

const ToDoListItems = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleTodoCompleted = (id) => {
    dispatch(toggleTodoCompleted(id));
  };

  const elements = items.map(({ id, todo, completed }) => (
    <List.Item key={id}>
      <FlexboxGrid justify="space-between" align="middle">
        <FlexboxGrid.Item
          colspan={15}
          className={completed ? styles.completed : ""}
        >
          {todo}
        </FlexboxGrid.Item>

        <FlexboxGrid.Item colspan={9}>
          <FlexboxGrid justify="end" className={styles.actions}>
            <Button
              onClick={() => onToggleTodoCompleted(id)}
              appearance="primary"
            >
              {completed ? "Undo" : "Completed"}
            </Button>
            <Button
              onClick={() => onDeleteTodo(id)}
              appearance="primary"
              color="red"
            >
              Delete
            </Button>
          </FlexboxGrid>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </List.Item>
  ));

  return <List bordered>{elements}</List>;
};

export default ToDoListItems;
