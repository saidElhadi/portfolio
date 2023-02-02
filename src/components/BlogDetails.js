import SectionContainer from "../layout/SectionContainer";

const BlogDetails = () => {
  return (
    <SectionContainer pageId={"blog-details"}>
      <div className="blog-page">
        <div className="blog-image">
          <img src="img/blog/blog-page-img.jpg" alt="" />
        </div>
        <div className="blog-container">
          <div className="row">
            {/*Blog Heading Start*/}
            <div className="blog-heading col-md-8 offset-md-2">
              <span className="cat">Fashion</span>
              <h1>Welcome to my blog</h1>
              <span className="blog-date">January 20, 2022</span>
            </div>
            {/*Blog Heading Start*/}
            {/*Blog Content Start*/}
            <div className="blog-content col-md-10 offset-md-1">
              <p>
                Consectetur rerum veniam vitae sequi voluptatibus unde soluta
                dolorum. Sint maxime ducimus tenetur vitae corrupti saepe.
                Veniam sit ea aliquid odit officiis. Quisquam at labore eum
                commodi in eius In quisquam a a eaque fuga? Debitis magnam
                deserunt libero voluptates esse at possimus? Voluptatum
                voluptates exercitationem voluptatum accusantium doloremque
                nihil, nihil molestias voluptatibus, minus nostrum, aliquid
                Quisquam neque fugiat quos veniam facere Dicta eaque laboriosam
                ut voluptas ipsum Officiis nisi maxime soluta optio ipsum quam
                Dolores aperiam explicabo sed quas unde laborum molestiae. Porro
                cum incidunt enim minus nisi excepturi rerum! Exercitationem
                quia excepturi reiciendis illum velit! Consequatur tempora nihil{" "}
              </p>
              <p>
                Sit exercitationem accusamus repudiandae libero natus vero aut
                Consectetur magni totam sint animi expedita? Eos consequatur
                facilis corrupti voluptatibus asperiores dolorum vitae ipsa
                laudantium repellat Voluptates voluptates corporis illum ut
                asperiores possimus officiis! Laborum rerum eaque minus harum
                doloremque debitis Ducimus sed commodi commodi illo aliquam.
                Magnam ipsa blanditiis blanditiis veniam aut Magni unde
                voluptates culpa dicta placeat! Incidunt delectus beatae
                excepturi perspiciatis libero praesentium illo Atque sit
                asperiores unde dolorem cupiditate, nostrum Alias illum
                voluptate eos commodi modi? Minus est fugiat labore earum
                obcaecati, omnis. Dicta fugit quod harum eius atque?
                Exercitationem impedit deleniti quidem voluptas eum cupiditate
                Consectetur
              </p>
              <blockquote>
                Consectetur omnis eveniet possimus est necessitatibus. Dolorum
                magnam officiis ad fugit cumque? Voluptatibus laboriosam
                incidunt voluptatum beatae dignissimos, nostrum iusto error
                Optio quam modi adipisci cumque delectus Voluptates iusto
                doloremque.
              </blockquote>
              <p>
                Dolor amet culpa esse cum in? Id ab neque ipsa sapiente impedit
                doloremque quod. Velit veniam in odio voluptatem doloribus Minus
                laborum voluptates sed ea vel? Aspernatur in quos nulla veniam
                tempore In quibusdam reprehenderit maiores iste ab Est quae
                magni nemo repudiandae soluta? Eius qui veniam voluptatem iure
                molestiae
              </p>
            </div>
            {/*Blog Content End*/}
            {/*Blog Comments Start*/}
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
            </div>
            {/*Blog Comments End*/}
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
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default BlogDetails;
