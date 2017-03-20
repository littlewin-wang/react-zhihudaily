import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

require('styles/newsContent.styl')

import Badge from './common/badge'
import { imgProxy } from '../helpers/utils'

class NewsContent extends React.Component {
  constructor () {
    super()
    this.state = {post: {'image': '', body: '', popularity: 0}}
  }

  componentDidMount () {
    this.props.actions.GET_ID_POST(this.props.routeParams.id)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      this.props.actions.GET_ID_POST(nextProps.routeParams.id)
    }
  }

  render () {
    let data = this.props.post || {'image': '', body: '', popularity: 0}

    return (
      <div className='newscontent'>
        <div className='post'>
          <img className="postimage" src={imgProxy(data.image)} />
          <div dangerouslySetInnerHTML={{__html: data.body}}></div>
        </div>
        {data.body &&
          <Badge popularity={data.popularity} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.post
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
)(NewsContent)
