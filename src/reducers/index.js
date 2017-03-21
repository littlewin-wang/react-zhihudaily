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

const post = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POST':
      return action.post

    default:
      return state
  }
}

const comments = (state = [], action) => {
  switch (action.type) {
    case 'GET_POST_COMMENT':
      return action.comments

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

const topicPosts = (state = {}, action) => {
  switch (action.type) {
    case 'GET_TOPIC_POSTS':
      return action.topicPosts

    default:
      return state
  }
}

const sectionPosts = (state = {}, action) => {
  switch (action.type) {
    case 'GET_SECTION_POSTS':
      return action.sectionPosts

    default:
      return state
  }
}

export { news, post, comments, topics, sections, topicPosts, sectionPosts }
