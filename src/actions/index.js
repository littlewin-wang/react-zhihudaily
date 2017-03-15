import API from '../helpers/api'

export const GET_LATEST = (news) => {
  return {
    type: 'GET_LATEST',
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
