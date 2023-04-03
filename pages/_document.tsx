/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' type='image/png' href='/img/favicon.png' />
        <link
          href='https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css'
          rel='stylesheet'
        ></link>
        {/* <!--阿里图标 --> */}
        <link
          rel='stylesheet'
          href='https://at.alicdn.com/t/font_1218740_b6bm55w3yga.css'
        />
        <link rel='stylesheet' href='/style/pure.min.css' />
        <link rel='stylesheet' href='/style/grids-responsive.min.css' />
        <link rel='stylesheet' href='/style/nprogress.min.css' />
        <link rel='stylesheet' href='/style/hint.min.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
