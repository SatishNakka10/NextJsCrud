"use client"
import React from 'react';
import 'antd/dist/reset.css'; // for AntD v5
import { Form, Input, Checkbox, Button } from 'antd';

const page = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='shadow-lg p-5 rounded-lg border-1'>
       <h1 className="text-xl my-4 px-3" style={{ fontWeight: 600 }}>Login</h1>


        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={(values) => console.log('Success:', values)}
          onFinishFailed={(errorInfo) => console.log('Failed:', errorInfo)}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ marginBottom: 8 }} // smaller bottom space
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            style={{ marginBottom: 8 }} // smaller bottom space
          >
            <Input.Password />
          </Form.Item>
        

          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ marginBottom: 12}} // smaller bottom space
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item style={{ marginBottom: 12 }}> 
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>

       
          <div className="text-right mt-1">
           <span>{"Don't have an account?"}</span>
            <a href="/Register" className="text-blue-500 hover:underline">Register</a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default page;
