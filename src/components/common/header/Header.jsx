import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import CartIcon from "../cart-icon/CartIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <button
          type="button"
          className={s.burger}
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={"material-symbols-outlined"} aria-hidden="true">
            menu
          </span>
        </button>
        <Link to="/" className={s.logo} onClick={() => setIsOpen(false)}>
          Noroff Shop
        </Link>
        <nav className={`${s.nav} ${isOpen ? s.open : " "}`}>
          <Link
            className={s["nav-link"]}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            className={s["nav-link"]}
            to="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className={s["cart-wrapper"]}>
          <CartIcon />
        </div>
      </div>
    </header>
  );
}
