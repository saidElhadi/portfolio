import { useContext, useEffect } from "react";
import BannerContent from "../src/components/BannerContent";
import { ParticlesDotBg } from "../src/components/ParticlesBackground";
import { WatsonContext } from "../src/context/Context";
import Layout from "../src/layout/Layout";
import { defaultPageAnimationByPageName } from "../src/utils";

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
