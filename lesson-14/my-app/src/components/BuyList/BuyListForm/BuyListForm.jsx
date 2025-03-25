import { useForm } from "react-hook-form";

import { defaultValues, validation, options } from "./fields";

import styles from "./BuyListForm.module.css";

const BuyListForm = ({ submitForm }) => {
  const {register, handleSubmit, watch, reset, formState: {errors, isSubmitting, isValid}} = useForm({
    mode: "onBlur",
    defaultValues,
  });

  const optionElements = options.map((item) => (
    <option key={item.value} value="food">
      {item.text}
    </option>
  ));

  const onSubmit = values => {
    submitForm(values);
    reset();
  };

  const isNameFill = watch("name");

  const validateCount = value => {
    return value > 0 ? true : "Количество покупок должно быть больше 0"
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Название:</label>
        <input
          {...register("name", validation.name)}
          type="text"
          placeholder="Название покупки"
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      {isNameFill && <div>
        <label htmlFor="">Количество:</label>
        <input
          {...register("count", {required: "Количество покупок нужно указать", validate: validateCount})}
          type="number"
          placeholder="Количество"
        />
        {errors.count && <p className={styles.error}>{errors.count.message}</p>}
      </div>}
      <div>
        <label htmlFor="">Срочная покупка</label>
        <input
          {...register("urgency")}
          type="checkbox"
        />
      </div>
      <div>
        <select {...register("type")}>
          {optionElements}
        </select>
      </div>
      <button>Добавить покупку</button>
    </form>
  );
};

export default BuyListForm;
