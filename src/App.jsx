import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import PortfolioSection from "./Components/Portfolio/Portfolio";
import SkillsSection from "./Components/SkillsSection/Skills";
import ContactsSection from "./Components/ContactsSection/ContactsSection";
import Footer from "./Components/footer/Footer";
import "./i18n";

function App() {
  return (
    <>
    <div className="container">
      <h1 className="visually-hidden">Vite + React based portfolio</h1>
      <Header />
      <main>
      <HeroSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactsSection />
      <Footer />
      
      </main>
      </div>
    </>
  );
}

export default App;
