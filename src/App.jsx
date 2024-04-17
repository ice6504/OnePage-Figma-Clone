import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Info from "./components/Info/Info";

// Img
import happy from "./assets/img/section3/undraw_happy_news_hxmt.svg";
import social from "./assets/img/section4/undraw_social_influencer_sgsv.svg";
import mention from "./assets/img/section5/undraw_mention_6k5d.svg";

function App() {
  return (
    <>
      <Drawer>
        <Header />
        <div className="max-w-screen-xl mx-auto max-xl:px-5 max-sm:space-y-32 md:max-lg:space-y-20 max-lg:pb-5">
          <Intro />
          <Info img={happy} />
          <Info img={social} />
          <Info img={mention} hasBtn={true} btnTitle="Purchase Now" />
        </div>
        <div className="bg-blue-yonder-200 h-screen"></div>
      </Drawer>
    </>
  );
}

export default App;
