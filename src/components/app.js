require('normalize.css/normalize.css')
require('styles/base.css')
require('styles/zhihu.css')

import React from 'react'

import Header from './common/header'

import route from '../route'

export default class AppComponent extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div className="index">
        <Header data={[]}/>
        { route }
      </div>
    )
  }
}
