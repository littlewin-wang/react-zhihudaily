import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

require('styles/newsContent.styl')

import Badge from './common/badge'
import { imgProxy } from '../helpers/utils'

class NewsContent extends React.Component {
  constructor (props, context) {
    super(props, context)
  }

  componentDidMount () {
    this.refs.lazyLoad.style.display = 'none'
    this.props.actions.GET_ID_POST(this.props.routeParams.id)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      this.props.actions.GET_ID_POST(nextProps.routeParams.id)
    }
  }

  componentDidUpdate () {
    this.check = setInterval(() => {
      if (this.refs.lazyLoad.complete) {
        this.refs.lazyLoad.style.display = ''
        clearInterval(this.check)
      }
    }, 500)
  }

  componentWillUnmount () {
    clearInterval(this.check)
  }

  render () {
    let data = this.props.post || {'image': '', body: '', popularity: 0}

    return (
      <div className='newscontent'>
        <div className='post'>
          <img className="postimage" src={imgProxy(data.image)} ref="lazyLoad"/>
          <div dangerouslySetInnerHTML={{__html: imgProxy(data.body)}}></div>
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
