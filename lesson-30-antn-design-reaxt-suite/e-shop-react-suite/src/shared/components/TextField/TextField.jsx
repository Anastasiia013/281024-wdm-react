/** @jsxImportSource @emotion/react */
import { useId } from "react";
import { Form, Input } from 'rsuite';

import {
  textFieldWrapperStyle,
} from "./styles";

const TextField = ({
  label,
  name,
  register,
  rules,
  error,
  as = "input",
  ...props
}) => {

  const id = useId();

  return (
    <Form.Group css={textFieldWrapperStyle}>
      {label && (
        <Form.ControlLabel htmlFor={id}>
          {label}
        </Form.ControlLabel>
      )}
      {as === "input" && (
        <Input
          {...register(name, rules)}
          {...props}
          id={id}
          // css={textFieldStyle(colors.lightBg)}
        />
      )}
      {as === "textarea" && (
        <Input
        as="textarea"
          {...register(name, rules)}
          {...props}
          id={id}
          // css={textFieldStyle(colors.lightBg)}
        ></Input>
      )}
      <Form.ErrorMessage show={error} placement="bottomStart">{error?.message}</Form.ErrorMessage>
    </Form.Group>
  );
};

export default TextField;
