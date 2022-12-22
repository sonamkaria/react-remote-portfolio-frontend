import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom"
// IMPORT PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";




function App() {
  //URl ahould have your HEROKU URL for your backend. Make sure you include 
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/projects" element={<Projects URL={URL}/>} />
          <Route  path="/about" element={<About URL={URL}/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
