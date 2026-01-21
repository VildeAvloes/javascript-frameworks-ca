import { useCart } from "../../../context/cart-context";
import s from "./ProductDetails.module.scss";

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();

  const hasDiscount = product.price !== product.discountedPrice;
  const savings = hasDiscount
    ? Math.round((product.price - product.discountedPrice) * 100) / 100
    : 0;

  const reviews = Array.isArray(product.reviews) ? product.reviews : [];
  const hasReviews = reviews.length > 0;

  return (
    <>
      <h1 className={s.title}>{product.title}</h1>

      <div className={s["image-wrapper"]}>
        {product.image?.url ? (
          <img
            className={s.image}
            src={product.image.url}
            alt={product.image.alt || product.title}
          />
        ) : (
          <div className={s["image-placeholder"]} aria-hidden="true">
            No Image
          </div>
        )}
      </div>

      <p className={s.description}>{product.description}</p>

      <div>
        {hasDiscount ? (
          <div className={s["price-info"]}>
            <p className={s["discounted-price"]}>{product.discountedPrice}kr</p>

            <p className={s["original-price"]}>
              Original price: {product.price} kr
            </p>

            <p className={s.savings}>Save {savings} kr</p>
          </div>
        ) : (
          <p className={s.price}>{product.price} kr</p>
        )}
      </div>

      <button type="button" className="cta" onClick={() => addToCart(product)}>
        Add to cart
      </button>

      <section className={s.reviews}>
        <h2 className={s["review-title"]}>Reviews</h2>

        {hasReviews ? (
          <ul className={s["reviews-list"]}>
            {reviews.map((review) => (
              <li className={s["review-item"]} key={review.id}>
                <div className={s["review-header"]}>
                  <p className={s["review-name"]}>{review.username}</p>
                  <p className={s["review-rating"]}>{review.rating}/5</p>
                </div>

                {review.description && (
                  <p className={s["review-text"]}>{review.description}</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className={s["review-text"]}>
            This product has no current reviews.
          </p>
        )}
      </section>
    </>
  );
}
