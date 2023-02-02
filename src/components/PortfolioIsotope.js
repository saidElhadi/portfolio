import Isotope from "isotope-layout";
import {
  Fragment,
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { WatsonContext } from "../context/Context";
import SectionContainer from "../layout/SectionContainer";
import SingleWork from "./SingleWork";
const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".item",
        // layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  // Context
  const { changeSection } = useContext(WatsonContext);

  return (
    <Fragment>
      <SectionContainer
        pageId="portfolio"
        pageIcon={"lnr lnr-briefcase"}
        pageTitle="Portfolio."
      >
        <div className="row">
          {/*Portfolio Filter*/}
          <div className="col-md-12 portfolio-filter text-center">
            <ul>
              <li
                className={`c-pointer ${activeBtn("*")}`}
                onClick={handleFilterKeyChange("*")}
                data-filter="*"
              >
                All
              </li>
              <li
                className={`c-pointer ${activeBtn("brand")}`}
                onClick={handleFilterKeyChange("brand")}
                data-filter=".brand"
              >
                Brand
              </li>
              <li
                className={`c-pointer ${activeBtn("design")}`}
                onClick={handleFilterKeyChange("design")}
                data-filter=".design"
              >
                Design
              </li>
              <li
                className={`c-pointer ${activeBtn("graphic")}`}
                onClick={handleFilterKeyChange("graphic")}
                data-filter=".graphic"
              >
                Graphic
              </li>
            </ul>
          </div>
        </div>
        {/*Portfolio Items*/}
        <div className="row portfolio-items mb-50">
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 brand graphic">
            <a className="image-link" href="img/portfolio/img-1.jpg">
              <figure>
                <img src="img/portfolio/img-1.jpg" alt="" />
                <figcaption>
                  <h4>Book Design</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 design">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-2.jpg" alt="" />
                <figcaption>
                  <h4>Notepad Design</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 design graphic">
            <a
              className="video-link"
              href="https://www.youtube.com/watch?v=k_okcNVZqqI"
            >
              <figure>
                <img src="img/portfolio/img-3.jpg" alt="" />
                <figcaption>
                  <h4>Creative Cup</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 design">
            <a className="image-link" href="img/portfolio/img-4.jpg">
              <figure>
                <img src="img/portfolio/img-4.jpg" alt="" />
                <figcaption>
                  <h4>Business Card</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 brand">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-5.jpg" alt="" />
                <figcaption>
                  <h4>Back Pack</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 design">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-6.jpg" alt="" />
                <figcaption>
                  <h4>Door Hangar</h4>
                  <p>Design</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 graphic">
            <a className="image-link" href="img/portfolio/img-7.jpg">
              <figure>
                <img src="img/portfolio/img-7.jpg" alt="" />
                <figcaption>
                  <h4>Notepad Design</h4>
                  <p>graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 brand">
            <a className="image-link" href="img/portfolio/img-8.jpg">
              <figure>
                <img src="img/portfolio/img-8.jpg" alt="" />
                <figcaption>
                  <h4>Creative Flyer</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 brand">
            <a
              className="video-link"
              href="https://www.youtube.com/watch?v=k_okcNVZqqI"
            >
              <figure>
                <img src="img/portfolio/img-9.jpg" alt="" />
                <figcaption>
                  <h4>Mobile App</h4>
                  <p>Brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 graphic">
            <a className="image-link" href="img/portfolio/img-10.jpg">
              <figure>
                <img src="img/portfolio/img-10.jpg" alt="" />
                <figcaption>
                  <h4>Cup Design</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
          {/*Portfolio Item*/}
          <div className="item col-lg-4 col-sm-6 brand graphic">
            <a
              className="ajax-link"
              href="#"
              onClick={() => changeSection("single-work")}
            >
              <figure>
                <img src="img/portfolio/img-11.jpg" alt="" />
                <figcaption>
                  <h4>Creative Box</h4>
                  <p>brand</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </SectionContainer>
      <SingleWork />
    </Fragment>
  );
};
export default memo(PortfolioIsotope);
