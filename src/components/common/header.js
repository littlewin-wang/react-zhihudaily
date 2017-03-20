import React, { PropTypes } from 'react'
import { Link } from 'react-router'
require('styles/common/header.styl')

import List from './list'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '',
      data: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    let toggle = (this.state.type === type ? '' : type)
    let data = toggle ? this.props[toggle] : []
    this.setState({
      type: toggle,
      data: data
    })
  }

  render() {
    return (
      <div className="head">
        <div className="logo">
          <Link className="link-logo" to="/">知乎日报</Link>
        </div>
        <span onClick={() => { this.handleClick('topic')}}>主题日报</span>
        <span onClick={() => { this.handleClick('section')}}>专栏总览</span>
        {this.state.type &&
          <List type={this.state.type} items={this.state.data} />
        }
      </div>
    )
  }
}

Header.propTypes = {
  topic: PropTypes.array,
  section: PropTypes.array
}
