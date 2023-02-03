import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../components/BannerContent";
import { ParticlesDotBg } from "../components/ParticlesBackground";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { defaultPageAnimationByPageName } from "../utils";

const IndexDarkParticles2 = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDarkParticles2);
  }, []);
  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <div id="particles-js">
          <ParticlesDotBg />
        </div>
        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexDarkParticles2;
