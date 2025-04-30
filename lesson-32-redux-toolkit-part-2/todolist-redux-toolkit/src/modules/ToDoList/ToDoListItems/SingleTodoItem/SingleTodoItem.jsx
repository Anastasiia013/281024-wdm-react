import { List, Button, FlexboxGrid } from "rsuite";

import styles from "./SingleTodoItem.module.css";

const SingleTodoItem = ({
  id,
  todo,
  completed,
  onToggleTodoCompleted,
  onDeleteTodo,
}) => {
  return (
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
  );
};

export default SingleTodoItem;
