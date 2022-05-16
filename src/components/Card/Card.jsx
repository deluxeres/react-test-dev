import React from "react";
import './card.scss'
import './card.scss'

function Card() {
  return (
    <div className="card__wrapper">
      <div className="card">
        <div className="card__img">
          <img
            src="https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg"
            alt="card"
          />
        </div>
        <div className="card__title">
          <span>Название</span>
        </div>
        <div className="card__description">
          <span>Этот товар был произведен в Китае. Мы любим его использовать</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
