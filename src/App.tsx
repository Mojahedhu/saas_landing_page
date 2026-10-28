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
