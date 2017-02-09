require('normalize.css/normalize.css');
require('styles/base.css');
require('styles/zhihu.css')

import React from 'react';
import Header from './common/header'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header></Header>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
