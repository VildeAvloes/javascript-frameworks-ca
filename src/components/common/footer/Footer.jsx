import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <p>{new Date().getFullYear()} © EVERY</p>
    </footer>
  );
}
