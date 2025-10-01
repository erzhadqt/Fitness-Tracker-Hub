import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";


function App() {

  return (
    <>
    <Header/>
      <div>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          {" | "}
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home title="Welcome!" />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </>
  );
}

export default App
