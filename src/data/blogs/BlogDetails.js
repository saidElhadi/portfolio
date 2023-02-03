import SectionContainer from "../../layout/SectionContainer";
const LeaveComment = () => {
  return (
    <div className="comment-form col-lg-8 offset-lg-2">
      <h4 className="mt-40 mb-40">Leave A Reply</h4>
      <form action="#">
        <div className="row">
          {/*Name Field*/}
          <div className="col-md-6 mb-50">
            <span className="input">
              <input
                className="input__field"
                type="text"
                id="name"
                name="name"
                required=""
              />
              <label className="input__label" htmlFor="name">
                Name
              </label>
            </span>
          </div>
          {/*Email Field*/}
          <div className="col-md-6 mb-50">
            <span className="input">
              <input
                className="input__field"
                type="text"
                id="email"
                name="email"
                required=""
              />
              <label className="input__label" htmlFor="email">
                Email
              </label>
            </span>
          </div>
          {/*Message Box*/}
          <div className="col-md-12 mb-30">
            <span className="input">
              <textarea
                className="input__field"
                id="message"
                name="message"
                rows={5}
                required=""
                defaultValue={""}
              />
              <label className="input__label" htmlFor="message">
                Your Comment
              </label>
            </span>
          </div>
          {/*Submit Button*/}
          <div className="col-md-12">
            <button className="btn-main">Post Comment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export const BlogDetails0 = () => {
  return (
    <SectionContainer pageId={"blog-details0"}>
      <div className="blog-page">
        <div className="blog-image">
          <img src="img/blog/blog-page-img.jpg" alt="" />
        </div>
        <div className="blog-container">
          <div className="row">
            {/*Blog Heading Start*/}
            <div className="blog-heading col-md-8 offset-md-2">
              <span className="cat">Web Development</span>
              <h1>
                Starting My Web Development Journey While Pursuing a Software
                Engineering Degree
              </h1>
              <span className="blog-date">January 20, 2022</span>
            </div>
            {/*Blog Heading Start*/}
            {/*Blog Content Start*/}
            <div className="blog-content col-md-10 offset-md-1">
              <></>
              <p>
                As a software engineering student, I have always been fascinated
                by the world of web development. The endless possibilities and
                the ability to create something that can reach millions of
                people all around the world is truly amazing. That is why I have
                decided to start my journey in web development while pursuing my
                degree.
              </p>
              <p>
                My journey in web development started with learning HTML, CSS
                and JavaScript, the basic building blocks of a website. I
                learned how to create a basic website structure using HTML,
                style it using CSS and add interactivity using JavaScript. It
                was a great starting point and gave me a foundation to build
                upon.
                <span />
                Next, I started learning about responsive design and how to
                create websites that look great on all devices, from desktops to
                smartphones. I learned about CSS frameworks such as Bootstrap
                and Foundation and how they can make it easier to create
                responsive designs.
              </p>
              <p>
                I also started exploring the backend side of web development. I
                learned about server-side scripting using Django and how to
                interact with databases using SQL. I was amazed by how powerful
                these technologies are and how they can be used to create
                dynamic and interactive websites.
              </p>
              <blockquote>
                Web is huge, and it's here to stay. --The Tech Lead
              </blockquote>
              <p>
                One of the biggest challenges I faced was trying to balance my
                web development journey with my software engineering degree. It
                was a challenge to find time to work on my web development
                projects while still keeping up with my coursework. But I found
                that setting aside dedicated time each week to work on my web
                development projects helped me stay on track.
                <span />I am now working on building my own portfolio website to
                showcase my web development skills. I have also started
                freelancing and taking on small web development projects. This
                has been a great opportunity for me to put my skills into
                practice and learn even more about web development.
              </p>
              <p>
                In conclusion, my journey in web development has been a great
                learning experience and has given me a new perspective on the
                world of software engineering. I am excited to continue learning
                and growing as a web developer while pursuing my degree. Who
                knows where this journey will take me, but I am confident that
                the skills I am learning will be valuable in my future career.
              </p>
            </div>
            {/*Blog Content End*/}
            {/* Blog Comments Start
            <div className="blog-comments col-md-8 offset-md-2">
              <h4 className="mb-40">Post Comments</h4>
              <ul className="comment-list">
                <li className="comment">
                  <div className="author-img">
                    <img src="img/blog/authors/author-1.jpg" alt="" />
                  </div>
                  <div className="comment-text">
                    <span className="reply">
                      <a href="#">Reply</a>
                    </span>
                    <h6 className="author">Jane Doe</h6>
                    <span className="date">June 10, 2022 at 5:39 am</span>
                    <p>
                      Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie
                      consequat flexitarian four loko{" "}
                    </p>
                  </div>
                </li>
                <li className="comment">
                  <div className="author-img">
                    <img src="img/blog/authors/author-2.jpg" alt="" />
                  </div>
                  <div className="comment-text">
                    <span className="reply">
                      <a href="#">Reply</a>
                    </span>
                    <h6 className="author">Emma Doe</h6>
                    <span className="date">June 10, 2022 at 5:39 am</span>
                    <p>
                      Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie
                      consequat flexitarian four loko{" "}
                    </p>
                  </div>
                </li>
                <li className="comment">
                  <div className="author-img">
                    <img src="img/blog/authors/author-3.jpg" alt="" />
                  </div>
                  <div className="comment-text">
                    <span className="reply">
                      <a href="#">Reply</a>
                    </span>
                    <h6 className="author">John Doe</h6>
                    <span className="date">June 10, 2022 at 5:39 am</span>
                    <p>
                      Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie
                      consequat flexitarian four loko{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div> */}
            {/*Blog Comments End */}

            <LeaveComment></LeaveComment>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export const BlogDetails1 = () => {
  return (
    <SectionContainer pageId={"blog-details1"}>
      <div className="blog-page">
        <div className="blog-image">
          <img src="img/blog/blog-page-img.jpg" alt="" />
        </div>
        <div className="blog-container">
          <div className="row">
            {/*Blog Heading Start*/}
            <div className="blog-heading col-md-8 offset-md-2">
              <span className="cat">Web Development</span>
              <h1>The Software Industry</h1>
              <span className="blog-date">December 02, 2021</span>
            </div>
            {/*Blog Heading Start*/}
            {/*Blog Content Start*/}
            <div className="blog-content col-md-10 offset-md-1">
              <p>
                From a young age, I have always had a passion for technology and
                an interest in how things work. This led me to pursue a career
                in software engineering, where I have the opportunity to create
                and build products that can have a real impact on people's
                lives. In this blog, I will share why I chose software
                engineering as a career and what makes it such a rewarding
                field.
              </p>
              <p>
                First and foremost, software engineering offers a level of
                creativity that is unmatched by any other career. Whether it's
                designing a user interface, creating a complex algorithm, or
                building a website, software engineering allows me to express my
                creativity in a unique and meaningful way. I find it incredibly
                satisfying to turn my ideas into tangible products that can be
                used and appreciated by others.
                <span />
                Another reason I chose software engineering is the potential for
                growth and development. Technology is constantly changing, and
                as a software engineer, I have the opportunity to continuously
                learn and improve my skills. Whether it's learning a new
                programming language or taking on a new project, I am always
                challenged to grow and develop as a professional.
              </p>
              <blockquote>
                "Software is a great combination of artistry and engineering." -
                Bill Gates, co-founder of Microsoft
              </blockquote>
              <p>
                Software engineering also offers the potential for making a real
                impact in the world. Whether it's creating a solution to a
                complex problem, building a product that improves people's
                lives, or using technology to make the world a better place,
                software engineers have the ability to make a difference. This
                is something that is incredibly important to me and is a big
                part of why I chose this field.
              </p>
              <p>
                Finally, the demand for skilled software engineers is growing
                every day. From startups to multinational corporations, there
                are a vast number of job opportunities available, allowing
                software engineers to work in a variety of industries and
                environments. This offers the flexibility to choose a career
                path that aligns with my interests and goals.
              </p>
              <blockquote>
                "Software engineering is a discipline that combines creativity,
                logic, and a strong work ethic." - Tim Cook, CEO of Apple
              </blockquote>
              <p>
                In conclusion, I chose software engineering as a career because
                of its potential for creativity, growth, and impact. Whether
                it's building something new, learning a new skill, or making a
                difference in the world, software engineering offers a unique
                and rewarding career path. I am excited to continue growing and
                developing as a software engineer and am eager to see what the
                future holds.
              </p>
            </div>

            <LeaveComment></LeaveComment>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export const BlogDetails2 = () => {
  return (
    <SectionContainer pageId={"blog-details2"}>
      <div className="blog-page">
        <div className="blog-image">
          <img src="img/blog/blog-page-img.jpg" alt="" />
        </div>
        <div className="blog-container">
          <div className="row">
            {/*Blog Heading Start*/}
            <div className="blog-heading col-md-8 offset-md-2">
              <span className="cat">Digital Marketing</span>
              <h1>The Industry of Marketing on the Web</h1>
              <span className="blog-date">August 12, 2022</span>
            </div>
            {/*Blog Heading Start*/}
            {/*Blog Content Start*/}
            <div className="blog-content col-md-10 offset-md-1">
              <p>
                Starting a freelance business can be a daunting task, but with
                hard work, determination, and a little bit of luck, it can be a
                rewarding and fulfilling journey. In this blog, I will share my
                story of how I started digital marketing as a freelancer and
                offer tips for others who are interested in starting their own
                freelance business.
              </p>
              <p>
                My journey into digital marketing began with a passion for
                technology and an interest in how it can be used to connect
                people and businesses. I studied marketing in college and gained
                experience working for various companies in the industry.
                However, I always felt that I had more to offer and wanted to
                use my skills to help businesses in a more meaningful way.
              <br/>
                In order to pursue my passion, I decided to take the leap and
                start my own freelance business, offering digital marketing
                services to clients. The first few months were difficult as I
                worked to build my client base and establish my reputation. I
                spent countless hours networking, building my website, and
                reaching out to potential clients.
              </p>
              <p>
                One of the keys to my success was focusing on my niche. Instead
                of trying to be a jack-of-all-trades, I decided to specialize in
                a specific area of digital marketing, such as SEO or social
                media marketing. This allowed me to develop a deeper
                understanding of the industry and become an expert in my field.
              <br/>
                I also made sure to invest in the right tools and resources,
                such as a laptop, high-speed internet, and a professional email
                address. This helped me to be productive and efficient, which
                was essential for building a successful freelance business.
              </p>
              <p>
                Finally, I made sure to maintain strong relationships with my
                clients. I communicated regularly, provided high-quality work,
                and went above and beyond to ensure their satisfaction. This
                helped to build a strong reputation and led to positive
                word-of-mouth recommendations, which was critical to my success.
              </p>
              <p>
                In conclusion, starting a freelance business in digital
                marketing requires hard work, determination, and a passion for
                the industry. By focusing on your niche, investing in the right
                tools, and maintaining strong relationships with clients, you
                can build a successful and rewarding freelance business.
              </p>
            </div>

            <LeaveComment></LeaveComment>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
