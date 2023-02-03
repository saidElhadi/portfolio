import { Fragment, useContext } from "react";
import { WatsonContext } from "../context/Context";
import SectionContainer from "../layout/SectionContainer";
import {
  BlogDetails0,
  BlogDetails1,
  BlogDetails2,
} from "../data/blogs/BlogDetails";
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
              onClick={() => changeSection("blog-details0")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-1.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Web Development</span>
                <h4 className="blog-title">How it Started</h4>
                <div className="blog-date">February 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details1")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-2.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Software Engineering</span>
                <h4 className="blog-title">Why Coding?</h4>
                <div className="blog-date">December 2021</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details2")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/img-3.jpg" alt="#" />
              </div>
              <div className="blog-content">
                <span className="cat">Digital Marketing</span>
                <h4 className="blog-title">Online Presence</h4>
                <div className="blog-date">August 2022</div>
              </div>
            </a>
          </div>
        </div>
      </SectionContainer>
      <BlogDetails0 />
      <BlogDetails1 />
      <BlogDetails2 />
      
    </Fragment>
  );
};
export default Blog;
