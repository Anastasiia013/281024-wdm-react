import { useId } from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "rsuite";

const ToDoListForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    reset();
  };

  const todoId = useId();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.ControlLabel id={todoId}>New todo</Form.ControlLabel>
        <input
          {...register("todo", {
            required: "Todo must be exist",
          })}
          placeholder="Enter new todo"
          id={todoId}
        />
      </Form.Group>
      <Button appearance="primary" type="submit">
          Add todo
        </Button>
    </Form>
  );
};

export default ToDoListForm;
