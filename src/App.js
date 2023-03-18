import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import EcommerceProject from "./Pages/Projects/Ecommerce";
import "./App.css";
import SocialMediaPlatform from "./Pages/Projects/Socialmediaplatform";
import FullStackProjectView from "./Pages/FullStackProjectView";
import BlogProject from "./Pages/Projects/BlogProject";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            <Route
              path="/projects/full-stack/:projectName"
              element={<FullStackProjectView />}
            />
          </Route>
          <Route
            exact
            path="/projects/full-stack/ecommerce"
            element={<EcommerceProject />}
          />
          <Route
            exact
            path="/projects/full-stack/social-media"
            element={<SocialMediaPlatform />}
          />
          <Route
            exact
            path="projects/full-stack/blog"
            element={<BlogProject />}
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>
      
      <Footer />
      
    </Router>
  );
}

export default App;
