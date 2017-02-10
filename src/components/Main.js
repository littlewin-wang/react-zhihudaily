require('normalize.css/normalize.css');
require('styles/base.css');
require('styles/zhihu.css')

import React from 'react';
import Header from './common/header'
import Slider from './common/slider'
import Loading from './common/loading'

const data = [
  {images: 'http://pic2.zhimg.com/fe3cc01975fcb64842349a629deb039d.jpg', type: 0, id: 9034429},
  {images: 'http://pic4.zhimg.com/b687c92faad94a0adfc708aea52700c7.jpg', type: 0, id: 9208718},
  {images: 'http://pic3.zhimg.com/c0ace161922ad0f01c027e2e4db27616.jpg', type: 0, id: 9204413},
  {images: 'http://pic3.zhimg.com/12ff38de386051b3e5ad4d7a838c9816.jpg', type: 0, id: 9209484}
]

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Slider images={data} />
        <Loading mask={true} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
