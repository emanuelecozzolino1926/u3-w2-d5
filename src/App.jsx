import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./Components/Navbar";
import CityContainer from "./Components/CityContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteoDetails from "./Components/MeteoDetails";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Capitali" element={<CityContainer />} />
          <Route path="/MeteoDetails/:city" element={<MeteoDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
