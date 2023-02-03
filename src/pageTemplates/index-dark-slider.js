import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerContent from "../components/BannerContent";
import { WatsonContext } from "../context/Context";
import Layout from "../layout/Layout";
import { heroSlider } from "../sliderProps";
import { defaultPageAnimationByPageName } from "../utils";
import img1 from "../../public/img/slider/img-1.jpg"
import img2 from "../../public/img/slider/img-2.jpg"

const IndexDarkSlider = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDarkSlider);
  }, []);
  return (
    <Layout>
      <section id="home" className="banner-section pt-page">
        <div className="banner-slider">
          <div id="slides">
            <Swiper {...heroSlider} className="slides-container">
              {/*Slide 1*/}
              <SwiperSlide>
                <Image
                  src={img1}
                  fill
                  alt=""
                  style={{
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                />
              </SwiperSlide>
              {/*Slide 2*/}
              <SwiperSlide>
                <Image
                  src={img2}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  placeholder="blur"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexDarkSlider;
