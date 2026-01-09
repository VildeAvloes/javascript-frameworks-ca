import { useState } from "react";
import s from "./ContactPage.module.scss";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.body.trim().length < 3) {
      newErrors.body = "Message must be at least 3 characters";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);

      setFormData({
        fullName: "",
        subject: "",
        email: "",
        body: "",
      });
    }
  }

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Contact</h1>
      <p className={s.paragraph}>
        Send us a message and we’ll get back to you.
      </p>

      <form className={s.form} onSubmit={handleSubmit} noValidate>
        <div className={s.field}>
          <label className={s.label} htmlFor="fullName">
            Full name
          </label>
          <input
            className={s.input}
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.subject}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className={s.error}>{errors.message}</p>}
        </div>
        <div className={s["submit-wrapper"]}>
          <button className={s.submit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
