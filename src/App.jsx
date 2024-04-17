import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <>
      <Drawer>
        <Header />
        <div className="max-w-screen-xl mx-auto max-xl:px-5">
          <Intro />
          <div className="h-screen"></div>
        </div>
      </Drawer>
    </>
  );
}

export default App;
