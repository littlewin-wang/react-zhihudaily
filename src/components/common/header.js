import React from 'react'
require('styles/common/header.styl')

import List from './list'

const data = [
  {'id':41,'thumbnail':'http://pic1.zhimg.com/921dd6c5d2477a0fc39fac3049e6f6ac.jpg','name':'16 年 9 月苹果秋季发布会'},
  {'id':42,'name':'天宫二号发射','thumbnail':'http://pic1.zhimg.com/20382971f48562a73d99988cc1dd4e2c.jpg'},
  {'thumbnail':'http://pic3.zhimg.com/1b9cea03d2f682c5c876f63b39b4797e.jpg','name':'2016 诺贝尔奖巡礼','id':44}
]

export default class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="logo">
          <a className="link-logo">知乎日报</a>
        </div>
        <span>主题日报</span>
        <span>专栏总览</span>
        <List items={data} />
      </div>
    );
  }
}
