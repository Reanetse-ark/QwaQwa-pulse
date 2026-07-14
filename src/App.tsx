import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Artists from "./pages/Artists";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;