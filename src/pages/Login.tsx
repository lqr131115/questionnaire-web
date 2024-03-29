import React, { FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "ahooks";
import styles from "./Login.module.scss";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Login: FC = () => {
  useTitle("登录");
  const navigate = useNavigate();
  const onFinish = (values: FieldType) => {
    console.log("Received values of form: ", values);
    const { username, password } = values;
    if (username === "admin" && password === "123123") {
      console.log("登录成功");
      navigate("/manage/list");
    }
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
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item<FieldType>>
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
