import Banking from "./pages/Banking/Banking";
import Boost from "./pages/Boost/Boost";
import HeroSection from "./pages/HeroSection/HeroSection";
import Investing from "./pages/Investing/Investing";
import Payments from "./pages/Payments/Payments";

function App() {
  return (
    <>
      <HeroSection/>
      <Payments/>
      <Banking/>
      <Boost/>
      <Investing/>
    </>
  );
}

export default App;
