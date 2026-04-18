import PriceSetter from "../components/PriceSetter";
import ResultsList from "../components/ResultsList";

import SalarySetup from "../components/SalarySetup";

const Home = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <SalarySetup />
      <PriceSetter />
      <ResultsList />
    </div>
  );
};

export default Home;
