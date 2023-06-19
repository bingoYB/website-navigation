/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <meta name="referrer" content="strict-origin-when-cross-origin"></meta>
        <link rel="icon" type="image/png" href="/img/favicon.png" />
        <link
          href="https://cdn.bootcss.com/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        ></link>
        {/* <!--阿里图标 --> */}
        <link
          rel="stylesheet"
          href="https://at.alicdn.com/t/font_1218740_b6bm55w3yga.css"
        />
        <link rel="stylesheet" href="/style/pure.min.css" />
        <link rel="stylesheet" href="/style/grids-responsive.min.css" />
        <link rel="stylesheet" href="/style/nprogress.min.css" />
        <link rel="stylesheet" href="/style/hint.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?bdcdc5e1bdfb8f469e0f1b4566c19c0c";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`,
          }}
        ></script>
      </Head>
      <body>
        <a href="/"><Image src={"/img/text-back.png"} alt="logo" style={{ display: "none" }} /></a>
        <Image src={"/img/text.png"} alt="logo" style={{ display: "none" }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
