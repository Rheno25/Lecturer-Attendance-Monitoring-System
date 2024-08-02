import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { UserProvider } from "../context/UserContext"; // Import the UserProvider

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Lecturer Monitoring System</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UserProvider> {/* Wrap the app with UserProvider */}
        <Component {...pageProps} />
      </UserProvider>
    </Fragment>
  );
}

export default MyApp;