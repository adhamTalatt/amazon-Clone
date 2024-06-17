import adImage from "../images/checkoutAd.jpg";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import "./checkOut.css";
import Subtotal from "./Subtotal";
export default function CkeckOut() {
  const { user, basket } = useAuth();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={adImage} />
        <div>
          <h3>Hello , {user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {basket.length > 0 ? (
            basket.map((item) => {
              return (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })
          ) : (
            <p>
              {" "}
              You have no items in your basket.To buy one or more
              items,click"Add to basket".
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}
