import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Testymonials from "./components/Testymonials/Testymonials";

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Testymonials />
      <Contact />
      <Footer />
    </>
  );
}
