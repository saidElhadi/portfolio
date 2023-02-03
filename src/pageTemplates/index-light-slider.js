import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerContent from "../components/BannerContent";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { heroSlider } from "../sliderProps";
import { defaultPageAnimationByPageName } from "../utils";

const IndexLightSlider = () => {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightSlider);
  }, []);
  return (
    <Layout>
      <section id="home" className="banner-section pt-page">
        <div className="banner-slider">
          <div id="slides">
            <Swiper {...heroSlider} className="slides-container">
              {/*Slide 1*/}
              <SwiperSlide>
                <img src="img/slider/img-1.jpg" alt="" />
              </SwiperSlide>
              {/*Slide 2*/}
              <SwiperSlide>
                <img src="img/slider/img-2.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexLightSlider;
