import React, { useContext, useEffect, useState } from "react";
import BannerContent from "../components/BannerContent";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { defaultPageAnimationByPageName } from "../utils";

const IndexDark = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDark);
  }, []);

  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexDark;
