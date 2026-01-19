import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import s from "./CartPage.module.scss";

export default function CartPage() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  return (
    <section className={s.container}>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <>
          <p className={s.paragraph}>Your cart is empty.</p>
          <Link className={"link"} to="/">
            Back to store
          </Link>
        </>
      ) : (
        <>
          <ul className={s.list}>
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className={s.item}>
                <div className={s.info}>
                  <p className={s.title}>{item.title}</p>
                  <p className={s.price}>{item.discountedPrice} kr</p>
                </div>

                <Link className={"link"} to={`/product/${item.id}`}>
                  View
                </Link>
              </li>
            ))}
          </ul>

          <p className={s.total}>Total: {total} kr</p>
          <div className={s["checkout-wrapper"]}>
            <button
              type="button"
              className={"cta"}
              onClick={() => navigate("/checkout-success")}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}
