import { Providers } from "./providers";

const RootLayout = ({ children }) => (
  <>
    <link rel="preconnect" href="https://stijndv.com" />
    <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    <Providers>
      {children}
    </Providers>
  </>
);

export default RootLayout;
