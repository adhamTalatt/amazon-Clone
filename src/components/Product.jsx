import starIcon from "../images/icons/star.png";
import { useAuth } from "../context/GlobalState";
import "./Product.css";
import { useNavigate } from "react-router-dom";
export default function Product({ title, price, image, rating, id }) {
  const rat = Number(Math.round(rating));
  const { user, dispatch } = useAuth();
  const nabigate = useNavigate();
  function addToBasket() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  }
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rat)
          .fill()
          .map((_, i) => {
            return (
              <p key={i}>
                <img src={starIcon} />
              </p>
            );
          })}
      </div>

      <div className="imagecontaer">
        <img src={image} className="product-img" />
      </div>
      <button
        onClick={
          user
            ? addToBasket
            : () => {
                nabigate("/login");
              }
        }
      >
        Add to Basket
      </button>
    </div>
  );
}
