import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Menu from "./components/Menu";
import Testimonial from "./components/Testimonial";
import GetApp from "./components/GetApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AuthPage from "./components/AuthPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Process />
              <Menu />
              <GetApp />
              <Testimonial />
              <Newsletter />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default App;
