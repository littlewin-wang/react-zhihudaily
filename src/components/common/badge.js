import React, { PropTypes } from 'react'
require('styles/common/badge.styl')

export default class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="agree">
          <button className="up" title="赞同">
            <i className="icon" />
            <span className="count">{ this.props.popularity }</span>
          </button>
        </div>
      </div>
    )
  }
}

Badge.propTypes = {
  popularity: PropTypes.number
}
