import starIcon from "../images/icons/star.png";
import "./checkoutProduct.css";
import { useAuth } from "../context/GlobalState";
export default function CheckoutProduct({ id, title, image, price, rating }) {
  const { dispatch } = useAuth();
  function removeFromBasket() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <p key={i}>
                  <img src={starIcon} />
                </p>
              );
            })}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}
