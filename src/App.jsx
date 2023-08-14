import NavSection from "./components/NavSection";
import ViewSection from "./components/ViewSection";
import ProductSection from "./components/ProductSection";
import MobileViewSection from "./components/MobileViewSection";
import { styled } from "styled-components";

const Main = styled.main`
  @media screen and (min-width: 800px) {
    display: flex;
  }
`;

function App() {
  return (
    <>
      <NavSection />
      <Main>
        <MobileViewSection />
        <ViewSection />
        <ProductSection />
      </Main>
    </>
  );
}

export default App;
