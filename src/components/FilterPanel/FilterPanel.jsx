import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilters } from "../../redux/slices/campersSlice.js";
import { selectFilters } from "../../redux/selectors/filtersSelector.js";
import styles from "./FilterPanel.module.css";
import { useState } from "react";
import { fetchFilteredCampers } from "../../redux/operations/filtersOperations.js";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [localFilters, setLocalFilters] = useState(filters);

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    const newEquipment = checked
      ? [...localFilters.equipment, value]
      : localFilters.equipment.filter((item) => item !== value);

    setLocalFilters({ ...localFilters, equipment: newEquipment });
  };

  const handleTypeChange = (type) => {
    setLocalFilters({ ...localFilters, form: type });
  };

  const handleSearch = () => {
    dispatch(setFilter(localFilters));
    dispatch(fetchFilteredCampers());
  };

  const handleReset = () => {
    setLocalFilters({
      location: "",
      equipment: [],
      form: "",
    });
    dispatch(resetFilters());
  };

  return (
    <div className={styles.panel}>
      <div className={styles.group}>
        <h3 className={styles.location}>Location</h3>
        <input
          type="text"
          className={styles.locInput}
          value={localFilters.location}
          placeholder="City"
          onChange={(e) =>
            setLocalFilters({ ...localFilters, location: e.target.value })
          }
        />
      </div>

      <p className={styles.filter}>Filters</p>

      <div className={styles.group}>
        <h4>Vehicle equipment</h4>
        <label>
          <input
            type="checkbox"
            value="AC"
            checked={localFilters.equipment.includes("AC")}
            onChange={handleEquipmentChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            value="kitchen"
            checked={localFilters.equipment.includes("kitchen")}
            onChange={handleEquipmentChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            value="bathroom"
            checked={localFilters.equipment.includes("bathroom")}
            onChange={handleEquipmentChange}
          />
          Bathroom
        </label>
      </div>

      <div className={styles.group}>
        <h4>Vehicle type</h4>
        <div className={styles.typeList}>
          <div
            className={`${styles.tag} ${
              localFilters.form === "panelTruck" ? styles.activeTag : ""
            }`}
            onClick={() => handleTypeChange("panelTruck")}
          >
            Van
          </div>
          <div
            className={`${styles.tag} ${
              localFilters.form === "fullyIntegrated" ? styles.activeTag : ""
            }`}
            onClick={() => handleTypeChange("fullyIntegrated")}
          >
            Fully Integrated
          </div>
          <div
            className={`${styles.tag} ${
              localFilters.form === "alcove" ? styles.activeTag : ""
            }`}
            onClick={() => handleTypeChange("alcove")}
          >
            Alcove
          </div>
        </div>
      </div>

      <div className={styles.btnRow}>
        <div className={styles.btnRow}>
          <button
            onClick={handleSearch}
            className={`button ${styles.searchBtn}`}
          >
            Search
          </button>
          <button onClick={handleReset} className={`button ${styles.resetBtn}`}>
            Reset search
          </button>
        </div>
      </div>
    </div>
  );
}
