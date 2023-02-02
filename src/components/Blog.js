import { Fragment, useContext } from "react";
import { WatsonContext } from "../context/Context";
import SectionContainer from "../layout/SectionContainer";
import BlogDetails from "./BlogDetails";
const Blog = () => {
  const { changeSection } = useContext(WatsonContext);
  return (
    <Fragment>
      <SectionContainer
        pageId="blog"
        pageIcon={"lnr lnr-book"}
        pageTitle={"My Blogs."}
      >
        <div className="row blogs-masonry">
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-1.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Web Design</span>
                <h4 className="blog-title">Best Way to Design</h4>
                <div className="blog-date">August 15, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-2.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Personal</span>
                <h4 className="blog-title">Things I Need to Get Started</h4>
                <div className="blog-date">August 10, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-3.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Design</span>
                <h4 className="blog-title">My Current Workspace</h4>
                <div className="blog-date">August 4, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-4.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Traveling</span>
                <h4 className="blog-title">Best Place to Travel this Summer</h4>
                <div className="blog-date">July 28, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-5.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Web Design</span>
                <h4 className="blog-title">
                  Latest UI Trends to Inspired From
                </h4>
                <div className="blog-date">July 25, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-6.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Technology</span>
                <h4 className="blog-title">Latest Tech 2022</h4>
                <div className="blog-date">July 19, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-7.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">LifeStyle</span>
                <h4 className="blog-title">Best &amp; Easy To cook</h4>
                <div className="blog-date">July 10, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-8.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Technology</span>
                <h4 className="blog-title">Best Sound Editing Software</h4>
                <div className="blog-date">July 1, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-9.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Traveling</span>
                <h4 className="blog-title">Top Beaches in the world</h4>
                <div className="blog-date">June 24, 2022</div>
              </div>
            </a>
          </div>
        </div>
      </SectionContainer>
      <BlogDetails />
    </Fragment>
  );
};
export default Blog;
