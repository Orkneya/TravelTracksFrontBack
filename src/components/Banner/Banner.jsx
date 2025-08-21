import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.css";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <h1>Campers of your dreams</h1>
      <p className={styles.comment}>
        You can find everything you want in our catalog
      </p>
      <button className={`button`} onClick={() => navigate("/catalog")}>
        View Now
      </button>
    </section>
  );
}
