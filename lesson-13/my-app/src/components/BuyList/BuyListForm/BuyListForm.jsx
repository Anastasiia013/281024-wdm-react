// import { useState } from "react";

import useForm from "../../../hooks/useForm";

import { initialState, options } from "./fields";

const BuyListForm = ({ onSubmit }) => {
  const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
  // const [state, setState] = useState({ ...initialState });

  // const handleChange = (e) => {
  //   const { name, value, checked, type } = e.target;
  //   const newValue = type === "checkbox" ? checked : value;
  //   setState((prevState) => ({ ...prevState, [name]: newValue }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(state);
  //   setState({ ...initialState });
  // };

  const optionElements = options.map((item) => (
    <option key={item.value} value="food">
      {item.text}
    </option>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Название покупки</label>
        <input
          value={state.name}
          onChange={handleChange}
          required
          name="name"
          type="text"
          placeholder="Название покупки"
        />
      </div>
      <div>
        <label htmlFor="">Срочная покупка</label>
        <input
          checked={state.urgency}
          onChange={handleChange}
          name="urgency"
          type="checkbox"
        />
      </div>
      <div>
        <select onChange={handleChange} name="type">
          {optionElements}
        </select>
      </div>
      <button>Добавить покупку</button>
    </form>
  );
};

export default BuyListForm;
