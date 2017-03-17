import React, { PropTypes } from 'react'
require('styles/common/header.styl')

import List from './list'

export default class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="logo">
          <a className="link-logo">知乎日报</a>
        </div>
        <span>主题日报</span>
        <span>专栏总览</span>
        <List items={this.props.data} />
      </div>
    )
  }
}

Header.propTypes = {
  data: PropTypes.array
}
