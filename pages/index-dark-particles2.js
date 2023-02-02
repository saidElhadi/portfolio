import { useContext, useEffect } from "react";
import BannerContent from "../src/components/BannerContent";
import { ParticlesDotBg } from "../src/components/ParticlesBackground";
import { WatsonContext } from "../src/context/Context";
import Layout from "../src/layout/Layout";
import { defaultPageAnimationByPageName } from "../src/utils";

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
