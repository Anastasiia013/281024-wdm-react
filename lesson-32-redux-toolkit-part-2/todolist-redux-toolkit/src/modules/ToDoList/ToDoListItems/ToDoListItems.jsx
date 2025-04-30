import { useDispatch } from "react-redux";
import { List } from "rsuite";

import SingleTodoItem from "./SingleTodoItem/SingleTodoItem";

import {
  deleteTodo,
  toggleTodoCompleted,
} from "../../../redux/todo/todo-slice";

const ToDoListItems = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onToggleTodoCompleted = (id) => {
    dispatch(toggleTodoCompleted(id));
  };

  const elements = items.map((item) => (
    <SingleTodoItem
      key={item.id}
      {...item}
      onDeleteTodo={onDeleteTodo}
      onToggleTodoCompleted={onToggleTodoCompleted}
    />
  ));

  return <List bordered>{elements}</List>;
};

export default ToDoListItems;
