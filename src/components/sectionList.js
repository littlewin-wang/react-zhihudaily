import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

import NewsItem from './common/newsItem'

class SectionList extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount () {
    // console.log(this.props.routeParams)
    this.props.actions.GET_SECTION_ID_POSTS(this.props.routeParams.id)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      this.props.actions.GET_SECTION_ID_POSTS(nextProps.routeParams.id)
    }
  }

  render () {
    let data = this.props.sectionPosts || {'name': '', stories: [], timestamp: 0}

    return (
      <div className="sectionlist">
        {data.stories &&
          <div className="section">
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
    sectionPosts: state.sectionPosts
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
)(SectionList)
