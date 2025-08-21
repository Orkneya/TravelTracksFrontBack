import { Link } from "react-router-dom";
import styles from "./CatalogItem.module.css";

export default function CatalogItem({ camper }) {
  console.log(camper.equipment);
  return (
    <div className={styles.card}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={styles.image}
      />

      <div className={styles.info}>
        <div className={styles.header}>
          <h2 className={styles.title}>{camper.name}</h2>
          <span className={styles.price}>€{camper.price}</span>
        </div>
        <div className={styles.meta}>
          <span>
            ⭐ {camper.rating} ({camper.reviews.length} reviews)
          </span>
          <span>{camper.location}</span>
        </div>
        <p className={styles.description}>{camper.description}</p>
        {/* <div className={styles.features}>
          {camper.equipment.map((eq) => (
            <span key={eq} className={styles.badge}>
              {eq}
            </span>
          ))}
        </div> */}
        <Link
          to={`/catalog/${camper.id}`}
          className={`button ${styles.details}`}
        >
          Show More
        </Link>
      </div>
    </div>
  );
}
