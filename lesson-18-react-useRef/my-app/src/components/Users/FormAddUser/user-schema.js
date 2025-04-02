import * as yup from "yup";

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const userSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("Username это обязательное поле")
    .min(2, "Username не может состоять из одного символа")
    .max(20, "Username не может быть больше 20 символов"),
  email: yup
    .string()
    .trim()
    .required("Email обязательное поле")
    .matches(emailRegexp, "Email должен содержать @ и не содержать пробелов"),
  password: yup
    .string()
    .trim()
    .required("Password обязательное поле")
    .min(6, "Пароль должен содержать минимум 6 символов")
    .matches(
      passwordRegexp,
      "Password должен содержать минимум 1 латинскую букву и цифру"
    ),
  repeatPassword: yup
    .string()
    .trim()
    .required("Password обязательное поле")
    .min(6, "Пароль должен содержать минимум 6 символов")
    .matches(
      passwordRegexp,
      "Password должен содержать минимум 1 латинскую букву и цифру"
    )
    .oneOf([yup.ref("password")], "Пароли должны совпадать"),
});

export default userSchema;
