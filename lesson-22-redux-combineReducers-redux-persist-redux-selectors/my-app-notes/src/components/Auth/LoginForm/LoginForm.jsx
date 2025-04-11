import { useForm } from "react-hook-form";

import styles from "./LoginForm.module.css";

const LoginForm = ({ submitForm }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="">Email</label>
        <input
          {...register("email", { required: "Email обязателен" })}
          type="email"
          placeholder="User email"
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Password</label>
        <input
          {...register("password", { required: "Пароль обязателен" })}
          type="password"
          placeholder="User password"
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
