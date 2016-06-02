import React, { Component, PropTypes } from 'react';
import { Form, Input, Modal } from 'antd';
const FormItem = Form.Item;

import { getData, addItem, deleteItem } from '../../../services/tableList';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

class EditModal extends Component {
  checkNumber(rule, value, callback) {
    if (!/^[\d]{1,2}$/.test(value)) {
      callback(new Error('年龄不合法'));
    } else {
      callback();
    }
  }

  handleOnOk = () => {
    const { onOk, form, item } = this.props;
    form.validateFields((errors) => {
      if (!!errors) {
        return;
      }
      if (onOk) {
        onOk({ ...form.getFieldsValue(), key: item.key });
      }
    });
  }

  handleOnCancel = () => {
    this.props.onCancel();
  }

  render() {
    const { form, item, visible } = this.props;
    const { getFieldProps } = form;

    const nameProps = getFieldProps('name', {
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
      initialValue: item.name,
    });
    const ageProps = getFieldProps('age', {
      rules: [
        {
          required: true,
          message: '年龄不合法',
          validator: this.checkNumber,
        },
      ],
      initialValue: item.age,
    });
    const addressProps = getFieldProps('address', {
      rules: [
        {
          required: true,
          message: '不能为空',
        },
      ],
      initialValue: item.address,
    });

    return <div>
      <Modal
        title="修改元素"
        visible={ visible }
        onOk={ this.handleOnOk }
        onCancel={ this.handleOnCancel }
      >
        <Form horizontal form={ form }>
          <FormItem
            label="姓名："
            hasFeedback
            { ...formItemLayout }
          >
            <Input { ...nameProps } />
          </FormItem>
          <FormItem
            label="年龄："
            hasFeedback
            { ...formItemLayout }
          >
            <Input type="age" { ...ageProps } />
          </FormItem>
          <FormItem
            label="住址："
            hasFeedback
            { ...formItemLayout }
          >
            <Input type="address" { ...addressProps } />
          </FormItem>
        </Form>
      </Modal>
    </div>
  }
}

EditModal.propTypes = {
  item: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

EditModal = Form.create()(EditModal);

export default EditModal;
