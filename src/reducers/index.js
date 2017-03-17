// import { ADD_NEWS, GET_NEWS, GET_TOPICS, GET_SECTIONS, GET_POST, GET_TOPIC_POSTS, GET_SECTION_LIST, ADD_INDEX} from '../actions'

const news = (state = [], action) => {
  switch (action.type) {
    case 'GET_LATEST':
      return [action.news]

    case 'ADD_NEWS':
      return [
        ...state,
        action.news
      ]

    default:
      return state
  }
}

const topics = (state = [], action) => {
  switch (action.type) {
    case 'GET_TOPICS':
      return action.topics.others

    default:
      return state
  }
}

const sections = (state = [], action) => {
  switch (action.type) {
    case 'GET_SECTIONS':
      return action.sections.data

    default:
      return state
  }
}

export { news, topics, sections }
