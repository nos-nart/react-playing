import React from 'react'
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function Login() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return <div css={css`
    flex-grow: 1;
    padding: 1rem;
    background: #fff;
  `}>
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item css={css`
        margin-bottom: 0;
      `}>
        <Button css={css`
          width: 100%;
        `} type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  </div>
}
