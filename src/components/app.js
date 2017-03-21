require('normalize.css/normalize.css')
require('styles/zhihu.css')
require('styles/base.css')

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

import Header from './common/header'
import Float from './common/float'

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    this.props.actions.GET_LATEST_NEWS()
    this.props.actions.GET_ALL_TOPICS()
    this.props.actions.GET_ALL_SECTIONS()
  }

  render() {
    return (
      <div className="index">
        <Header topic={this.props.topics} section={this.props.sections} />
        { this.props.children }
        <Float isHome={this.props.location.pathname === '/'}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.news,
    topics: state.topics,
    sections: state.sections
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
