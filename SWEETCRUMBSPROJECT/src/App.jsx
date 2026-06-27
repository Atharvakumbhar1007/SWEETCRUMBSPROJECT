import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import PreOrder from "./pages/PreOrder";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/preorder" element={<PreOrder />} />

        <Route path="/confirmation" element={<Confirmation />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;