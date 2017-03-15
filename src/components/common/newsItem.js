import React, { PropTypes } from 'react';
require('styles/common/newsItem.styl')

import { imgProxy } from '../../helpers/utils'

export default class NewsItem extends React.Component {
  render() {
    const item = this.props.item
    return(
      <a>
        <div className="news">
          {item.images &&
            <img src={imgProxy(item.images[0])} />
          }
          <p>{ item.title }</p>
          {item.multipic &&
            <em>多图</em>
          }
        </div>
      </a>
    )
  }
}

NewsItem.propTypes = {
  item: PropTypes.object
}
