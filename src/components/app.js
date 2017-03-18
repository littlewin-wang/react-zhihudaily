require('normalize.css/normalize.css')
require('styles/base.css')
require('styles/zhihu.css')

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

import Header from './common/header'
// import NewsContent from './newsContent'
import NewsList from './newsList'
// import SectionList from './sectionList'
// import TopicList from './topicList'
// import Float from './common/float'

class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount() {
    this.props.actions.GET_LATEST_NEWS()
    this.props.actions.GET_ALL_SECTIONS()
    this.props.actions.GET_ALL_TOPICS()
    this.props.actions.GET_TOPIC_ID_POSTS(13)
  }

  render() {
    const items = this.props.items
    const actions = this.props.actions
    return (
      <div className="index">
        <Header data={this.props.topics}/>
        <NewsList items={items} actions={actions}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.news,
    topics: state.topics,
    sections: state.sections,
    topicPosts: state.topicPosts
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
