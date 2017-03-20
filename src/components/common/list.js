import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
require('styles/common/list.styl')

import { imgProxy } from '../../helpers/utils'

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ul>
          {this.props.items.map((item) => (
            <li title={item.name} key={item.id} onClick={ () => { browserHistory.push(`/${this.props.type}/${item.id}`) }}>
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
  type: PropTypes.string,
  items: PropTypes.array
}
