import webData from "@/data";
import { useAppStore } from "@/state/app";
import { useRouter } from "next/router";

export default function NavHeader() {
  const { tab: current="home" } = useRouter().query;
  const activePage = webData.navData.find(
    (item) => item.id === (current || "home")
  );

  const changeMenuActive = () => {
    useAppStore.setState({ menuExpand: !useAppStore.getState().menuExpand });
  };

  return (
    <div className="header">
      <div
        className="header-title"
        id="header-title"
        onClick={changeMenuActive}
      >
        <div className="header-title-icon">
          <i className={`iconfont ${activePage?.icon}`}></i>
        </div>
        <h1 className="header-title-text zh">{activePage?.title}</h1>
      </div>
      <div className="header-logo">
        <i className="iconfont icon-logo"></i>
      </div>
      <div className="header-right">
        <a
          title="学习博客"
          href="https://bingoyb.github.io/learn-blog/dist"
          target="_blank"
        >
          <i className="iconfont icon-blog"></i>
        </a>
        <a
          title="项目Git地址"
          href="https://github.com/bingoYB/website-navigation"
          target="_blank"
        >
          <i className="iconfont icon-github"></i>
        </a>
      </div>
    </div>
  );
}
