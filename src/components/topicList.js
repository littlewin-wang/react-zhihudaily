import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

import NewsItem from './common/newsItem'
import { imgProxy } from '../helpers/utils'

class TopicList extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount () {
    // console.log(this.props.routeParams)
    this.props.actions.GET_TOPIC_ID_POSTS(this.props.routeParams.id)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      this.props.actions.GET_TOPIC_ID_POSTS(nextProps.routeParams.id)
    }
  }

  render () {
    let data = this.props.topicPosts || {topicPosts: {'description': '', image: '', stories: [], timestamp: 0}}

    return (
      <div className="topiclist">
        <div className="img" style={{position: 'relative'}}>
          <img src={imgProxy(data.image)} />
          <p style={{position: 'absolute', left: '5%', bottom: '5%', textAlign: 'center', color: '#fff', cursor: 'pointer'}}>
            {data.description}
          </p>
        </div>
        {data.stories &&
          <div>
            {data.stories.map((news) => (
              <NewsItem item={news} key={news.id}/>
            ))}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
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
)(TopicList)
