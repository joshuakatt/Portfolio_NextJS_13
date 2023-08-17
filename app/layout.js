import { Providers } from "./providers";
import Head from "./head";

const RootLayout = ({ children }) => (
  <>
    <link rel="preconnect" href="https://stijndv.com" />
    <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    <Head />
    <Providers>
      {children}
    </Providers>
  </>
);

export default RootLayout;
