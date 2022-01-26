// import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { Carousal } from "./components/carousal";
import GoogleMap from "./components/GoogleMap";
// import {CarousalContainer} from "./components/carousal";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
// import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    <div>
      <Navigation />
      <Carousal/>
      <Home />
      {/* <GoogleMap/> */}
      <Footer/>
    </div>
  );
};

export default App;
