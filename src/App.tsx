import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
