import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles["search-wrapper"]}>
      <span
        className={`material-symbols-outlined ${styles["search-icon"]}`}
        aria-hidden="true"
      >
        search
      </span>

      <input
        className={styles["search-input"]}
        type="search"
        placeholder="Search products"
        aria-label="Search products"
      />
    </div>
  );
}
