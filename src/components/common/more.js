import React, { PropTypes } from 'react'
require('styles/common/more.styl')

import Loading from './loading'

export default class More extends React.Component {
  render() {
    const isLoading = this.props.loading
    let content = null
    if (isLoading) {
      content = <Loading mask={false}/>
    } else {
      content = <span class="more-icon">加载更多</span>
    }
    return (
      <div className={this.props.loading ? 'more isloading' : 'more'}>
        {content}
      </div>
    );
  }
}

More.propTypes = {
  loading: PropTypes.bool
};
