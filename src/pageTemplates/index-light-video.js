import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../components/BannerContent";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { defaultPageAnimationByPageName } from "../utils";

const IndexLightVideo = () => {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightHtml5Video);
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
export default IndexLightVideo;
