import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>this is a boostrap test</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
