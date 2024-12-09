import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "../Componets/Extras/SplashScreen";
import MainLanding from "../Componets/Landing/MainLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Landing" element={<MainLanding />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
