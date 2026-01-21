import { useState } from "react";
import s from "./Form.module.scss";

export default function Form({
  initialValues,
  validate,
  onValidSubmit,
  submitText = "Submit",
  children,
}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function onTextInputChange(event) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onValidSubmit(values);
      setValues(initialValues);
      setErrors({});
    }
  }

  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      {children({ values, errors, onTextInputChange, s: s })}

      <div className={s["button-wrapper"]}>
        <button className="cta" type="submit">
          {submitText}
        </button>
      </div>
    </form>
  );
}
