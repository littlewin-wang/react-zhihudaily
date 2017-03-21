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
    this.props.actions.GET_ID_POST(this.props.routeParams.id)
    this.props.actions.GET_ID_POST_COMMENT(this.props.routeParams.id)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      this.props.actions.GET_ID_POST(nextProps.routeParams.id)
      this.props.actions.GET_ID_POST_COMMENT(nextProps.routeParams.id)
    }
  }

  componentDidUpdate () {
    // this.check = setInterval(() => {
    //   if (this.refs.lazyLoad.complete) {
    //     this.refs.lazyLoad.style.display = ''
    //     clearInterval(this.check)
    //   }
    // }, 500)
  }

  render () {
    let data = this.props.post || {'image': '', body: '', popularity: 0}
    data.comments = this.props.comments || []

    return (
      <div className='newscontent'>
        <div className='post'>
          <img className="postimage" src={imgProxy(data.image)} ref="lazyLoad"/>
          <div dangerouslySetInnerHTML={{__html: imgProxy(data.body)}}></div>
          {data.body && data.comments &&
            <div className="comments">
              {data.comments.map((item) => (
                <div className="comment" key={item.id}>
                  <img src={imgProxy(item.avatar)} />
                  <div className="content">
                    <span className="author">{ item.author }</span>
                    <span className="time">{ new Date(item.time * 1000).toLocaleString() }</span>
                    <div>{ item.content }</div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
        <span className="imgFrom">图片库: { data.image_source }</span>
        {data.body &&
        <Badge popularity={data.popularity} />
        }
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    post: state.post,
    comments: state.comments
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
