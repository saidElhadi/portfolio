import { useEffect, useState } from "react";
import WatsonState from "../src/context/Context";
import PreLoader from "../src/layout/PreLoader";
import WatsonHead from "../src/layout/WatsonHead";
import "../styles/globals.css";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <WatsonState>
      <WatsonHead />
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </WatsonState>
  );
};
export default App;
