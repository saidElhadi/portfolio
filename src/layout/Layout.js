import dynamic from "next/dynamic";
import { Fragment, useContext, useEffect } from "react";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import ImageView from "../components/ImageView";
import Resume from "../components/Resume";
import VideoPopup from "../components/VideoPopup";
import { WatsonContext } from "../context/Context";
import { pageActiveAnimation, simpleBar } from "../utils";
import Sidebar from "./Sidebar";
import ThemeOptions from "./ThemeOptions";

const PortfolioIsotope = dynamic(
  () => import("../components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const About = dynamic(() => import("../components/About"), {
  ssr: false,
});

const Layout = ({ children, noContent }) => {
  const { section, pageTransitionAnimation } = useContext(WatsonContext);
  useEffect(() => {
    pageActiveAnimation(section, pageTransitionAnimation);
  }, [section]);

  useEffect(() => {
    simpleBar();
  });

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      {/* <ThemeOptions /> */}
      <div id="page">
        <Sidebar />
        <div id="main" className="site-main">
          {/* Banner/Home Section -> videBg,Particles Background etc */}
          {children}
          {!noContent && (
            <Fragment>
              <About />
              <Resume />
              <PortfolioIsotope />
              <Blog />
              <Contact />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
