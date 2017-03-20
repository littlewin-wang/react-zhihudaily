import React, { PropTypes } from 'react'
import { Link } from 'react-router'

require('styles/common/newsItem.styl')

import { imgProxy } from '../../helpers/utils'

export default class NewsItem extends React.Component {
  render() {
    const item = this.props.item
    return(
      <Link to={'/news/' + item.id}>
        <div className="news">
          {item.images &&
            <img src={imgProxy(item.images[0])} />
          }
          <p>{ item.title }</p>
          {item.multipic &&
            <em>多图</em>
          }
        </div>
      </Link>
    )
  }
}

NewsItem.propTypes = {
  item: PropTypes.object
}
