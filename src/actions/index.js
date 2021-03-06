import API from '../helpers/api'

export const GET_LATEST = (news) => {
  return {
    type: 'GET_LATEST',
    news
  }
}

export const ADD_NEWS = (news) => {
  return {
    type: 'ADD_NEWS',
    news
  }
}

export const GET_POST = (post) => {
  return {
    type: 'GET_POST',
    post
  }
}

export const GET_POST_COMMENT = (comments) => {
  return {
    type: 'GET_POST_COMMENT',
    comments
  }
}

export const GET_TOPICS = (topics) => {
  return {
    type: 'GET_TOPICS',
    topics
  }
}

export const GET_SECTIONS = (sections) => {
  return {
    type: 'GET_SECTIONS',
    sections
  }
}

export const GET_TOPIC_POSTS = (topicPosts) => {
  return {
    type: 'GET_TOPIC_POSTS',
    topicPosts
  }
}

export const GET_SECTION_POSTS = (sectionPosts) => {
  return {
    type: 'GET_SECTION_POSTS',
    sectionPosts
  }
}

export const GET_LATEST_NEWS = () => {
  return (dispatch => {
    API.NewsResource().then(res => {
      if (res.statusText === 'OK') {
        dispatch(GET_LATEST(res.data))
      }
    })
  })
}

export const GET_HISTORY_NEWS = (date) => {
  return (dispatch => {
    API.NewsDateResource(date).then(res => {
      if (res.statusText === 'OK') {
        dispatch(ADD_NEWS(res.data))
      }
    })
  })
}

export const GET_ID_POST = (id) => {
  let post

  return (dispatch => {
    API.NewsIdResource(id).then(res => {
      if (res.statusText === 'OK') {
        post = res.data
      }
      return API.NewsInfoResource(id)
    }).then(res2 => {
      if (res2.statusText === 'OK') {
        let info = res2.data
        // 将post info属性赋值给post
        for (let item in info) {
          if ({}.hasOwnProperty.call(info, item)) {
            post[item] = info[item]
          }
        }

        dispatch(GET_POST(post))
      }
    })
  })
}

export const GET_ID_POST_COMMENT = (id) => {
  let comments

  return (dispatch => {
    API.LongCommentsResource(id).then(res => {
      if (res.statusText === 'OK') {
        comments = res.data.comments
      }
      return API.ShortCommentsResource(id)
    }).then(res2 => {
      if (res2.statusText === 'OK') {
        comments = comments.concat(res2.data.comments)
        dispatch(GET_POST_COMMENT(comments))
      }
    })
  })
}

export const GET_ALL_TOPICS = () => {
  return (dispatch => {
    API.TopicsResource().then(res => {
      if (res.statusText === 'OK') {
        dispatch(GET_TOPICS(res.data))
      }
    })
  })
}

export const GET_ALL_SECTIONS = () => {
  return (dispatch => {
    API.SectionsResource().then(res => {
      if (res.statusText === 'OK') {
        dispatch(GET_SECTIONS(res.data))
      }
    })
  })
}

export const GET_TOPIC_ID_POSTS = (id) => {
  return (dispatch => {
    API.TopicIdResource(id).then(res => {
      if (res.statusText === 'OK') {
        dispatch(GET_TOPIC_POSTS(res.data))
      }
    })
  })
}

export const GET_SECTION_ID_POSTS = (id) => {
  return (dispatch => {
    API.SectionIdResource(id).then(res => {
      if (res.statusText === 'OK') {
        dispatch(GET_SECTION_POSTS(res.data))
      }
    })
  })
}
