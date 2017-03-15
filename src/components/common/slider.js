import React, { PropTypes } from 'react'
require('styles/common/slider.styl')

import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import { imgProxy } from '../../helpers/utils'

export default class Slider extends React.Component {
  componentDidUpdate () {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      autoplay: 2500,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplayDisableOnInteraction: false,
      preventClicks: false
    })
  }

  render () {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {this.props.images.map((item) => (
            <div className="swiper-slide" key={item.id}>
              <img src={imgProxy(item.image)} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}

Slider.propTypes = {
  images: PropTypes.array
}
