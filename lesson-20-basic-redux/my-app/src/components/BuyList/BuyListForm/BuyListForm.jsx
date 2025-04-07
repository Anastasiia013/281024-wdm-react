import { useForm } from "react-hook-form";


import { defaultValues, options } from "./fields";

const BuyListForm = ({ submitForm }) => {
  const {register, handleSubmit, reset} = useForm({
    defaultValues
  });

  const onSubmit = values => {
    submitForm(values);
    reset();
  }

  const optionElements = options.map((item) => (
    <option key={item.value} value={item.value}>
      {item.text}
    </option>
  ));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">Название покупки</label>
        <input
          {...register("name")}
          required
          type="text"
          placeholder="Название покупки"
        />
      </div>
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
