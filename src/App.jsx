import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navigation />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
