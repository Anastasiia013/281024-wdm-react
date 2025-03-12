import { useState } from "react";

import styles from "./BuyListForm.module.css";

import { initialState, options } from "./fields";

// const user1 = {
//     name: "Kateryna",
//     lastName: "last name"
// };

// const user2 = {};
// for(const key in user1) {
//     const value = user1[key];
//     user2[key] = value;
// }
// user2.name = "Bohdan";
// console.log(user1);
// console.log(user2);
// const user2 = {...user1};
// user2.name = "Bohdan";
// console.log(user1);
// console.log(user2);

const BuyListForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = (e) => {
    // const selectCity = cities.filter(item => item.name === name);
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setState((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(state);
    setState({ ...initialState });
  };

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
