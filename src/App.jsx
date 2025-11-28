import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import NavBar from "./Components/Navbar";
import CityContainer from "./Components/CityContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MeteoDetails from "./Components/MeteoDetails";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
