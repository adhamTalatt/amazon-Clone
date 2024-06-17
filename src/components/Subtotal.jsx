import CurrencyFormat from "react-currency-format";
import { useAuth } from "../context/GlobalState";
import { getBasketTotall } from "../context/AppReducer";
import "./subtotal.css";
import { useNavigate } from "react-router-dom";
export default function Subtotal() {
  const { basket } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type={"checkbox"} /> This order contatins a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotall(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={() => {
          navigate("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
