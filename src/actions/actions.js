/*
 * action 类型
 */

export const ADD_NEWS = 'ADD_NEWS'
export const GET_NEWS = 'GET_NEWS'
export const GET_TOPICS = 'GET_TOPICS'
export const GET_SECTIONS = 'GET_SECTIONS'
export const GET_POST = 'GET_POST'
export const GET_TOPIC_POSTS = 'GET_TOPIC_POST'
export const GET_SECTION_LIST = 'GET_SECTION_LIST'
export const ADD_INDEX = 'ADD_INDEX'

/*
 * 其它的常量
 */



/*
 * action 创建函数
 */

export function addNews(news) {
  return { type: ADD_NEWS, news }
}

export function getNews() {
  return { type: GET_NEWS }
}

export function getTopics() {
  return { type: GET_TOPICS }
}

export function getSections() {
  return { type: GET_SECTIONS }
}

export function getPost(id, func) {
  return { type: GET_POST, id, func }
}

export function getTopicPosts(id) {
  return { type: GET_TOPIC_POSTS, id }
}

export function getSectionList(id) {
  return { type: GET_SECTION_LIST, id }
}

export function addIndex() {
  return { type: ADD_INDEX }
}
