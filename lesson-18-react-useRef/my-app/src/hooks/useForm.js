import { useState } from "react";

const useForm = ({initialState, onSubmit})=> {
    const [state, setState] = useState({ ...initialState });

    const handleChange = (e) => {
      const { name, value, checked, type } = e.target;
      const newValue = type === "checkbox" ? checked : value;
      setState((prevState) => ({ ...prevState, [name]: newValue }));
    };

    const reset = ()=> setState({ ...initialState });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(state);
      reset();
    };

    return {state, setState, handleChange, handleSubmit, reset}
}

export default useForm;