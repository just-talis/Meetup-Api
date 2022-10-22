import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NoMatch } from "./components/NoMatch";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users  />} />
        <Route path="*" element={<NoMatch  />} />
      </Routes>
    </>
  );
}

export default App;
