import Head from "next/head";
import { memo, useContext } from "react";
import { WatsonContext } from "../context/Context";

const WatsonHead = () => {
  const { color, theme } = useContext(WatsonContext);

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="vcard, resume, personal, portfolio, cv, card, responsive, freelancer, web developer, web designer, digital marketer"
      />
      <meta name="description" content="vCard / Resume / Personal Template" />
      <meta name="author" content="cosmos-themes" />
      {/*Page Title*/}
      <title>SAYID - Portfolio/Resume</title>
      {/*Plugins Css*/}
      <link rel="stylesheet" href="css/plugins.css" />
      {/*Main Styles Css*/}
      <link rel="stylesheet" href={`css/style-${theme}.css`} />
      <link rel="stylesheet" href="css/style-demo.css" />
      {/*Color Css*/}
      <link
        className="site-color"
        rel="stylesheet"
        href={`css/${color}-color.css`}
      />
      {/*Modernizr Js*/}
      {/*Favicons*/}
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
    </Head>
  );
};
export default memo(WatsonHead);
