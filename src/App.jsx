// import sprite from "./assets/sprite.svg";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/HomePage"));
const Nannies = lazy(() => import("./pages/NanniesPage"));
const Favorites = lazy(() => import("./pages/FavoritesPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
