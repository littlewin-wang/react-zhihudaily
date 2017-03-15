import React from 'react'

import API from '../helpers/index'
import NewsItem from './common/newsItem'

export default class SectionList extends React.Component {
  constructor () {
    super()
    this.state = {sectionList: {'name': '', stories: [], timestamp: 0}}
  }

  componentDidMount () {
    API.SectionIdResource(1)
      .then(res => {
        if (res.statusText === 'OK') {
          this.setState({
            sectionList: res.data
          })
        }
      })
  }

  render () {
    return (
      <div className="sectionlist">
        {this.state.sectionList.stories &&
          <div className="section">
            {this.state.sectionList.stories.map((news) => (
              <NewsItem item={news} key={news.id}/>
            ))}
          </div>
        }
      </div>
    )
  }
}
