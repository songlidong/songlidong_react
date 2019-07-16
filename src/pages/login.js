import React, { Component } from "react";
import { Card, Form, Input, Button, message } from "antd";
const FormItem = Form.Item;
class FormLogin extends Component {
  handleSubmit = () => {
    let userInfo = this.props.form.getFieldValue;

    this.props.form.validateFields((err, val) => {
      if (!err) {
        message.error(`恭喜你通过表单验证`);
      }
    });
  };
  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    return (
      <div>
        <Card title="登录">
          <div>
            <Form layout="inline">
              <FormItem>
                <Input placeholder="请输入用户名" />
              </FormItem>
              <FormItem>
                <Input placeholder="请输入密码" />
              </FormItem>
              <FormItem>
                <Button type="primary">登录</Button>
              </FormItem>
            </Form>
          </div>
        </Card>
        <br />

        <Card title="登录">
          <div>
            <Form layout="horizontal" style={{ width: "300px" }}>
              <FormItem label="账号">
                {getFieldDecorator("userName", {
                  initialValue: "",
                  rules: [
                    {
                      required: true,
                      message: "用户名字不能为空z"
                    }
                  ]
                })(<Input placeholder="请输入用户名" />)}
              </FormItem>
              <FormItem label="密码">
                {getFieldDecorator("passWord", {
                  initialValue: "",
                  rules: [
                    {
                      required: true,
                      message: "用户名字不能为空"
                    },
                    {
                      min: 5,
                      max: 20,
                      message: "长度必须在5-20"
                    }
                  ]
                })(<Input placeholder="请输入密码" />)}
              </FormItem>
              <FormItem style={{ textAlign: "right" }}>
                <Button type="primary" onClick={this.handleSubmit}>
                  登录
                </Button>
              </FormItem>
            </Form>
          </div>
        </Card>
      </div>
    );
  }
}

const Login = Form.create({})(FormLogin);

export default Login;
