import { Form, Input, Checkbox } from "antd";
import React from "react";
import { LoginContainer } from "./style";
import { SubmitButton } from "../join/style";
import { Link } from "react-router-dom";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  return (
    <>
      <LoginContainer>
        <h2>Log in to Nomad Coders</h2>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <SubmitButton type="primary" htmlType="submit">
              Submit
            </SubmitButton>
          </Form.Item>

          <div>
            <Link>이메일 계정 찾기</Link>
          </div>
        </Form>
      </LoginContainer>
    </>
  );
};

export default Login;
