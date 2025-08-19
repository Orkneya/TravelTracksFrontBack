import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <section>
      <h1>Campers of your dreams</h1>
      <p>You can find everything you want in our catalog</p>
      <button onClick={() => navigate("/catalog")}>View Now</button>
    </section>
  );
}
