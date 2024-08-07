import React, { FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRequest, useTitle } from "ahooks";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { login } from "@/api";
import { setItem } from "@/utils/storage";
import { TOKEN_KEY } from "@/constants/enum";
import { REGISTER_PATH, HOME_PATH } from "@/router";
import { setUserInfo } from "@/store/counter/user";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Login: FC = () => {
  useTitle("登录");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { loading, run: onFinish } = useRequest(
    async () => {
      const { username, password } = form.getFieldsValue();
      return await login({ username, password });
    },
    {
      manual: true,
      onSuccess(res: any) {
        const { token, username, nickname } = res?.data || {};
        setItem(TOKEN_KEY, token);
        dispatch(setUserInfo({ username, nickname }));
        navigate(HOME_PATH);
        message.success("登录成功");
      },
    },
  );
  return (
    <>
      <div className={styles.login}>
        <h1>登录</h1>
        <Form
          form={form}
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
              disabled={loading}
            >
              Log in
            </Button>
            <div>
              Or&nbsp;
              <Link to={REGISTER_PATH}>register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
