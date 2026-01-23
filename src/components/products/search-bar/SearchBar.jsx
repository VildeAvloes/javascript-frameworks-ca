import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import s from "./SearchBar.module.scss";

export default function SearchBar({ products = [] }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const suggestions = useMemo(() => {
    const suggestion = query.trim().toLowerCase();
    if (!suggestion) return [];

    return products.filter((product) =>
      product.title?.toLowerCase().includes(suggestion)
    );
  }, [query, products]);

  function handleSelect(id) {
    setQuery("");
    navigate(`/product/${id}`);
  }

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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />

      {query.trim() &&
        (suggestions.length > 0 ? (
          <ul className={s["suggestions-list"]} role="listbox">
            {suggestions.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  className={s["suggestion-item"]}
                  onClick={handleSelect}
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={s["no-results"]}>No results</p>
        ))}
    </div>
  );
}
