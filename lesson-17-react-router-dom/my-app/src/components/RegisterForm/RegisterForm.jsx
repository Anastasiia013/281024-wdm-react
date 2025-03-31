import { useForm } from "react-hook-form";

const RegisterForm = ()=> {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const onSubmit = values => {
        console.log(values);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("email")} placeholder="Email" />
            <input type="password" {...register("password")} placeholder="Password" />
            <button>Register</button>
        </form>
    )
}

export default RegisterForm;