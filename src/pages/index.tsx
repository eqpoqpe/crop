import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import MainHero from "../components/marketing/MainHero";
import FancyBackground from "../components/marketing/FancyBackground";
import StandPage from "../components/StandPage";

function MainContent(): JSX.Element {
  return (
    <MainHero />
  );
}

function Index(): JSX.Element {
  return (
    <FancyBackground>
      <StandPage>
        <AppBar />
        <Outlet />
      </StandPage>
    </FancyBackground>
  );
}

export default Index;
export { MainContent };