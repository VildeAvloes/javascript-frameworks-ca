import s from "./Loader.module.scss";

function Loader({ text = "Loading…" }) {
  return (
    <div className={s.wrapper}>
      <div className={s.spinner} aria-hidden="true" />
      <p className={s.text}>{text}</p>
    </div>
  );
}

export default Loader;
