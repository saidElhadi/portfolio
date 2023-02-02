import { Swiper, SwiperSlide } from "swiper/react";
import { aboutMeInfo } from "../data/protfolioData";
import SectionContainer from "../layout/SectionContainer";
import { clientSliderProps, testimonialSliderProps } from "../sliderProps";
const About = () => {
  let myAge = new Date();
  myAge = myAge.getFullYear() - 1998;
  return (
    <SectionContainer
      pageId={"about"}
      pageIcon={"lnr lnr-user"}
      pageTitle={"About Me."}
    >
      <div className="row about mb-70">
        <div className="col-lg-8">
          {/*Personal Intro*/}
          <h3 className="mb-20">{aboutMeInfo.title}</h3>
          <p>{aboutMeInfo.mainText}</p>
          {/*Signature Image*/}
          <div className="signature mt-20">
            <img src="img/signature-white.svg" alt="" />
          </div>
        </div>
        {/*Personal Info*/}
        <div className="col-lg-4">
          <div className="about-info">
            <h3 className="mb-20">Personal Information</h3>
            <ul>
              <li>
                <span className="title">Name</span>
                <span className="value">{aboutMeInfo.name}</span>
              </li>
              <li>
                <span className="title">Age</span>
                <span className="value">{aboutMeInfo.age} Years</span>
              </li>
              <li>
                <span className="title">Residence</span>
                <span className="value">{aboutMeInfo.residence}</span>
              </li>
              <li>
                <span className="title">Address</span>
                <span className="value">{aboutMeInfo.address}</span>
              </li>
              <li>
                <span className="title">Email</span>
                <span className="value">
                  <a href={`${"mailto:" + aboutMeInfo.email}`}>
                    {aboutMeInfo.email}
                  </a>
                </span>
              </li>
              <li>
                <span className="title">Phone</span>
                <span className="value">
                  <a href={`${"tel:" + aboutMeInfo.phone}`}>
                    {aboutMeInfo.phone}
                  </a>
                </span>
              </li>
              <li>
                <span className="title">Freelance</span>
                <span className="value">
                  {aboutMeInfo.freelance ? "Avaliable" : "Not Avaliable"}
                </span>
              </li>
            </ul>
            <div className="resume-button mt-30">
              <a className="btn-main" href="../data/Resume.pdf" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About Info Row End*/}
      {/*Services Row Start*/}
      <div className="row services mb-30">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Services</h3>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-laptop-phone" />
            </div>
            <h4>Web Development</h4>
            <p>
              Full-stack developer skilled in React, Next.js, Django, and
              Spring. Experienced in creating dynamic and scalable web
              applications. Committed to delivering high-quality and
              user-friendly solutions for clients.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-pencil" />
            </div>
            <h4>Web Design</h4>
            <p>
              Creative web designer with a passion for delivering visually
              appealing and user-friendly websites. Skilled in HTML, CSS, and
              JavaScript. Committed to creating digital experiences that meet
              client needs and exceed expectations.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-cloud-download" />
            </div>
            <h4>Web Scraping</h4>
            <p>
              Experienced web scraper using Python and BeautifulSoup. Skilled in
              extracting relevant data from websites to support data analysis
              and reporting. Committed to delivering accurate and efficient
              results for clients.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-earth" />
            </div>
            <h4>Digital Marketer</h4>
            <p>
              Digital marketing professional focused on promoting online
              presence. Skilled in utilizing various channels, such as social
              media, email marketing, and search engine optimization. Committed
              to driving growth and increasing visibility for clients.
            </p>
          </div>
        </div>
      </div>
      {/*Services Row End*/}
      {/* Clients Row Start*/}
      {/* <div className="row clients mb-70">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Clients</h3>
          </div>
        </div>
        <Swiper {...clientSliderProps} className="">
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-01.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-02.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-03.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-04.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-05.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-06.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-07.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-08.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-09.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div> */}
      {/*Clients Row End */}
      {/*Testimonials Row Start*/}
      <div className="row testimonials mb-50">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Testimonials</h3>
          </div>
          <Swiper {...testimonialSliderProps} className="">
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Working with Sayid has been an absolute pleasure. His deep
                  knowledge of web development and digital marketing has helped
                  us take our online presence to the next level. His attention
                  to detail, creative solutions, and ability to deliver results
                  has impressed us time and time again. We highly recommend
                  Sayid for any web development or digital marketing project.
                </p>
              </div>
              <div className="testimonial-meta">
                {/* <img src="img/testimonials/author-1.jpg" alt="" /> */}
                <div className="meta-info">
                  <h4>Sui Yudong</h4>
                  <p>Digital Marketing Executive</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  I had the privilege of working with Sayid on a web scraping
                  project and I must say, his expertise in Python and
                  BeautifulSoup is second to none. He were able to extract
                  relevant data quickly and efficiently, and the final results
                  exceeded my expectations. Sayid is truly a valuable asset to
                  any team and I look forward to working with him in the future.
                </p>
              </div>
              <div className="testimonial-meta">
                {/* <img src="img/testimonials/author-2.jpg" alt="" /> */}
                <div className="meta-info">
                  <h4>Kamel Asmar</h4>
                  <p>Database Administrator</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  As a small business owner, I needed someone who could help me
                  promote my online presence and drive growth. Sayid was the
                  perfect condidate. Sayid listened to my needs, developed a
                  tailored digital marketing strategy, and executed it with
                  precision. The results have been outstanding and I highly
                  recommend Sayid for anyone looking to increase their online
                  visibility.
                </p>
              </div>
              <div className="testimonial-meta">
                {/* <img src="img/testimonials/author-3.jpg" alt="" /> */}
                <div className="meta-info">
                  <h4>Dong Feng</h4>
                  <p>Marketing Director</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/*Testimonials Row End*/}
      </div>
    </SectionContainer>
  );
};
export default About;
