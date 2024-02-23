import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Services from "./components/services/services";
import Pricing from "./components/pricing/pricing";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Pricing/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}