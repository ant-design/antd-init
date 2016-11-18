import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const Demo = React.createClass({
  getInitialState() {
    return {
      formData: {
        inputNumber: undefined,
        static: '唧唧复唧唧木兰当户织呀',
        switch: undefined,
        slider: undefined,
        select: undefined,
        startDate: undefined,
        endDate: undefined,
      }
    };
  },

  render() {
    return (
      <Form horizontal>
        <FormItem
          label="数字输入框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <InputNumber size="large" min={1} max={10} style={{width:100}} defaultValue={3} name="inputNumber" />
          <span className="ant-form-text"> 台机器</span>
          <a href="#">链接文字</a>
        </FormItem>

        <FormItem
          label="开关"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Switch defaultChecked name="switch" />
        </FormItem>

        <FormItem
          label="滑动输入条"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Slider defaultValue={70} />
        </FormItem>

        <FormItem
          label="选择器"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select size="large" defaultValue="lucy" style={{ width: 192 }} name="select">
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label="日期选择框"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <DatePicker name="startDate" />
        </FormItem>
        <FormItem
          style={{ marginTop: 48 }}
          wrapperCol={{ span: 8, offset: 8 }}
        >
          <Button size="large" type="primary" htmlType="submit">
            确定
          </Button>
          <Button size="large" style={{ marginLeft: 8 }}>
            取消
          </Button>
        </FormItem>
      </Form>
    );
  }
});

ReactDOM.render(<Demo />, document.getElementById('container'));
