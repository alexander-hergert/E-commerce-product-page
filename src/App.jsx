import NavSection from "./components/NavSection";
import ViewSection from "./components/ViewSection";
import ProductSection from "./components/ProductSection";
import MobileViewSection from "./components/MobileViewSection";
import { styled } from "styled-components";
import Caroussel from "./components/Caroussel";

const Main = styled.main`
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

function App() {
  return (
    <>
      <NavSection />
      <Main>
        <Caroussel />
        <MobileViewSection />
        <ViewSection />
        <ProductSection />
      </Main>
    </>
  );
}

export default App;
