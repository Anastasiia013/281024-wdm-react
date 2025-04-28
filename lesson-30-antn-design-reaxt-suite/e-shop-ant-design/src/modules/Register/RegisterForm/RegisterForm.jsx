// import { useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";

// import TextField from "../../../shared/components/TextField/TextField";
// import Button from "../../../shared/components/Button/Button";

import fields from "./fields";

const RegisterForm = ({ submitForm }) => {
  const onFinish = (values) => {
    console.log(values);
    // submitForm(values);
  };

  return (
    <Form
      name="register-form"
      labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      style={{ maxWidth: 400 }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item {...fields.username}>
        <Input {...fields.username} />
      </Form.Item>
      <Form.Item {...fields.email}>
        <Input {...fields.email} />
      </Form.Item>
      <Form.Item {...fields.password}>
        <Input.Password {...fields.password} />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
