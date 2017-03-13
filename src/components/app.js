require('normalize.css/normalize.css');
require('styles/base.css');
require('styles/zhihu.css')

import React from 'react';
import NewsContent from './newsContent'
// import NewsList from './newsList'
// import SectionList from './sectionList'
// import TopicList from './topicList'
// import Float from './common/float'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <NewsContent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
