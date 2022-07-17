//note:this file is main file

import Head from "next/head";
import Landingpage from "./screens/landingpage";

export default function App() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* for animation library */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        ></link>
      </Head>

      {/* main of landing page */}
<Landingpage/>
    </div>
  );
}