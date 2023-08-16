import NavSection from "./components/NavSection";
import ViewSection from "./components/ViewSection";
import ProductSection from "./components/ProductSection";
import MobileViewSection from "./components/MobileViewSection";
import { styled } from "styled-components";
import Caroussel from "./components/Caroussel";
import Cart from "./components/Cart";

const Main = styled.main`
  padding-bottom: 10vh;

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    min-height: 80vh;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 10vh;
  }
`;

function App() {
  return (
    <>
      <NavSection />
      <Main>
        <Cart />
        <Caroussel />
        <MobileViewSection />
        <ViewSection />
        <ProductSection />
      </Main>
    </>
  );
}

export default App;
