import React from 'react'
/** @jsx jsx */ import { jsx, css } from '@emotion/core';
import { Form, Input, Button } from 'antd';

const registerFormLayout = {
  labelCol: {span: 24},
  wrapperCol: {span: 24}
}

export default function Register() {
  return <div css={css`
    background: #fff;
    padding: 1rem;
    flex-grow: 1;
  `}>
    <Form
      {...registerFormLayout}
    >
      <Form.Item label="First name"
        name="first name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input placeholder="Enter your first name"/>
      </Form.Item>
      <Form.Item label="Last name"
        name="last name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input placeholder="Enter your last name"/>
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="Enter your email"/>
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Enter the password"/>
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm password"/>
      </Form.Item>
      <Form.Item css={css`
        margin-bottom: 0px;
      `}>
        <Button css={css`
          width: 100%;
        `}
        type="primary"
        htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  </div>
}
