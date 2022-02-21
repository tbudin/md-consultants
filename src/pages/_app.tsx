import "normalize.css";
import { AppProps } from "next/app";
import { useEffect } from 'react';
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import config from "../lib/config";

import TagManager from 'react-gtm-module';
const tagManagerArgs = {
  gtmId: config.gtm_id
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <Component {...pageProps} />;
}
