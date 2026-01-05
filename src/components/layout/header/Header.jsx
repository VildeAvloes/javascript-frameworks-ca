import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/CartIcon";

export default function Header() {
  return (
    <header>
      <Link to="/">E-com shop</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
      <CartIcon count={0} />
    </header>
  );
}
