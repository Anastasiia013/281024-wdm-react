/** @jsxImportSource @emotion/react */
import { useId } from "react";

import { textFieldErrorStyle } from "./styles";

const TextField = ({ label, name, register, rules, error, as = "input", ...props }) => {
  const id = useId();

  return (
    <div>
      {label && <label htmlFor={id}></label>}
      {as === "input" && <input {...register(name, rules)} {...props} id={id} />}
      {as === "textarea" && <textarea {...register(name, rules)} {...props} id={id}></textarea>}
      {error && <p css={textFieldErrorStyle}>{error.message}</p>}
    </div>
  );
};

export default TextField;
