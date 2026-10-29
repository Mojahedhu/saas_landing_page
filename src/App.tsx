import gsap from "gsap";
import "./index.css";
import {
  Header,
  Hero,
  Features,
  Pricing,
  Faq,
  Testimonials,
  Download,
  Footer,
} from "./sections";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="overflow-clip">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
