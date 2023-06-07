import { Outlet, useLocation } from "react-router-dom";
import AppBar from "../components/AppBar";
import MainLand from "../components/marketing/MainLand";
import FancyBackground from "../components/marketing/FancyBackground";

function MainContent(): JSX.Element {
  return (
    <FancyBackground>
      <MainLand />
    </FancyBackground>
  );
}

function Index(): JSX.Element {
  const { pathname } = useLocation();

  console.log(pathname.endsWith("reborn-pink"));

  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default Index;
export { MainContent };