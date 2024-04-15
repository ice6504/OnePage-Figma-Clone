import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Drawer>
        <Header />
        <div className="h-screen"></div>
      </Drawer>
    </>
  );
}

export default App;
