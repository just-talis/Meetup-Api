import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { NoMatch } from "./components/NoMatch";
import { Users } from "./components/Users";
import './App.css';
import { FallBack } from "./components/FallBack";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="app">
    <ErrorBoundary FallbackComponent={FallBack}>
      <Routes>
        <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users  />} />
        </Route>
        <Route path="*" element={<NoMatch  />} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
