import "./card.scss";
import products from "../db.json";

function Card() {
  return (
    <div>
      <input type="text" placeholder="поиск пиццы" autoComplete="off" />
      <div className="card__wrapper">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <div className="card__container">
                <div className="card__img">
                  <img src={product.imageUrl} alt="card" />
                </div>
                <div className="card__title">
                  <span>{product.title}</span>
                </div>
                <div className="card__description">
                  <span>{product.description}</span>
                </div>
                <div className="card__details">
                  <span className="card__price">{product.price} грн</span>
                  <span className="card__gramm">{product.gramm} г</span>
                </div>
                <div className="card__order"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
