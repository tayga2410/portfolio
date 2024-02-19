import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import "./i18n";

function App() {
  return (
    <>
    <div className="container">
      <h1 className="visually-hidden">Vite + React based portfolio</h1>
      <Header />
      <main>
      <HeroSection />
      </main>
      </div>
    </>
  );
}

export default App;
