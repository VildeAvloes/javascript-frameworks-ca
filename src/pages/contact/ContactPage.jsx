import Form from "../../components/common/form/Form";
import s from "./ContactPage.module.scss";

export default function ContactPage() {
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  function validate(values) {
    const errors = {};

    if (values.fullName.trim().length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (values.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    if (values.message.trim().length < 3) {
      errors.message = "Message must be at least 3 characters";
    }

    return errors;
  }

  function handleValidSubmit(values) {
    console.log("Contact form data:", values);
  }

  return (
    <section className={s.container}>
      <h1 className={s.title}>Contact</h1>
      <p className={s.paragraph}>
        Send us a message and we’ll get back to you.
      </p>

      <Form
        initialValues={initialValues}
        validate={validate}
        onValidSubmit={handleValidSubmit}
        submitText="Submit"
      >
        {({ values, errors, onTextInputChange, s }) => (
          <>
            <div className={s.field}>
              <label className={s.label} htmlFor="fullName">
                Full name
              </label>
              <input
                className={s.input}
                id="fullName"
                name="fullName"
                type="text"
                value={values.fullName}
                onChange={onTextInputChange}
              />
              {errors.fullName && <p className={s.error}>{errors.fullName}</p>}
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="email">
                Email
              </label>
              <input
                className={s.input}
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={onTextInputChange}
              />
              {errors.email && <p className={s.error}>{errors.email}</p>}
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="subject">
                Subject
              </label>
              <input
                className={s.input}
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={onTextInputChange}
              />
              {errors.subject && <p className={s.error}>{errors.subject}</p>}
            </div>

            <div className={s.field}>
              <label className={s.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={s.textarea}
                id="message"
                name="message"
                rows="6"
                value={values.message}
                onChange={onTextInputChange}
              />
              {errors.message && <p className={s.error}>{errors.message}</p>}
            </div>
          </>
        )}
      </Form>
    </section>
  );
}
