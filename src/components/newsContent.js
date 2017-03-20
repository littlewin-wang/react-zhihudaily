import React from 'react'
require('styles/newsContent.styl')

import API from '../helpers/api'
import Badge from './common/badge'
import { imgProxy } from '../helpers/utils'

export default class NewsContent extends React.Component {
  constructor () {
    super()
    this.state = {post: {'image': '', body: '', popularity: 0}}
  }

  componentDidMount () {
    API.NewsIdResource(9218049)
      .then(res => {
        if (res.statusText === 'OK') {
          this.setState({
            post: res.data
          })
        }
      })
  }

  render () {
    return (
      <div className='newscontent'>
        <div className='post'>
          <img className="postimage" src={imgProxy(this.state.post.image)} />
          <div dangerouslySetInnerHTML={{__html: this.state.post.body}}></div>
        </div>
        {this.state.post.body &&
          <Badge popularity={this.state.post.popularity} />
        }
      </div>
    )
  }
}
