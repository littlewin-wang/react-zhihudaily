require('normalize.css/normalize.css')
require('styles/base.css')
require('styles/zhihu.css')

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
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
  }

  render() {
    const items = this.props.items
    const actions = this.props.actions
    return (
      <div className="index">
        <NewsList items={items} actions={actions}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.news
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
