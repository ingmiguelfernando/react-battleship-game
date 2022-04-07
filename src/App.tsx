import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Play } from "./components/Play";

function App() {
  return (
    <div className="flex justify-center my-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="play" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
