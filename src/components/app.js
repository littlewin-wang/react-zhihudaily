require('normalize.css/normalize.css');
require('styles/base.css');
require('styles/zhihu.css')

import React from 'react';
import NewsList from './newsList'
import Float from './common/float'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <NewsList />
        <Float />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
