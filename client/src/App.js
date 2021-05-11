import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import ParticlesBg from "particles-bg";
import About from "./pages/About";
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {

  return (
    <>
      <Router>
        <Navigation />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </>
  );
}


export default App;
