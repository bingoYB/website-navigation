import data from "../../data";
import { useAppStore } from "@/state/app";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

let navData = data.navData;

export default function MenuItem() {
  const router = useRouter();
  const currentTab = router.query.tab || "home";

  const [subActive, setSubActive] = useState(0);

  function menuClick() {
    setSubActive(0);
    window.scrollTo(0, 0);
    useAppStore.setState({ menuExpand: false });
  }

  function subItemClick(index, title) {
    setSubActive(index);
    let scrollTop = (
      document.querySelector('[data-title="' + title + '"') as HTMLElement
    ).offsetTop;
    window.scrollTo(0, scrollTop);
  }

  return (
    <>
      {navData.map((data, index) => (
        <div
          id={`menu-item-${data.id}`}
          className={`item ${currentTab === data.id ? "active" : ""}`}
          key={index}
        >
          <Link
            href={data.id === "home" ? "/" : `/nav/${data.id}`}
            className='item-text zh'
            onClick={(e) => menuClick()}
            key={data.title}
          >
            <span className='item-icon'>
              <i className={`iconfont ${data.icon}`}></i>
            </span>
            <span>{data.title}</span>
          </Link>
          {data.sub && data.sub.length ? (
            <div className='item-subs'>
              <div className='item-subs-wrapper'>
                <div className='positioner'>
                  <div
                    className='nonius'
                    style={{ top: `${subActive * 40}px` }}
                  ></div>
                </div>
                {data.sub.map((el, ii) => (
                  <div
                    className={`sub-item ${subActive === ii ? "active" : ""}`}
                    key={el.title}
                    onClick={(e) => subItemClick(ii, el.title)}
                  >
                    <div className='sub-item-text'>{el.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
}
