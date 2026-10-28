import "./index.css";
import {
  Header,
  Hero,
  Features,
  Pricing,
  Faq,
  Testimonials,
  Download,
} from "./sections";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </main>
  );
};

export default App;
