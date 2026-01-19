import Footer from "../footer/Footer";
import Header from "../header/Header";
import s from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
}
