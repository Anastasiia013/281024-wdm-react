import { List, Button, FlexboxGrid } from "rsuite";

import styles from "./ToDoListItems.module.css";

const ToDoListItems = ({ items = [] }) => {
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
            <Button appearance="primary">
              {completed ? "Undo" : "Completed"}
            </Button>
            <Button appearance="primary" color="red">
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
