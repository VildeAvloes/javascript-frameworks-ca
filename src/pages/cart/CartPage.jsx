import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import Form from "../../components/common/form/Form";
import s from "./CartPage.module.scss";

const checkoutInitialValues = {
  fullName: "",
  cardDetails: "",
  expDate: "",
  csv: "",
};

export default function CartPage() {
  const { cart, total, removeFromCart } = useCart();
  const navigate = useNavigate();

  const groupedCart = cart.reduce((acc, item) => {
    const existing = acc.find((p) => p.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }

    return acc;
  }, []);

  function validateCheckout(values) {
    const errors = {};

    if (values.fullName.trim().length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }

    if (values.cardDetails.trim().length < 8) {
      errors.cardDetails = "Card details must be at least 8 characters";
    }

    if (values.expDate.trim().length < 4) {
      errors.expDate = "Exp date must be at least 4 characters";
    }

    if (values.csv.trim().length < 3) {
      errors.csv = "CSV must be at least 3 characters";
    }

    return errors;
  }

  function handleCheckoutSubmit(values) {
    console.log("Checkout values:", values);
    navigate("/checkout-success");
  }

  return (
    <section className={s.container}>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <div className={s["empty-message"]}>
          <p className={s.paragraph}>Your cart is empty.</p>
          <Link className={"link"} to="/">
            Back to store
          </Link>
        </div>
      ) : (
        <>
          <ul className={s.list}>
            {groupedCart.map((item, index) => (
              <li key={`${item.id}-${index}`} className={s.item}>
                <div className={s.info}>
                  <p className={s.title}>{item.title}</p>
                  <p className={s.price}>
                    {item.discountedPrice} kr × {item.quantity}
                  </p>
                </div>

                <div className={s.actions}>
                  <Link className={"link"} to={`/product/${item.id}`}>
                    View
                  </Link>
                  <button
                    type="button"
                    className={s.remove}
                    onClick={() => removeFromCart(index)}
                  >
                    <span
                      className="material-symbols-outlined"
                      aria-hidden="true"
                    >
                      delete
                    </span>
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className={s.total}>Total: {total} kr</p>

          <h2 className={s.header}>Payment Details</h2>

          <Form
            initialValues={checkoutInitialValues}
            validate={validateCheckout}
            onValidSubmit={handleCheckoutSubmit}
            submitText="Checkout"
          >
            {({ values, errors, onTextInputChange, formStyles }) => (
              <>
                <div className={formStyles.field}>
                  <label className={formStyles.label} htmlFor="fullName">
                    Full name
                  </label>
                  <input
                    className={formStyles.input}
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={values.fullName}
                    onChange={onTextInputChange}
                  />
                  {errors.fullName && (
                    <p className={formStyles.error}>{errors.fullName}</p>
                  )}
                </div>

                <div className={formStyles.field}>
                  <label className={formStyles.label} htmlFor="cardDetails">
                    Card details
                  </label>
                  <input
                    className={formStyles.input}
                    id="cardDetails"
                    name="cardDetails"
                    type="text"
                    value={values.cardDetails}
                    onChange={onTextInputChange}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardDetails && (
                    <p className={formStyles.error}>{errors.cardDetails}</p>
                  )}
                </div>

                <div className={formStyles.row}>
                  <div className={`${formStyles.field} ${formStyles.col}`}>
                    <label className={formStyles.label} htmlFor="expDate">
                      Exp date
                    </label>
                    <input
                      className={`${formStyles.input} ${formStyles["input-small"]}`}
                      id="expDate"
                      name="expDate"
                      type="text"
                      placeholder="MM/YY"
                      value={values.expDate}
                      onChange={onTextInputChange}
                    />
                    {errors.expDate && (
                      <p className={formStyles.error}>{errors.expDate}</p>
                    )}
                  </div>

                  <div className={`${formStyles.field} ${formStyles.col}`}>
                    <label className={formStyles.label} htmlFor="csv">
                      CSV
                    </label>
                    <input
                      className={`${formStyles.input} ${s["input-small"]}`}
                      id="csv"
                      name="csv"
                      type="text"
                      inputMode="numeric"
                      value={values.csv}
                      onChange={onTextInputChange}
                      placeholder="123"
                    />
                    {errors.csv && (
                      <p className={formStyles.error}>{errors.csv}</p>
                    )}
                  </div>
                </div>
              </>
            )}
          </Form>
        </>
      )}
    </section>
  );
}
