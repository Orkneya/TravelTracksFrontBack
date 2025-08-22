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
    <div>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
      <p>Price: €{camper.price}</p>
    </div>
  );
}
