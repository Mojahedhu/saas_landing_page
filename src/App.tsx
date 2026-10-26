import "./index.css";
import { Header, Hero, Features, Pricing } from "./sections";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default App;
