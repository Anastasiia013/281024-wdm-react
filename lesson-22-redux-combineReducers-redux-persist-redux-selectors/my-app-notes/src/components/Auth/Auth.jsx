import { useState } from "react";
import { useDispatch } from "react-redux";

import LoginForm from "./LoginForm/LoginForm";

import { loginInStore } from "../../redux/autenticate/autenticate-actions";

import { login } from "../../api/auth";

import styles from "./Auth.module.css";

const Auth = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const onLogin = async (data) => {
    try {
      setError(null);
      await login(data);
      dispatch(loginInStore());

    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <LoginForm submitForm={onLogin} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Auth;
