// import { ADD_NEWS, GET_NEWS, GET_TOPICS, GET_SECTIONS, GET_POST, GET_TOPIC_POSTS, GET_SECTION_LIST, ADD_INDEX} from '../actions'

const news = (state = {
  date: '',
  stories: [],
  top_stories: []
}, action) => {
  switch (action.type) {
    case 'GET_LATEST':
      return Object.assign({}, action.news)

    default:
      return state
  }
}

export { news }
