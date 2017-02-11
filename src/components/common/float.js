import React from 'react'
require('styles/common/float.styl')

export default class Float extends React.Component {
  render() {
    return (
      <div className="float">
        <div className="gotop" id='gotop' title="返回顶部">
          <div className="arrow"></div>
          <div className="stick"></div>
        </div>
        <a to="/">
          <div className="gohome" title="返回主页">
            <div className="arrow"></div>
            <div className="stick"></div>
          </div>
        </a>
      </div>
    )
  }
}
