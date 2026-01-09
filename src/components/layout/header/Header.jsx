import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../products/search-bar/SearchBar";
import styles from "./Header.module.scss";
import CartIcon from "../cart-icon/CartIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles["row-one"]}>
          <Link to="/" className={styles.logo} onClick={() => setIsOpen(false)}>
            Noroff Shop
          </Link>

          <div className={styles["search-wrapper"]}>
            <SearchBar />
          </div>

          <div className={styles["cart-wrapper"]}>
            <CartIcon />
          </div>

          <button
            type="button"
            className={styles.burger}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              menu
            </span>
          </button>
        </div>

        <div className={`${styles["row-two"]} ${isOpen ? styles.open : ""}`}>
          <nav className={styles.nav}>
            <Link
              className={styles["nav-link"]}
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className={styles["nav-link"]}
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
