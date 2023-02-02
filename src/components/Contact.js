import { aboutMeInfo } from "../data/protfolioData";
import SectionContainer from "../layout/SectionContainer";
const Contact = () => {
  return (
    <SectionContainer
      pageId="contact"
      pageIcon={"lnr lnr-envelope"}
      pageTitle={"Contact Me."}
      map
    >
      <div className="row mb-70">
        <div className="col-lg-8  offset-lg-2">
          <div className="subheading">
            <h3>Let's Talk</h3>
          </div>
          {/*Form Start*/}
          <form id="contact-form" method="post" action="mail.php">
            <div className="row">
              {/*Name Field*/}
              <div className="col-md-6 mb-50">
                <span className="input">
                  <input
                    className="input__field cf-validate"
                    type="text"
                    id="cf-name"
                    name="name"
                  />
                  <label className="input__label" htmlFor="cf-name">
                    Name
                  </label>
                </span>
              </div>
              {/*Email Field*/}
              <div className="col-md-6 mb-50">
                <span className="input">
                  <input
                    className="input__field cf-validate"
                    type="text"
                    id="cf-email"
                    name="email"
                  />
                  <label className="input__label" htmlFor="cf-email">
                    Email
                  </label>
                </span>
              </div>
              {/*Message Box*/}
              <div className="col-md-12 mb-30">
                <span className="input">
                  <textarea
                    className="input__field cf-validate"
                    id="cf-message"
                    name="message"
                    rows={5}
                    defaultValue={""}
                  />
                  <label className="input__label" htmlFor="cf-message">
                    How can we help you?
                  </label>
                </span>
              </div>
              <div className="alert-container col-md-12" />
              {/*Submit Button*/}
              <div className="col-md-12 text-center">
                <button id="cf-submit" className="btn-main">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {/*Form End*/}
        </div>
      </div>
      {/*Contact Info Row Start*/}
      <div className="row contact-info mb-70">
        {/*Contact Info Item*/}
        <div className="col-md-4 info-item">
          <span className="icon">
            <i className="fas fa-paper-plane" />
          </span>
          <h5>
            <a href={`${"mailto:" + aboutMeInfo.email}`}>{aboutMeInfo.email}</a>
          </h5>
        </div>
        {/*Contact Info Item*/}
        <div className="col-md-4 info-item">
          <span className="icon">
            <i className="fas fa-map-marker-alt" />
          </span>
          <h5>Zhengzhou, China</h5>
        </div>
        {/*Contact Info Item*/}
        <div className="col-md-4 info-item">
          <span className="icon">
            <i className="fas fa-phone" />
          </span>
          <h5>{aboutMeInfo.phone}</h5>
        </div>
      </div>

      {/*Google Map End*/}
    </SectionContainer>
  );
};
export default Contact;
