import React from 'react'
import c from '../Assets/img/weatherIcon/c.svg'
import h from '../Assets/img/weatherIcon/h.svg'
import hc from '../Assets/img/weatherIcon/hc.svg'
import hr from '../Assets/img/weatherIcon/hr.svg'
import lc from '../Assets/img/weatherIcon/lc.svg'
import s from '../Assets/img/weatherIcon/s.svg'
import sl from '../Assets/img/weatherIcon/sl.svg'
import sn from '../Assets/img/weatherIcon/sn.svg'
import t from '../Assets/img/weatherIcon/t.svg'
import lr from '../Assets/img/weatherIcon/lr.svg'

const Image = {
  c,
  h,
  hc,
  hr,
  lc,
  s,
  sl,
  sn,
  t,
  lr
}

export const WeatherIcon = (weather, size) => {
  let resizer = size === undefined ? 'auto' : size + 'px'
  let imageSize = {
    width: resizer,
    height: resizer
  }
  return (
    <img
      className='weather-icon'
      style={imageSize}
      src={Image[weather]}
      alt=''
    />
  )
}
