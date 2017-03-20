import React from 'react'

import API from '../helpers/api'
import NewsItem from './common/newsItem'
import { imgProxy } from '../helpers/utils'

export default class TopicList extends React.Component {
  constructor () {
    super()
    this.state = {topicPosts: {'description': '', image: '', stories: [], timestamp: 0}}
  }

  componentDidMount () {
    API.TopicIdResource(3)
      .then(res => {
        if (res.statusText === 'OK') {
          this.setState({
            topicPosts: res.data
          })
        }
      })
  }

  render () {
    return (
      <div className="topiclist">
        <div className="img" style={{position: 'relative'}}>
          <img src={imgProxy(this.state.topicPosts.image)} />
          <p style={{position: 'absolute', left: '5%', bottom: '5%', textAlign: 'center', color: '#fff', cursor: 'pointer'}}>
            {this.state.topicPosts.description}
          </p>
        </div>
        {this.state.topicPosts.stories &&
          <div>
            {this.state.topicPosts.stories.map((news) => (
              <NewsItem item={news} key={news.id}/>
            ))}
          </div>
        }
      </div>
    )
  }
}
