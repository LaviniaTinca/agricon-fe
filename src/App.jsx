import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
