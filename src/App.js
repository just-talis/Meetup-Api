import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NoMatch } from "./components/NoMatch";
import { Users } from "./components/Users";
import './App.css';
import { FallBack } from "./components/FallBack";

function App() {
  return (
    <>
    <ErrorBoundary FallbackComponent={FallBack}>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users  />} />
        </Route>
        <Route path="*" element={<NoMatch  />} />
      </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
