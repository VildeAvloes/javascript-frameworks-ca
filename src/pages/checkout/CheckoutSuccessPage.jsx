import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import s from "./CheckoutSuccessfulPage.module.scss";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className={s.container}>
      <h1>Order successful</h1>
      <p>Thank you! Your order has been placed.</p>

      <Link className={"link"} to="/">
        Go back to store
      </Link>
    </section>
  );
}
