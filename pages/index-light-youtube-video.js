import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../src/components/BannerContent";
import { WatsonContext } from "../src/context/Context";
import Layout from "../src/layout/Layout";
import { defaultPageAnimationByPageName } from "../src/utils";

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
