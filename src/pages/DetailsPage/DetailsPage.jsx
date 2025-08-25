import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  selectCamper,
  selectLoading,
  selectError,
} from "../../redux/selectors/campersSelector.js";

import { fetchCamper } from "../../redux/operations/campersOperations.js";
import Loader from "../../components/Loader/Loader.jsx";
import styles from "./DetailsPage.module.css";

export default function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamper(id));
    }
  }, [id, dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!camper) return <p>Camper not found</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2>{camper.name}</h2>

        <div className={styles.gallery}>
          {camper.gallery.map((img, i) => (
            <img key={i} src={img.thumb} alt={camper.name} />
          ))}
        </div>

        <p className={styles.description}>{camper.description}</p>

        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.features}>
              {[
                camper.transmission && camper.transmission,
                camper.AC && "AC",
                camper.engine,
                camper.kitchen && "Kitchen",
                camper.bathroom && "Bathroom",
                camper.TV && "TV",
                camper.radio && "Radio",
                camper.refrigerator && "Refrigerator",
                camper.microwave && "Microwave",
                camper.gas && "Gas",
                camper.water && "Water",
              ]
                .filter(Boolean)
                .map((eq) => (
                  <span key={eq} className={styles.badge}>
                    {eq}
                  </span>
                ))}
            </div>

            <div className={styles.details}>
              <h3>Vehicle details</h3>
              <ul>
                <li>
                  <span>Form</span>
                  <span>{camper.form}</span>
                </li>
                <li>
                  <span>Length</span>
                  <span>{camper.length}</span>
                </li>
                <li>
                  <span>Width</span>
                  <span>{camper.width}</span>
                </li>
                <li>
                  <span>Height</span>
                  <span>{camper.height}</span>
                </li>
                <li>
                  <span>Tank</span>
                  <span>{camper.tank}</span>
                </li>
                <li>
                  <span>Consumption</span>
                  <span>{camper.consumption}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.right}>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <form className={styles.form}>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Booking date" />
              <textarea placeholder="Comment"></textarea>
              <button className={`button ${styles.send}`} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
