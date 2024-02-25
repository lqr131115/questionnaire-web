import React, { FC } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";

const Register: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div className={styles.register}>
        <h1>注册</h1>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          style={{ width: 400 }}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The new password that you entered do not match!",
                    ),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <span>
              I have a account, <Link to="/login">login now!</Link>
            </span>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
