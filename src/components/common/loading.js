import React, { PropTypes } from 'react'
require('styles/common/loading.styl')

export default class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <div className="loading-start"></div>
        {this.props.mask &&
          <div className="floating"></div>
        }
      </div>
    );
  }
}

Loading.propTypes = {
  mask: PropTypes.bool
};
