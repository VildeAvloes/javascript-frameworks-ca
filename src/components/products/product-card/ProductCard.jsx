import { useNavigate } from "react-router-dom";
import s from "./ProductCard.module.scss";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const title = product?.title ?? "Untitled";
  const image = product?.image?.url;
  const imageAlt = product?.image?.alt ?? title;

  function handleViewProduct() {
    navigate(`/product/${product.id}`);
  }

  return (
    <article className={s.card}>
      <div className={s["image-wrapper"]}>
        {image ? (
          <img className={s.image} src={image} alt={imageAlt} />
        ) : (
          <div className={s["image-placeholder"]} aria-hidden="true" />
        )}
      </div>

      <div className={s["text-wrapper"]}>
        <p className={s.title}>{title}</p>
        <p className={s.price}>{product.discountedPrice} kr</p>

        <button type="button" className={"cta"} onClick={handleViewProduct}>
          View product
        </button>
      </div>
    </article>
  );
}
