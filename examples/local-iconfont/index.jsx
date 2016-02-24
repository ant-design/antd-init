import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { Icon, Button } from 'antd';

const Demo = React.createClass({
  render() {
    return <Button type="primary"><Icon type="smile" /> Button</Button>;
  }
});

ReactDOM.render(<Demo />, document.getElementById('container'));
