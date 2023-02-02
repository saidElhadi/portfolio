import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../src/components/BannerContent";
import { WatsonContext } from "../src/context/Context";
import Layout from "../src/layout/Layout";
import { defaultPageAnimationByPageName } from "../src/utils";
const IndexDarkVideo = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDarkHtml5Video);
  }, []);
  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <div id="video-container">
          <video
            id="videobg"
            poster="images/poster.jpg"
            autoPlay
            muted
            loop
            src="video/video1.mp4"
          ></video>
        </div>

        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexDarkVideo;
