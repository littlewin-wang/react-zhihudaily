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
        console.log('done')
      }
    })
  })
}
