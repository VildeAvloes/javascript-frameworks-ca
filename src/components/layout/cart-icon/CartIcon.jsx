import { useNavigate } from "react-router-dom";

export default function CartIcon({ count }) {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate("/cart")}>
      Cart ({count})
    </button>
  );
}
