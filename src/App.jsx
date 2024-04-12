import Darwer from "./components/Navbar/Drawer/Darwer";
import heroImage from "./assets/img/herosection/designer_1.svg";

function App() {
  return (
    <>
      <Darwer>
        <div
          className="h-[70svh] sm:h-[90svh] xl:h-[155lvh] bg-contain bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="bg-blue-yonder-700 h-screen"></div>
      </Darwer>
    </>
  );
}

export default App;
