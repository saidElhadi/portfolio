import { useEffect } from "react";
import SectionContainer from "../layout/SectionContainer";
const Resume = () => {
  useEffect(() => {
    const progress_inner = document.querySelectorAll(".skill-item"),
      triggerBottom = (window.innerHeight / 5) * 5;
    progress_inner.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top,
        bar = box.getElementsByClassName("progress-bar")[0],
        value = bar.getAttribute("data-progress-value");
      bar.style.width = `${value}%`;
    });
  }, []);

  return (
    <SectionContainer
      pageId="resume"
      pageIcon={"lnr lnr-license"}
      pageTitle={"My Resume."}
    >
      <div
        className="row mb-20"
        onScroll={() => {
          console.log("Hil");
        }}
      >
        {/*Experience Column Start*/}
        <div className="col-lg-6">
          <div className="subheading">
            <h3>Experience</h3>
          </div>
          <ul className="experience">
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>IT, Web Developer</h4>
                <h5> Joyson, Zhengzhou, CHN</h5>
                <p className="info">
                  Responsible for maintaining and updating the company's
                  website. Creating new components. Creating content and doing
                  SEO.
                </p>
              </div>
              <span className="year">
                <span className="to">2021</span>
                <span className="from">2022</span>
              </span>
            </li>
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Web Developer/Designer</h4>
                <h5>Freelance, Zhengzhou, CHN</h5>
                <p className="info">
                  Building portfolio websites. Making landing pages for small
                  businesses. Making CRUD Apps. Creating Web Designs.
                </p>
              </div>
              <span className="year">
                <span className="to">2021</span>
                <span className="from">2023</span>
              </span>
            </li>
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Digital Marketer</h4>
                <h5>Freelance, Zhengzhou, CHN</h5>
                <p className="info">
                  Content creation for products and services. Promoting products
                  on social media. Increasing website traffic.
                </p>
              </div>
              <span className="year">
                <span className="to">2021</span>
                <span className="from">2023</span>
              </span>
            </li>
          </ul>
        </div>
        {/*Experience Column End*/}
        {/*Education Column Start*/}
        <div className="col-lg-6">
          <div className="subheading">
            <h3>Education</h3>
          </div>
          <ul className="education">
            {/*Education Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>B.S.E Software Engineering</h4>
                <h5>Zhengzhou University, Zhengzhou, CHN</h5>
                <p className="info">
                  Specialized in data structures, algorithms, and software
                  engineering techniques. Coursework in programming languages
                  including C, C#, HTML, CSS, JavaScript, Python, Java, and
                  others. Coursework in programming, databases, and data
                  structures. Completed projects that demonstrate strong
                  problem-solving abilities and software development skills.
                </p>
              </div>
              <span className="year">
                <span className="to">2019</span>
                <span className="from">2023</span>
              </span>
            </li>
            {/*Education Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Licence Mathematics and Informatics</h4>
                <h5>M'hamed Bougara University, Boumerdes, DZA</h5>
                <p className="info">
                  Developed strong analytical skills and problem-solving
                  abilities through various projects and assignments. Focus on
                  computer science fundamentals, mathematics, and algorithms.
                </p>
              </div>
              <span className="year">
                <span className="to">2017</span>
                <span className="from">2019</span>
              </span>
            </li>
          </ul>
        </div>
        {/*Education Column End*/}
      </div>
      {/*Education & Experience Row End*/}
      {/*Skills Row Start*/}
      <div className="">
        {/*Coding Skills Column Start*/}
        <div className="col-lg-12 skills">
          <div className="subheading">
            <h3>Coding Skills</h3>
          </div>

          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">CSS3 / HTML5</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={83}>
                <div className="progress-value">83%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Java</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={71}>
                <div className="progress-value">71%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Javascript</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={92}>
                <div className="progress-value">92%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Python</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={83}>
                <div className="progress-value">83%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">MySQL / NoSQL</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={92}>
                <div className="progress-value">92%</div>
              </div>
            </div>
          </div>
          <div className="subheading">
            <h3>Frameworks</h3>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">React JS</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={92}>
                <div className="progress-value">92%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">SpringBoot</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={65}>
                <div className="progress-value">65%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Next JS</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={80}>
                <div className="progress-value">80%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">BeautifulSoup</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={75}>
                <div className="progress-value">75%</div>
              </div>
            </div>
          </div>
        </div>
        {/*Coding Skills Column End*/}
        {/*Design Skills Column Start*/}
        <div className="col-lg-12 skills">
          <div className="subheading">
            <h3>Design Skills</h3>
          </div>
          {/*Design Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Adobe XD</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={70}>
                <div className="progress-value">70%</div>
              </div>
            </div>
          </div>
          {/*Design Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Photoshop</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={82}>
                <div className="progress-value">82%</div>
              </div>
            </div>
          </div>
          {/*Design Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Illustrator</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={69}>
                <div className="progress-value">69%</div>
              </div>
            </div>
          </div>
        </div>
        {/*Design Skills Column End*/}
      </div>
    </SectionContainer>
  );
};
export default Resume;
