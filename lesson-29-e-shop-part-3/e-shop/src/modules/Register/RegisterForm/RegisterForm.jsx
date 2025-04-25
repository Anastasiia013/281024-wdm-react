import { useForm } from "react-hook-form";

import TextField from "../../../shared/components/TextField/TextField";

const RegisterForm = ({ submitForm }) => {
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
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        type="text"
        placeholder="Username"
        name="username"
        register={register}
        rules={{
            required: "Username must be exist"
        }}
        error={errors.username}
      />
    </form>
  );
};

export default RegisterForm;
