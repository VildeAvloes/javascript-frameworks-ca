import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{new Date().getFullYear()} E-com shop</p>
    </footer>
  );
}
