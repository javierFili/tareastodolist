import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaMaestra from "./pages/main/PaginaMaestra";
import TareasDelMes from "./pages/tareasDia/TareasDelMes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaMaestra />} />
          <Route path="/about" element={<TareasDelMes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
