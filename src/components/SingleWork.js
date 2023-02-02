import { useContext, useEffect, useState } from "react";
import { WatsonContext } from "../context/Context";

const SingleWork = () => {
  const [loader, setLoader] = useState(true);
  const { section, changeSection } = useContext(WatsonContext);
  useEffect(() => {
    setTimeout(() => {
      if (section === "single-work") {
        setLoader(false);
      } else {
        setLoader(true);
      }
    }, 500);
  }, [section]);
  return (
    <div className={`ajax-portfolio-popup ${loader ? "" : "on"}`}>
      <span
        className="ajax-loader"
        style={{ display: loader ? "block" : "none" }}
      />
      <div className="navigation-wrap">
        <span
          className="popup-close"
          onClick={() => changeSection("portfolio")}
        >
          <i className="fas fa-times-circle" />
        </span>
      </div>
      <div className="content-wrap">
        <div className="popup-content">
          <meta charSet="UTF-8" />
          <title>Single Ajax Portfolio</title>
          <div className="single-work">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-10 offset-md-1 mb-40">
                  <h1 className="title mb-30">Project Title</h1>
                  <p className="mb-30">
                    Adipisicing tempore architecto quae est similique Hic iste
                    explicabo vitae temporibus quidem. Porro itaque quas
                    expedita fugiat accusantium, harum. Quasi provident
                    necessitatibus omnis vel sunt Quia consectetur vel
                    exercitationem debitis aut Excepturi ut possimus suscipit in
                    reprehenderit. Eaque natus quia!
                  </p>
                  <ul className="information">
                    <li>
                      <span className="title">Client:</span> Themeforest
                    </li>
                    <li>
                      <span className="title">Website:</span> envato.com
                    </li>
                    <li>
                      <span className="title">Category:</span> web, creative,
                      photography
                    </li>
                  </ul>
                  <figure className="mt-30">
                    <img src="img/single-work/img-1.jpg" alt="" />
                  </figure>
                  <figure className="mt-30">
                    <img src="img/single-work/img-2.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleWork;
