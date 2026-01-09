import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../products/search-bar/SearchBar";
import s from "./Header.module.scss";
import CartIcon from "../cart-icon/CartIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s["row-one"]}>
          <button
            type="button"
            className={s.burger}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              menu
            </span>
          </button>
          <Link to="/" className={s.logo} onClick={() => setIsOpen(false)}>
            Noroff Shop
          </Link>

          <div className={s["search-wrapper"]}>
            <SearchBar />
          </div>

          <div className={s["cart-wrapper"]}>
            <CartIcon />
          </div>
        </div>

        <div className={`${s["row-two"]} ${isOpen ? s.open : ""}`}>
          <nav className={s.nav}>
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
        </div>
      </div>
    </header>
  );
}
