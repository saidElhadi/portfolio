import { Fragment, useEffect } from "react";
import IndexDarkParticles2 from "../src/pageTemplates/index-dark-particles2";

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("demo-main");
  }, []);

  return (
    <IndexDarkParticles2/>
  )
  // return (
  //   <Fragment>
  //     <header className="demo-banner">
  //       <div className="container">
  //         <div className="row text-center">
  //           <div className="col-md-12 heading">
  //             <h1>Watson</h1>
  //             <p>VCard, CV, Resume, Portfolio Template</p>
  //             <div className="buy-link">
  //               <a href="#" target="_blank">
  //                 BUY NOW
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //     <div className="demos">
  //       <div className="container">
  //         <div className="row dark-version">
  //           <div className="col-md-12">
  //             <div className="subheading">
  //               <h3>Dark Version</h3>
  //             </div>
  //           </div>
  //           <div className="col-md-6">
  //             <a className="demo-link" href="index-dark" target="_blank">
  //               <figure>
  //                 <img src="img/demo/index-dark.jpg" alt="" />
  //               </figure>
  //               <h4>Static Image</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a className="demo-link" href="index-dark-slider" target="_blank">
  //               <figure>
  //                 <img src="img/demo/index-dark-slider.jpg" alt="" />
  //               </figure>
  //               <h4>Slider</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a
  //               className="demo-link"
  //               href="index-dark-particles1"
  //               target="_blank"
  //             >
  //               <figure>
  //                 <img src="img/demo/index-dark-particles1.jpg" alt="" />
  //               </figure>
  //               <h4>Particles 1</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a
  //               className="demo-link"
  //               href="index-dark-particles2"
  //               target="_blank"
  //             >
  //               <figure>
  //                 <img src="img/demo/index-dark-particles2.jpg" alt="" />
  //               </figure>
  //               <h4>Particles 2</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a className="demo-link" href="index-dark-video" target="_blank">
  //               <figure>
  //                 <img src="img/demo/index-dark-video.jpg" alt="" />
  //               </figure>
  //               <h4>HTML5 Video</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a
  //               className="demo-link"
  //               href="index-dark-youtube-video"
  //               target="_blank"
  //             >
  //               <figure>
  //                 <img src="img/demo/index-dark-youtube-video.jpg" alt="" />
  //               </figure>
  //               <h4>Youtube Video</h4>
  //             </a>
  //           </div>
  //         </div>
  //         <div className="row dark-version">
  //           <div className="col-md-12">
  //             <div className="subheading">
  //               <h3>Light Version</h3>
  //             </div>
  //           </div>
  //           <div className="col-md-6">
  //             <a className="demo-link" href="index-light" target="_blank">
  //               <figure>
  //                 <img src="img/demo/index-light.jpg" alt="" />
  //               </figure>
  //               <h4>Static Image</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a
  //               className="demo-link"
  //               href="index-light-slider"
  //               target="_blank"
  //             >
  //               <figure>
  //                 <img src="img/demo/index-light-slider.jpg" alt="" />
  //               </figure>
  //               <h4>Slider</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a
  //               className="demo-link"
  //               href="index-light-particles1"
  //               target="_blank"
  //             >
  //               <figure>
  //                 <img src="img/demo/index-light-particles1.jpg" alt="" />
  //               </figure>
  //               <h4>Particles 1</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a
  //               className="demo-link"
  //               href="index-light-particles2"
  //               target="_blank"
  //             >
  //               <figure>
  //                 <img src="img/demo/index-light-particles2.jpg" alt="" />
  //               </figure>
  //               <h4>Particles 2</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a className="demo-link" href="index-light-video" target="_blank">
  //               <figure>
  //                 <img src="img/demo/index-light-video.jpg" alt="" />
  //               </figure>
  //               <h4>HTML5 Video</h4>
  //             </a>
  //           </div>
  //           <div className="col-md-6">
  //             <a
  //               className="demo-link"
  //               href="index-light-youtube-video"
  //               target="_blank"
  //             >
  //               <figure>
  //                 <img src="img/demo/index-light-youtube-video.jpg" alt="" />
  //               </figure>
  //               <h4>Youtube Video</h4>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </Fragment>
  // );
};
export default Index;
