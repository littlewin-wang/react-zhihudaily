import React from 'react'
require('styles/header.styl')

export default class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <h1 className="logo">
          <a className="link-logo">知乎日报</a>
        </h1>
        <span>主题日报</span>
        <span>专栏总览</span>
      </div>
    );
  }
}
