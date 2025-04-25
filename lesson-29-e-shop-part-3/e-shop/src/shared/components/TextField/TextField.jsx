/** @jsxImportSource @emotion/react */
import { useId } from "react";

import { textFieldErrorStyle } from "./styles";

const TextField = ({ label, name, register, rules, error, ...props }) => {
  const id = useId();

  return (
    <div>
      {label && <label htmlFor={id}></label>}
      <input {...register(name, rules)} {...props} id={id} />
      {error && <p css={textFieldErrorStyle}>{error.message}</p>}
    </div>
  );
};

export default TextField;
