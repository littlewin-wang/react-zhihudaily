import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'

import Slider from './common/slider'
import NewsItem from './common/newsItem'
import More from './common/more'

class NewsList extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.addNews = this.addNews.bind(this)
  }

  componentDidMount() {
    this.props.actions.GET_LATEST_NEWS()
  }

  addNews () {
    let date = this.props.items[this.props.items.length-1].date
    this.props.actions.GET_HISTORY_NEWS(date)
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

const mapStateToProps = (state) => {
  return {
    items: state.news
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
)(NewsList)
