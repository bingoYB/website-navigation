/* eslint-disable @next/next/no-css-tags */
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";
import React from "react";
import "./index.css";

// import { create } from "zustand";

// const store = create(createBigObject);

export default function App({ Component, pageProps }) {
  // if(typeof window === 'undefined') {
  //   store.setState(pageProps.store);
  // }

  return (
    <>
      <Head>
        <title>仙人指路</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="仙人指路，一个集生活、学习、娱乐一体的网址导航"
        />
        <meta
          name="keywords"
          content="导航，电影，动漫，前端，学习，生活，娱乐，网址导航，仙人指路"
        />
        {/* <!-- Set render engine for 360 browser --> */}
        <meta name="renderer" content="webkit" />
        <meta name="referrer" content="never" />
        <link href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css" rel="stylesheet"></link>
        {/* <!--阿里图标 --> */}
        <link
          rel="stylesheet"
          href="https://at.alicdn.com/t/font_1218740_b6bm55w3yga.css"
        />
        <link rel="stylesheet" href="style/pure.min.css" />
        <link rel="stylesheet" href="style/grids-responsive.min.css" />
        <link rel="stylesheet" href="style/nprogress.min.css" />
        <link rel="stylesheet" href="style/hint.min.css" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// export async function getInitialProps() {
//   return {
//     store: createBigObject(),
//   };
// }
