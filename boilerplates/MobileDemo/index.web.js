import { DatePicker, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';

let MobileDemo = React.createClass({
  render() {
    return (<div>
      <List>
        <List.Header>选择时间</List.Header>
        <List.Body>
          <DatePicker
            mode="datetime"
            {...this.props.form.getFieldProps('datetime')}
          >
            <List.Item arrow="horizontal">日期+时间</List.Item>
          </DatePicker>
        </List.Body>
      </List>
    </div>);
  },
});

MobileDemo = createForm()(MobileDemo);

ReactDOM.render(<MobileDemo />, document.getElementById('root'));
