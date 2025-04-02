import { useId, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import userSchema from "./user-schema";

import styles from "./FormAddUser.module.css";

const RegisterForm = ({addUser})=> {
    const {register, handleSubmit, setFocus, reset, formState: {errors}} = useForm({
        resolver: yupResolver(userSchema)
    });

    const usernameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const repeasstPasswordId = useId();

    useEffect(()=> {
        setFocus("username");
    }, [setFocus]);

    const onSubmit = values => {
        addUser(values);
        reset();
        setFocus("username");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>Register</h2>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={usernameId}>Username</label>
                <input {...register("username")} className={styles.field} type="text" placeholder="Username" id={usernameId} />
                {errors.username && <p className={styles.error}>{errors.username.message}</p>}
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={emailId}>Email</label>
                <input {...register("email")} className={styles.field} type="email" placeholder="Email" id={emailId} />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={passwordId}>Password</label>
                <input {...register("password")} className={styles.field} type="password" placeholder="Password" id={passwordId} />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            </div>
            <div className={styles.group}>
                <label className={styles.label} htmlFor={repeasstPasswordId}>Repeat Password</label>
                <input {...register("repeatPassword")} className={styles.field} type="password" placeholder="Repeat Password" id={repeasstPasswordId} />
                {errors.repeatPassword && <p className={styles.error}>{errors.repeatPassword.message}</p>}
            </div>
            <button className={styles.btn}>Add user</button>
        </form>
    )
}

export default RegisterForm;