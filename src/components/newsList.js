import React, { PropTypes } from 'react'

import { prevDate } from '../helpers/utils'
import Slider from './common/slider'
import NewsItem from './common/newsItem'
import More from './common/more'

export default class NewsList extends React.Component {
  constructor (props) {
    super(props)
    this.addNews = this.addNews.bind(this);
  }

  addNews () {
    this.props.actions.GET_HISTORY_NEWS('20170101')
  }

  render () {
    return (
      <div className='newslist'>
        {this.props.items.map((item, index) => (
          <div className='newswrapper' key={item.date}>
            {!index &&
              <Slider images={item.top_stories} />
              ||
              <h3 style={{paddingTop: '0.3rem', textAlign: 'center', fontSize: '2.2rem', color: '#7f8c8d'}}>{item.date}</h3>
            }
            {item.stories.map((news) => (
              <NewsItem item={news} key={news.id}/>
            ))}
          </div>
        ))}
        <More loading={false} addFun={this.addNews}/>
      </div>
    )
  }
}

NewsList.propTypes = {
  items: PropTypes.array,
  actions: PropTypes.object
}
