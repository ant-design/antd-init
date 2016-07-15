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
          label="InputNumber 数字输入框："
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}>
          <InputNumber size="large" min={1} max={10} style={{width:100}} defaultValue={3} name="inputNumber" />
          <span className="ant-form-text"> 台机器</span>
        </FormItem>

        <FormItem
          label="我是标题："
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}>
          <p className="ant-form-text" id="static" name="static">唧唧复唧唧木兰当户织呀</p>
          <p className="ant-form-text">
            <a href="#">链接文字</a>
          </p>
        </FormItem>

        <FormItem
          label="Switch 开关："
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}>
          <Switch name="switch" />
        </FormItem>

        <FormItem
          label="Slider 滑动输入条："
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}>
          <Slider marks={['A', 'B', 'C', 'D', 'E', 'F', 'G']} name="slider" />
        </FormItem>

        <FormItem
          label="Select 选择器："
          labelCol={{ span: 8 }}
          wrapperCol={{span: 16}}>
          <Select size="large" defaultValue="lucy" style={{width:200}} name="select">
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </FormItem>

        <FormItem
          label="DatePicker 日期选择框："
          labelCol={{ span: 8 }}>
          <DatePicker name="startDate" />
        </FormItem>
        <Row>
          <Col span="16" offset="8">
            <Button type="primary" htmlType="submit">确定</Button>
          </Col>
        </Row>
      </Form>
    );
  }
});

ReactDOM.render(<Demo />, document.getElementById('container'));
