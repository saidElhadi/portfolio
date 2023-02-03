export const pageActiveAnimation = (section, pageTransitionAnimation) => {
  const sections = document.querySelectorAll(".pt-page"),
    delay = "pt-page-delay300",
    activeClass = "page-active",
    inClass = pageTransitionAnimation.inClass.split(" "),
    outClass = pageTransitionAnimation.outClass.split(" ");

  for (let i = 0; i < sections.length; i++) {
    const sectionDom = sections[i];
    if (section == sectionDom.getAttribute("id")) {
      sectionDom.classList.add(delay, activeClass, ...inClass);
      setTimeout(() => {
        sectionDom.classList.remove(delay, ...inClass);
      }, 1000);
    } else {
      sectionDom.classList.add(...outClass, delay);
      setTimeout(() => {
        sectionDom.classList.remove(activeClass, ...outClass, delay);
      }, 1000);
    }
  }
};

export const simpleBar = () => {
  window.SimpleBar = require("simplebar/dist/simplebar");
  Array.prototype.forEach.call(
    document.querySelectorAll(".pt-page"),
    (el) => new window.SimpleBar(el)
  );
};

export const defaultPageAnimationByPageName = {
  indexDark: 12,
  indexDarkSlider: 32,
  indexDarkParticles1: 12,
  indexDarkParticles2: 12,
  indexDarkHtml5Video: 36,
  indexDarkYoutubeVideo: 36,
  indexLight: 40,
  indexLightSlider: 33,
  indexLightParticles1: 18,
  indexLightParticles2: 15,
  indexLightHtml5Video: 37,
  indexLightYoutubeVideo: 26,
};

export const findAnimation = (animation) => {
  let outClass = "",
    inClass = "";
  switch (animation) {
    case 1:
      outClass = "pt-page-moveToRight";
      inClass = "pt-page-moveFromLeft";
      break;

    case 2:
      outClass = "pt-page-moveToBottom";
      inClass = "pt-page-moveFromTop";
      break;

    case 3:
      outClass = "pt-page-fade";
      inClass = "pt-page-moveFromLeft pt-page-ontop";
      break;

    case 4:
      outClass = "pt-page-fade";
      inClass = "pt-page-moveFromTop pt-page-ontop";
      break;

    case 5:
      outClass = "pt-page-moveToRightFade";
      inClass = "pt-page-moveFromLeftFade";
      break;

    case 6:
      outClass = "pt-page-moveToBottomFade";
      inClass = "pt-page-moveFromTopFade";
      break;

    case 7:
      outClass = "pt-page-moveToRightEasing pt-page-ontop";
      inClass = "pt-page-moveFromLeft";
      break;

    case 8:
      outClass = "pt-page-moveToBottomEasing pt-page-ontop";
      inClass = "pt-page-moveFromTop";
      break;

    case 9:
      outClass = "pt-page-scaleDown";
      inClass = "pt-page-moveFromLeft pt-page-ontop";
      break;

    case 10:
      outClass = "pt-page-scaleDown";
      inClass = "pt-page-moveFromTop pt-page-ontop";
      break;
    case 11:
      outClass = "pt-page-scaleDown";
      inClass = "pt-page-scaleUpDown pt-page-delay300";
      break;
    case 12:
      outClass = "pt-page-scaleDownUp";
      inClass = "pt-page-scaleUp pt-page-delay300";
      break;
    case 13:
      outClass = "pt-page-moveToLeft pt-page-ontop";
      inClass = "pt-page-scaleUp";
      break;
    case 14:
      outClass = "pt-page-moveToRight pt-page-ontop";
      inClass = "pt-page-scaleUp";
      break;
    case 15:
      outClass = "pt-page-moveToTop pt-page-ontop";
      inClass = "pt-page-scaleUp";
      break;
    case 16:
      outClass = "pt-page-moveToBottom pt-page-ontop";
      inClass = "pt-page-scaleUp";
      break;
    case 17:
      outClass = "pt-page-scaleDownCenter";
      inClass = "pt-page-scaleUpCenter pt-page-delay400";
      break;

    case 18:
      outClass = "pt-page-rotateLeftSideFirst";
      inClass = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop";
      break;
    case 19:
      outClass = "pt-page-rotateTopSideFirst";
      inClass = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop";
      break;

    case 20:
      outClass = "pt-page-flipOutRight";
      inClass = "pt-page-flipInLeft pt-page-delay500";
      break;
    case 21:
      outClass = "pt-page-flipOutLeft";
      inClass = "pt-page-flipInRight pt-page-delay500";
      break;
    case 22:
      outClass = "pt-page-flipOutTop";
      inClass = "pt-page-flipInBottom pt-page-delay500";
      break;
    case 23:
      outClass = "pt-page-flipOutBottom";
      inClass = "pt-page-flipInTop pt-page-delay500";
      break;
    case 24:
      outClass = "pt-page-rotateFall pt-page-ontop";
      inClass = "pt-page-scaleUp";
      break;
    case 25:
      outClass = "pt-page-rotateOutNewspaper";
      inClass = "pt-page-rotateInNewspaper pt-page-delay500";
      break;

    case 26:
      outClass = "pt-page-rotatePushRight";
      inClass = "pt-page-moveFromLeft pt-page-ontop";
      break;

    case 27:
      outClass = "pt-page-rotatePushLeft";
      inClass = "pt-page-rotatePullRight pt-page-delay180";
      break;
    case 28:
      outClass = "pt-page-rotatePushRight";
      inClass = "pt-page-rotatePullLeft pt-page-delay180";
      break;
    case 29:
      outClass = "pt-page-rotatePushTop";
      inClass = "pt-page-rotatePullBottom pt-page-delay180";
      break;
    case 30:
      outClass = "pt-page-rotatePushBottom";
      inClass = "pt-page-rotatePullTop pt-page-delay180";
      break;

    case 31:
      outClass = "pt-page-rotateFoldRight";
      inClass = "pt-page-moveFromLeftFade";
      break;

    case 32:
      outClass = "pt-page-rotateFoldBottom";
      inClass = "pt-page-moveFromTopFade";
      break;
    case 33:
      outClass = "pt-page-moveToRightFade";
      inClass = "pt-page-rotateUnfoldLeft";
      break;
    case 34:
      outClass = "pt-page-moveToLeftFade";
      inClass = "pt-page-rotateUnfoldRight";
      break;
    case 35:
      outClass = "pt-page-moveToBottomFade";
      inClass = "pt-page-rotateUnfoldTop";
      break;
    case 36:
      outClass = "pt-page-moveToTopFade";
      inClass = "pt-page-rotateUnfoldBottom";
      break;
    case 37:
      outClass = "pt-page-rotateRoomLeftOut pt-page-ontop";
      inClass = "pt-page-rotateRoomLeftIn";
      break;
    case 38:
      outClass = "pt-page-rotateRoomRightOut pt-page-ontop";
      inClass = "pt-page-rotateRoomRightIn";
      break;

    case 39:
      outClass = "pt-page-rotateRoomBottomOut pt-page-ontop";
      inClass = "pt-page-rotateRoomBottomIn";
      break;
    case 40:
      outClass = "pt-page-rotateCubeLeftOut pt-page-ontop";
      inClass = "pt-page-rotateCubeLeftIn";
      break;
    case 41:
      outClass = "pt-page-rotateCubeRightOut pt-page-ontop";
      inClass = "pt-page-rotateCubeRightIn";
      break;
    case 42:
      outClass = "pt-page-rotateCubeTopOut pt-page-ontop";
      inClass = "pt-page-rotateCubeTopIn";
      break;
    case 43:
      outClass = "pt-page-rotateCubeBottomOut pt-page-ontop";
      inClass = "pt-page-rotateCubeBottomIn";
      break;

    case 44:
      outClass = "pt-page-rotateCarouselRightOut pt-page-ontop";
      inClass = "pt-page-rotateCarouselRightIn";
      break;
    case 45:
      outClass = "pt-page-rotateCarouselTopOut pt-page-ontop";
      inClass = "pt-page-rotateCarouselTopIn";
      break;
    case 46:
      outClass = "pt-page-rotateCarouselBottomOut pt-page-ontop";
      inClass = "pt-page-rotateCarouselBottomIn";
      break;
    case 47:
      outClass = "pt-page-rotateSidesOut";
      inClass = "pt-page-rotateSidesIn pt-page-delay200";
      break;

    case 48:
      outClass = "pt-page-rotateSlideOutToRight";
      inClass = "pt-page-rotateSlideInFromLeft";
      break;
  }
  return { outClass, inClass };
};
