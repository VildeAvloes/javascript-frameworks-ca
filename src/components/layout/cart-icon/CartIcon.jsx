import { useNavigate } from "react-router-dom";
import s from "./CartIcon.module.scss";

export default function CartIcon({ count = 2 }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={s.button}
      onClick={() => navigate("/cart")}
      aria-label="Cart"
    >
      <span className="material-symbols-outlined" aria-hidden="true">
        shopping_bag
      </span>

      {count > 0 && (
        <span className={s.count} aria-hidden="true">
          {count}
        </span>
      )}
    </button>
  );
}
