import React, { PropTypes } from 'react'
import { Link } from 'react-router'
require('styles/common/slider.styl')

import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import { imgProxy } from '../../helpers/utils'

export default class Slider extends React.Component {
  componentDidMount () {
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
              <Link to={'/news/' + item.id}>
                <img src={imgProxy(item.image)} />
                <p>{item.title}</p>
              </Link>
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
