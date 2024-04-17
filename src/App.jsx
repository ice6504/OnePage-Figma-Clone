import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <>
      <Drawer>
        <Header />
        <Intro />
      </Drawer>
    </>
  );
}

export default App;
