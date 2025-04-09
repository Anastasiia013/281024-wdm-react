import { useEffect } from "react";
import { useForm } from "react-hook-form";

import styles from "./MyNotesForm.module.css";

const MyNotesForm = ({ submitForm, defaultValues, edit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(()=> {
    if(Object.keys(defaultValues).length) {
      for(const key in defaultValues) {
        const value = defaultValues[key];
        setValue(key, value);
      }
    }
  }, [setValue, defaultValues]);

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formGroup}>
        <label htmlFor="">Note title</label>
        <input
          {...register("title", { required: "У заметки должно быть название" })}
          type="text"
          placeholder="Note title"
        />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Note text</label>
        <textarea
          {...register("text", { required: "У заметки должно быть описание" })}
          placeholder="Note text"
        />
        {errors.text && <p className={styles.error}>{errors.text.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Note important</label>
        <div>
          <input {...register("important")} type="checkbox" />
        </div>
      </div>
      <button type="submit">{edit ? "Edit" : "Add"} note</button>
    </form>
  );
};

export default MyNotesForm;
