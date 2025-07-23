import React from 'react'
import { Button, ConfigProvider, Form, Input } from 'antd'
function App() {
  const [form] = Form.useForm()
  const { getFieldsValue } = form
  const onSubmit = () => {
    console.log(getFieldsValue())
  }
  return (
    <ConfigProvider wave={{ disabled: true }}>
      <Form form={form} onFinish={onSubmit}>
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  )
}

export default App
