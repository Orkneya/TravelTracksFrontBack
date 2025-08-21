import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamper } from "../../redux/selectors/campersSelector.js";

export default function DetailsPage() {
  const { id } = useParams();
  const camper = useSelector(selectCamper);

  if (!camper || camper.id !== id) {
    return <p>Camper not found</p>;
  }

  return (
    <div>
      <h1>{camper.name}</h1>
      <p>{camper.description}</p>
      <p>Price: €{camper.price}</p>
    </div>
  );
}
