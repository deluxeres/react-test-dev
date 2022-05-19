import React from 'react'
import './HomeInner.scss'
import { Link } from 'react-router-dom'

function HomeRow() {
  return (
    <div className="inner">
      <div className="inner__container">
          <Link to='/pizza' className="inner__card pizza">
              <span>Пицца</span>
          </Link>
          <Link to='/sushi' className="inner__card sushi">
              <span>Суши</span>
          </Link>
          <Link to='/' className="inner__card salat">
              <span>Салаты</span>
          </Link>
          <Link to='/' className="inner__card more">
              <span>Другие блюда</span>
          </Link>
      </div>
    </div>
  )
}

export default HomeRow