import Drawer from "./components/Drawer/Drawer";
import heroImage from "./assets/img/herosection/designer_1.svg";

function App() {
  return (
    <>
      <Drawer>
        <div
          className="h-[80svh] sm:h-[90svh] xl:h-[155lvh] bg-contain bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="bg-blue-yonder-700 h-screen"></div>
      </Drawer>
    </>
  );
}

export default App;
