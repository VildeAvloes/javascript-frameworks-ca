import s from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={s["search-wrapper"]}>
      <span
        className={`material-symbols-outlined ${s["search-icon"]}`}
        aria-hidden="true"
      >
        search
      </span>

      <input
        className={s["search-input"]}
        type="search"
        placeholder="Search products"
        aria-label="Search products"
      />
    </div>
  );
}
