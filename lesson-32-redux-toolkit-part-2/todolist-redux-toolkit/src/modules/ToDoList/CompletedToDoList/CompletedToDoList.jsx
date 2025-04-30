import { useSelector } from "react-redux";

import ToDoListItems from "../ToDoListItems/ToDoListItems";

import { selectCompletedTodo } from "../../../redux/todo/todo-selectors";

const CompletedToDoList = ()=> {
    const items = useSelector(selectCompletedTodo);

    return <ToDoListItems items={items} />
}

export default CompletedToDoList;