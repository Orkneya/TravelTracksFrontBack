import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectLoading,
  selectError,
  selectHasMore,
  selectPage,
} from "../../redux/selectors/campersSelector.js";
import CatalogItem from "../../components/CatalogItems/CatalogItem.jsx";
import styles from "./CatalogPage.module.css";
import Loader from "../../components/Loader/Loader.jsx";
import { useEffect } from "react";
import { fetchCampers } from "../../redux/operations/campersOperations.js";
import { incrementPage } from "../../redux/slices/campersSlice.js";
import { selectFilters } from "../../redux/selectors/filtersSelector.js";
import { fetchFilteredCampers } from "../../redux/operations/filtersOperations.js";
import FilterPanel from "../../components/FilterPanel/FilterPanel.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const hasMore = useSelector(selectHasMore);
  const page = useSelector(selectPage);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    if (filters.equipment.length > 0 || filters.type) {
      dispatch(fetchFilteredCampers());
    } else {
      dispatch(fetchCampers({ page: 1, limit: 12 }));
    }
  }, [dispatch, filters]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    dispatch(incrementPage());
    dispatch(fetchCampers({ page: nextPage, limit: 12 }));
  };

  if (loading && campers.length === 0) return <Loader />;
  if (error) return <p className={styles.info}>Error: {error}</p>;

  return (
    <div className={styles.layout}>
      <FilterPanel />

      <div className={styles.wrapper}>
        {campers.length === 0 ? (
          <p className={styles.info}>No campers found</p>
        ) : (
          campers.map((camper) => (
            <CatalogItem key={camper.id} camper={camper} />
          ))
        )}

        {loading && campers.length > 0 && <Loader />}

        {hasMore && !loading && (
          <button onClick={handleLoadMore} className={styles.loadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
