import React from 'react'
import { Link } from 'react-router'
import { goTop } from '../../helpers/utils'
require('styles/common/float.styl')

export default class Float extends React.Component {
  componentDidMount () {
    this.refs.gotop.style.display = 'none'
    goTop('gotop')
  }

  render() {
    return (
      <div className="float">
        <div className="gotop" id='gotop' title="返回顶部" ref="gotop">
          <div className="arrow"></div>
          <div className="stick"></div>
        </div>
        {!this.props.isHome &&
          <Link to="/">
            <div className="gohome" title="返回主页">
              <div className="arrow"></div>
              <div className="stick"></div>
            </div>
          </Link>
        }
      </div>
    )
  }
}
