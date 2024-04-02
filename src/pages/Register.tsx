import React, { FC } from "react";
import { Button, Form, Input, message } from "antd";
import { useRequest, useTitle } from "ahooks";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api";
import styles from "./Register.module.scss";

const Register: FC = () => {
  useTitle("注册");
  const [form] = Form.useForm();
  const navigator = useNavigate();
  const { loading, run: onFinish } = useRequest(
    async () => {
      const { username, password, rePassword } = form.getFieldsValue();
      return await register({ username, password, rePassword });
    },
    {
      manual: true,
      onSuccess() {
        navigator("/login");
        message.success("注册成功");
      },
    },
  );
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
            name="rePassword"
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
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              disabled={loading}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
