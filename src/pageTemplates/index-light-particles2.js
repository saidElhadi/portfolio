import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../components/BannerContent";
import { ParticlesDotBg } from "../components/ParticlesBackground";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { defaultPageAnimationByPageName } from "../utils";

const IndexLightParticles2 = () => {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightParticles2);
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
export default IndexLightParticles2;
