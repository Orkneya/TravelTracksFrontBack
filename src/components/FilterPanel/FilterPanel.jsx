import { useDispatch, useSelector } from "react-redux";
import { setFilter, resetFilters } from "../../redux/slices/campersSlice.js";
import { selectFilters } from "../../redux/selectors/filtersSelector.js";
import styles from "./FilterPanel.module.css";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    const newEquipment = checked
      ? [...filters.equipment, value]
      : filters.equipment.filter((item) => item !== value);

    dispatch(setFilter({ equipment: newEquipment }));
  };

  // const handleTypeChange = (e) => {
  //   dispatch(setFilter({ type: e.target.value }));
  // };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <aside className={styles.panel}>
      <h3>Filters</h3>

      <div className={styles.group}>
        <h4>Vehicle equipment</h4>
        <label>
          <input
            type="checkbox"
            value="AC"
            checked={filters.equipment.includes("AC")}
            onChange={handleEquipmentChange}
          />
          AC
        </label>
        <label>
          <input
            type="checkbox"
            value="kitchen"
            checked={filters.equipment.includes("kitchen")}
            onChange={handleEquipmentChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            value="bathroom"
            checked={filters.equipment.includes("bathroom")}
            onChange={handleEquipmentChange}
          />
          Bathroom
        </label>
      </div>

      {/* <div className={styles.group}>
        <h4>Vehicle type</h4>
        <select value={filters.type || ""} onChange={handleTypeChange}>
          <option value="">Any</option>
          <option value="van">Van</option>
          <option value="rv">RV</option>
          <option value="caravan">Caravan</option>
        </select>
      </div> */}

      <button onClick={handleReset} className={`button ${styles.resetBtn}`}>
        Search
      </button>
    </aside>
  );
}
