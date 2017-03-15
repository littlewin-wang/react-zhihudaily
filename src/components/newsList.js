import React, { PropTypes } from 'react';

// import { prevDate } from '../../api/utils'
import Slider from './common/slider'
import NewsItem from './common/newsItem'
import More from './common/more'

export default class NewsList extends React.Component {
  // constructor () {
  //   super()
  //   this.state = {items: {'date': '', stories: [], top_stories: []}}
  // }

  // componentDidMount () {
  //   API.NewsResource()
  //     .then(res => {
  //       if (res.statusText === 'OK') {
  //         this.setState({
  //           items: res.data
  //         })
  //       }
  //     })
  // }

  render () {
    return (
      <div className='newslist'>
        <div className='newswrapper'>
          <Slider images={this.props.items.top_stories} />
          <h3 style={{paddingTop: '0.3rem', textAlign: 'center', fontSize: '2.2rem', color: '#7f8c8d'}}>{this.props.items.date}</h3>
          {this.props.items.stories.map((news) => (
            <NewsItem item={news} key={news.id}/>
          ))}
        </div>
        <More loading={true} />
      </div>
    )
  }
}

NewsList.propTypes = {
  items: PropTypes.object
}
