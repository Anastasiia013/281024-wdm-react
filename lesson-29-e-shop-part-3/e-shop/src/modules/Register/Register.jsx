import Container from "../../modules/layouts/Container/Container";
import SectionTitle from "../../shared/components/SectionTitle/SectionTitle";

import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div>
      <Container>
        <SectionTitle title="Регистрация" />
        <RegisterForm />
      </Container>
    </div>
  );
};

export default Register;
