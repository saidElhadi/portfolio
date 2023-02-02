import { Fragment } from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import PortfolioIsotope from "./PortfolioIsotope";
import Resume from "./Resume";
const PageContent = () => {
  return (
    <Fragment>
      {/*About Section Start*/}
      <About />
      {/*About Section Start*/}
      {/*Resume Section Start*/}
      <Resume />
      {/*Resume Section End*/}
      {/*Porfolio Section Start*/}
      <PortfolioIsotope />
      {/*Porfolio Section End*/}
      {/*Blog Section Start*/}
      <Blog />
      {/*Blog Section End*/}
      {/*Contact Section Start*/}
      <Contact />
      {/*Contact Section End*/}
    </Fragment>
  );
};
export default PageContent;
