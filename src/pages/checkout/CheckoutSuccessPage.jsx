import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section>
      <h1>Order successful</h1>
      <p>Thank you! Your order has been placed.</p>

      <Link className="cta" to="/">
        Back to store
      </Link>
    </section>
  );
}
