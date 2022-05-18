import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './HomePage.scss'
import Card from '../Card/Card'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function HomePage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home">
      <div className="home__slider">
        <Slider {...settings}>
          <div className="home__slider__img">
              <img src="https://prontopizza.ua/wp-content/uploads/2022/01/11_sajt_veb_nov-2-1920x620.jpg" alt="banner" />
          </div>
          <div className="home__slider__img">
              <img src="https://prontopizza.ua/wp-content/uploads/2022/03/volonterska_sajt-1920x620.jpg" alt="banner" />
          </div>
          <div className="home__slider__img">
              <img src="https://prontopizza.ua/wp-content/uploads/2022/04/nalipky_sajt_veb_nov-1920x620.jpg" alt="banner" />
          </div>
        </Slider>
      </div>
      <div className="home__row">
        <div className="home__row-pizza">
            <span className="home__row-title">Пицца</span>
            <div className="home__row-overflow">
                <Card />
            </div>
            <Link to="/pizza">
                  <Button colorScheme='red'>Посмотреть все</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
