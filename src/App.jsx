import NavSection from "./components/NavSection";
import ViewSection from "./components/ViewSection";
import ProductSection from "./components/ProductSection";
import { styled } from "styled-components";

function App() {
  return (
    <>
      <NavSection />
      <main>
        <ViewSection />
        <ProductSection />
      </main>
    </>
  );
}

export default App;
