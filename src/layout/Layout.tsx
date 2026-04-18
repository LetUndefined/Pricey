import { Outlet } from "react-router";
import Navigation from "../components/Navigation";
import { RealCostProvider } from "../context/RealCostProvider";

const Layout = () => {
  return (
    <>
      <div className=" w-screen h-screen bg-bg ">
        <header>
          <h3>PlaceholderName</h3>
        </header>
        <main className="px-4">
          <RealCostProvider>
            <Outlet />
          </RealCostProvider>
        </main>
        <Navigation />
      </div>
    </>
  );
};

export default Layout;
