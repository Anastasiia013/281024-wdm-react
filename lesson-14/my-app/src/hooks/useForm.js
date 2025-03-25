import { useState } from "react";

const useForm = ({initialState, onSubmit})=> {
    const [state, setState] = useState({ ...initialState });
    // const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value, checked, type } = e.target;
      const newValue = type === "checkbox" ? checked : value;
      setState((prevState) => ({ ...prevState, [name]: newValue }));
    };

    const reset = ()=> setState({ ...initialState });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // if(!state.name) {
      //   return setErrors({
      //     name: "Нужно написать название покупки"
      //   })
      // };
      onSubmit(state);
      // setErrors({});
      reset();
    };

    return {state, setState, handleChange, handleSubmit, reset}
}

export default useForm;