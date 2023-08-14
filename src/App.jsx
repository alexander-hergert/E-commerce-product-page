import NavSection from "./components/NavSection";
import ViewSection from "./components/ViewSection";
import ProductSection from "./components/ProductSection";
import MobileViewSection from "./components/MobileViewSection";
import { styled } from "styled-components";


function App() {
  return (
    <>
      <NavSection />
      <main>
        <MobileViewSection />
        <ViewSection />
        <ProductSection />
      </main>
    </>
  );
}

export default App;
