import React, { FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useTitle } from "ahooks";
import styles from "./Login.module.scss";
const Login: FC = () => {
  useTitle("登录");
  const onFinish = (values: unknown) => {
    console.log("Received values of form: ", values);
  };
  return (
    <>
      <div className={styles.login}>
        <h1>登录</h1>
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          style={{ width: "350px" }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ width: "100%" }}
            >
              Log in
            </Button>
            <div>
              Or&nbsp;
              <Link to="/register">register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
