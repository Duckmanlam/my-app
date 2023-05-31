import {  Chat, Product_list, Home, Convert, Quiz, Manager, Statistical, Summary } from "./component";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/product-list" element={<Product_list />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/scan" element={<Convert />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/statistical" element={<Statistical />} />
        <Route path="/summary" element={<Summary />} />
        {/* <Route path="/statistical" element={<Statistical />} /> */}
      </Routes>
    </>
  );
}

export default App;
