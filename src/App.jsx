import Darwer from "./components/Navbar/Drawer/Darwer";
import heroImage from "./assets/img/herosection/designer_1.svg";

function App() {
  return (
    <>
      <Darwer>
        <div
          className="h-[1161px] bg-auto  bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
        </div>
      </Darwer>
    </>
  );
}

export default App;
