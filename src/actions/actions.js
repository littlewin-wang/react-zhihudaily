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
export const addNews = news => ({ type: ADD_NEWS, news })
export const getNews = () => ({ type: GET_NEWS })
export const getTopics = () => ({type: GET_TOPICS })
export const getSections = () => ({type: GET_SECTIONS })
export const getPost = (id, func) => ({type: GET_POST, id, func })
export const getTopicPosts = (id) => ({ type: GET_TOPIC_POSTS, id })
export const getSectionList = (id) => ({ type: GET_SECTION_LIST, id })
export const addIndex = () => ({type: ADD_INDEX })
