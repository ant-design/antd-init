import React, { Component, PropTypes } from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class SearchForm extends Component {
  checkNumber(rule, value, callback) {
    if (!/^[\d]{1,2}$/.test(value)) {
      callback(new Error('年龄不合法'));
    } else {
      callback();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { onSearch, form } = this.props;

    form.validateFields((errors) => {
      if (!!errors) {
        return;
      }
      if (onSearch) {
        onSearch(form.getFieldsValue());
      }
    });
  }

  addItem = (e) => {
    e.preventDefault();

    const { onAdd, form } = this.props;

    form.validateFields((errors) => {
      if (!!errors) {
        return;
      }
      if (onAdd) {
        onAdd(form.getFieldsValue());
      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    const nameProps = getFieldProps('name', {
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    });
    const ageProps = getFieldProps('age', {
      rules: [
        {
          required: true,
          message: '年龄不合法',
          validator: this.checkNumber,
        },
      ],
    });
    const addressProps = getFieldProps('address', {
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
    });

    return (
      <div style={{ marginBottom: '20px' }}>
        <Form inline onSubmit={ this.handleSubmit } form={this.props.form}>
          <FormItem
            label="姓名："
            hasFeedback
          >
            <Input { ...nameProps } />
          </FormItem>
          <FormItem
            label="年龄："
            hasFeedback
          >
            <Input type="age" { ...ageProps } />
          </FormItem>
          <FormItem
            label="住址："
            hasFeedback
          >
            <Input type="address" { ...addressProps } />
          </FormItem>
          <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">搜索</Button>
          <Button type="ghost" onClick={this.addItem}>添加</Button>
        </Form>
      </div>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

SearchForm = Form.create()(SearchForm);

export default SearchForm;

