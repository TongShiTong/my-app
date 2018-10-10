import React, { Component } from 'react';

// import {Button, Card} from 'antd'
import './style/common.less'
// import './test.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<h1>标题</h1>*/}
        {/*<Button type='primary'>我是按钮</Button>*/}
          {/*<Card>*/}
              {/*<Button>我是按钮</Button>*/}
          {/*</Card>*/}
          {this.props.children}
      </div>
    );
  }
}

export default App;
