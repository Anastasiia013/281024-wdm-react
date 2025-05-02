import { useForm } from "react-hook-form";

import styles from "./MovieAddForm.module.css";

const MovieAddForm = (submitForm) => {
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
      <div className={styles.block}>
        <label>Movie title:</label>
        <input
          {...register("title", { required: "Title required" })}
          placeholder="Movie title"
        />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </div>
      <div className={styles.block}>
        <label>Movie director:</label>
        <input
          {...register("director")}
          placeholder="Movie Director"
        />
      </div>
      <div className={styles.block}>
        <label>Movie release year:</label>
        <input
          {...register("releaseYear")}
          placeholder="Movie release year"
        />
      </div>
      <div className={styles.block}>
        <label>Movie favorite:</label>
        <input
          {...register("favorite")}
          type="checkbox"
        />
      </div>
      <div className={styles.block}>
        <label>Movie genre:</label>
        <select
          {...register("genre")}>
            <option value="film">Film</option>
            <option value="serial">Serial</option>
            <option value="cartoon">Cartoon</option>
            </select>
      </div>
      <button type="submit">Add movie</button>
    </form>
  );
};

export default MovieAddForm;
