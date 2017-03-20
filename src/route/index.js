import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from '../components/app'
import NewsContent from '../components/newsContent'
import NewsList from '../components/newsList'
import SectionList from '../components/sectionList'
import TopicList from '../components/topicList'

const route = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={NewsList} />
      <Route path='news/:id' component={NewsContent} />
      <Route path='topic/:id' component={TopicList} />
      <Route path='section/:id' component={SectionList} />
    </Route>
  </Router>
)

export default route
