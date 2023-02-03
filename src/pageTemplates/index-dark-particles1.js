import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../components/BannerContent";
import ParticlesBackground from "../components/ParticlesBackground";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { defaultPageAnimationByPageName } from "../utils";

const IndexDarkParticles1 = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDarkParticles1);
  }, []);
  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <div id="particles-js">
          <ParticlesBackground />
        </div>
        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexDarkParticles1;
