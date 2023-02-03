import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../components/BannerContent";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { defaultPageAnimationByPageName } from "../utils";

const IndexLightYoutubeVideo = () => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll("#video-container"), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);

  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightYoutubeVideo);
  }, []);
  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <div
          id="video-container"
          data-jarallax-video="https://youtu.be/spDj54kf-vY"
        ></div>

        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexLightYoutubeVideo;
