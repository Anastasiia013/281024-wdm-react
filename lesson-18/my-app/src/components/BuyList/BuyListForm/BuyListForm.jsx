import {useRef, useEffect} from "react";

import useForm from "../../../hooks/useForm";

import { initialState, options } from "./fields";

const BuyListForm = ({ onSubmit }) => {
  const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

  const firstInputRef = useRef();
  console.log(firstInputRef);
  useEffect(()=> {
    console.log(firstInputRef);
    firstInputRef.current.focus();
  }, []);

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
          ref={firstInputRef}
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
