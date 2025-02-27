import Academics from "./Components/Academics";
import Admission from "./Components/Admission";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Enroll from "./Components/Enroll";
import Home from "./Components/Home";
import NavBar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
