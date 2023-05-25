import { Manager, Chat, Product_list, Home, Scan, Quiz } from "./component";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/product-list" element={<Product_list />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
