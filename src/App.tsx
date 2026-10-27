import "./index.css";
import { Header, Hero, Features, Pricing, Faq } from "./sections";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </main>
  );
};

export default App;
