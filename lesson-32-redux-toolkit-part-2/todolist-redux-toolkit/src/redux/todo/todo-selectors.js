export const selectAllTodo = (store) => store.todo;

export const selectCompletedTodo = (store) =>
  store.todo.filter((item) => item.completed);
