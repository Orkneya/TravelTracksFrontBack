import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/HomePage.jsx";
import Catalog from "./pages/CatalogPage/CatalogPage.jsx";
import CamperDetails from "./pages/DetailsPage/DetailsPage.jsx";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CamperDetails />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </>
  );
}

export default App;
