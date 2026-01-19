import { useState } from "react";
import s from "./ContactPage.module.scss";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  function onTextInputChange(event) {
    const value = event.target.value;

    if (event.target.name === "fullName") {
      setFullName(value);
    }

    if (event.target.name === "subject") {
      setSubject(value);
    }

    if (event.target.name === "email") {
      setEmail(value);
    }

    if (event.target.name === "message") {
      setMessage(value);
    }
  }

  function validate() {
    const newErrors = {};

    if (fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (message.trim().length < 3) {
      newErrors.message = "Message must be at least 3 characters";
    }

    return newErrors;
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", { fullName, subject, email, message });

      setFullName("");
      setSubject("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  }

  return (
    <section className={s.container}>
      <h1 className={s.title}>Contact</h1>
      <p className={s.paragraph}>
        Send us a message and we’ll get back to you.
      </p>

      <form className={s.form} onSubmit={onFormSubmit} noValidate>
        <div className={s.field}>
          <label className={s.label} htmlFor="fullName">
            Full name
          </label>
          <input
            className={s.input}
            id="fullName"
            name="fullName"
            type="text"
            value={fullName}
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
            value={email}
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
            value={subject}
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
            value={message}
            onChange={onTextInputChange}
          />
          {errors.message && <p className={s.error}>{errors.message}</p>}
        </div>
        <div className={s["submit-wrapper"]}>
          <button className={"cta"} type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
