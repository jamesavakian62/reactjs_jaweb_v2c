//Styles
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Software from "./pages/Software";
import About from "./pages/About";
import Apps from "./pages/Apps";
import React1 from "./pages/React1";
import Webs from "./pages/Webs";
import Watch from "./pages/Watch";
import Background from "./pages/Background";
import MyStory from "./pages/MyStory";
import Likes from "./pages/Likes";
import GreatThings from "./pages/GreatThings";
import Resume from "./pages/Resume";
import Websites from "./pages/Websites";
import Social from "./pages/Social";
import Quizes from "./pages/Quizes";
import Jokes from "./pages/Jokes";
import Pass from "./pages/Pass";
import Cocktail from "./pages/Cocktail";
import News from "./pages/News";

import { Router, Routes, Route, Link, browserHistory } from "react-router";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/software" element={<Software />} />
        <Route path="/react1" element={<React1 />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/software" element={<Software />} />
        <Route path="/webs" element={<Webs />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/background" element={<Background />} />
        <Route path="/likes" element={<Likes />} />
        <Route path="/mystory" element={<MyStory />} />
        <Route path="/greatthings" element={<GreatThings />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/social" element={<Social />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/pass" element={<Pass />} />
        <Route path="/cocktail" element={<Cocktail />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <div style={{ height: "150px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
