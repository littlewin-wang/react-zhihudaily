import React, { PropTypes } from 'react'
require('styles/common/list.styl')

import { imgProxy } from '../../helpers/utils'

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ul>
          {this.props.items.map((item) => (
            <li title={item.name} key={item.id}>
              <img src={imgProxy(item.thumbnail)} width="40" height="40" />
              { item.name }
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  items: PropTypes.array
}
