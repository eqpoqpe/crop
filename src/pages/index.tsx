import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import MainHero from "../components/marketing/MainHero";
import FancyBackground from "../components/marketing/FancyBackground";

function MainContent(): JSX.Element {
  return (
    <FancyBackground>
      <MainHero />
    </FancyBackground>
  );
}

function Index(): JSX.Element {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default Index;
export { MainContent };