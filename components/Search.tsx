import webData from "@/data";
import { getSearchSuggestions } from "@/service";
import { debounce } from "@/utils/debounce";
import { useLocalStorageState } from "@/utils/hooks/useLocalStorage";
import { isDown, isEnter, isUp } from "@/utils/keyBoard";
import Image from "next/image";
import React, { DOMAttributes, useCallback, useRef, useState } from "react";

const searchEngines = [
  {
    name: "百度",
    icon: "/img/scbaidu.png",
    searchUrl: "https://www.baidu.com/s?wd=",
  },
  {
    name: "必应",
    icon: "/img/scbing.png",
    searchUrl: "https://cn.bing.com/search?q=",
  },
  {
    name: "Google",
    icon: "/img/scgoogle.png",
    searchUrl: "https://www.google.com/search?q=",
  },
];

export default function Search() {
  const pinyingInputRef = useRef(false);
  // 输入框搜索结果
  const [searchRst, setSearchRst] = useState({
    txt: [],
    local: [],
    engine: [],
  });

  //搜索引擎选择的下拉框显示
  const [sChoiceVis, setSChoiceVis] = useState(false);

  // 目前选取的搜索引擎
  const [currentEngineName, setCurrentEngineName] = useLocalStorageState(
    "searchType",
    {
      defaultValue: searchEngines[0].name,
    }
  );
  const activeSearchEngine = searchEngines.find(
    (engine) => engine.name === currentEngineName
  );

  let [activeRst, setActiveRst] = useState({
    index: 0,
    type: "local",
  });
  const [searchState, setSearchState] = useState(false);

  // const [sChoiceVis, setSChoiceVis] = useState(false)
  function sChoiceBtnClick() {
    setSChoiceVis(true);
  }

  function selectSearchEngine(engine) {
    setCurrentEngineName(engine.name);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSearchInput = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const searchText = e.target.value;

      if (searchText === "") {
        setSearchState(false);
        setSearchRst({
          txt: [],
          local: [],
          engine: [],
        });
        return;
      }

      getSearchSuggestions(searchText).then((res) => {
        const local = webData.search(searchText);
        setSearchRst({
          txt: [],
          local: local,
          engine: res,
        });

        setActiveRst({
          index: 0,
          type: "txt",
        });
      });
    }, 300),
    []
  );

  const onKeyDown: DOMAttributes<HTMLInputElement>["onKeyDown"] = (event) => {
    let { type, index } = activeRst;

    if (isEnter(event)) {
      if (pinyingInputRef.current) return;
      let url = "";
      if (type === "local") {
        url = searchRst[type][index].url;
      } else {
        if (type != "txt" && searchRst[type].length) {
          url = activeSearchEngine.searchUrl + searchRst[type][index].Txt;
        } else {
          url = activeSearchEngine.searchUrl + event.currentTarget.value;
        }
      }

      window.open(url, "_blank");

      return;
    }

    if (isUp(event)) {
      if (index === 0) {
        type = nextType(type, true);
        index = searchRst[type].length - 1;
      } else {
        index--;
      }
      setActiveRst({
        index,
        type,
      });
    } else if (isDown(event)) {
      if (type !== "txt" && index < searchRst[type].length - 1) {
        // 如果当前不是txt，且未超出当前范围
        index++;
      } else {
        type = nextType(type);
        index = 0;
      }
      setActiveRst({
        index,
        type,
      });
    }
  };
  // 下一个类型
  function nextType(type: string, prevFlag?: boolean) {
    const typeMap = ["txt", "local", "engine"];
    let i = typeMap.findIndex((el) => el === type);
    while (true) {
      if (prevFlag) {
        i = i === 0 ? 2 : i - 1;
      } else {
        i = (i + 1) % 3;
      }
      // 下一个类型
      let next = typeMap[i];
      if (next === "txt") return next;
      if (searchRst[next].length) return next;
    }
  }
  // mousedown ->（other）blur -> mouseup -> click
  function searchClick() {
    var url =
      activeSearchEngine.searchUrl +
      (document.getElementById("search") as HTMLInputElement).value;

    window.open(url, "_blank");
  }
  return (
    <div className="search inputing">
      <div style={{ overflow: "hidden" }}>
        <div className="search-pre">
          <div
            id="sChoiceBtn"
            onBlur={() => {
              setTimeout(() => setSChoiceVis(false), 300);
            }}
            style={{ background: `url(${activeSearchEngine.icon})` }}
            title="切换搜索引擎"
            className="sChoiceBtn"
            onClick={sChoiceBtnClick}
            tabIndex={1}
          ></div>
        </div>
        <div className="search-input">
          <input
            type="text"
            onBlur={() => {
              setTimeout(() => setSearchState(false), 500);
            }}
            onFocus={() => setSearchState(true)}
            onInput={onSearchInput}
            onCompositionStart={() => {
              pinyingInputRef.current = true;
            }}
            onCompositionEnd={() => {
              pinyingInputRef.current = false;
            }}
            onKeyDown={onKeyDown}
            placeholder="搜索"
            id="search"
            autoComplete="off"
            className="textb"
          ></input>
        </div>
        <div
          className="search-post btn-search"
          id="searchBtn"
          onClick={searchClick}
        ></div>
      </div>
      <div
        className="scBigBox"
        style={{
          height: sChoiceVis ? "160px" : "0",
          display: sChoiceVis ? "block" : "none",
        }}
      >
        {searchEngines.map((s) => (
          <div
            className="scSmallBox"
            key={s.name}
            onClick={() => {
              selectSearchEngine(s);
            }}
          >
            <Image src={s.icon} className="scImg" alt={""} width={20} height={20}/>
            <span className="scName">{s.name}</span>
          </div>
        ))}
      </div>
      <div
        className="search-result"
        style={{ display: searchState ? "block" : "none" }}
      >
        <ul>
          <li
            className=""
            style={{
              display:
                searchRst.local.length || searchRst.engine.length
                  ? "none"
                  : "flex",
            }}
          >
            <div className="result-icon">
              <i
                className="engine-icon"
                style={{ backgroundImage: "url(img/searchBtn.png?v=2.0" }}
              ></i>
            </div>
            <div className="result-text">
              <span>无搜索结果</span>
            </div>
          </li>
          {searchRst.local.map((el, i) => (
            <li
              className={`local-data ${
                activeRst.type === "local" && activeRst.index === i
                  ? "active"
                  : ""
              }`}
              key={i + "local"}
              onClick={() => {
                window.open(el.url, "_blank");
              }}
            >
              <div className="result-icon">
                <i
                  style={{
                    backgroundImage: `url(https://ico.mikelin.cn/${el.url}),url(img/404-1.png)`,
                  }}
                ></i>
              </div>
              <div className="result-text">
                <span>{el.name}</span>
                <span className="desc">- {el.desc}</span>
              </div>
              <div className="result-url" data-url={el.url}>
                - {el.url}
              </div>
            </li>
          ))}
          {searchRst.engine.map((el, i) => (
            <li
              className={`${
                activeRst.type === "engine" && activeRst.index === i
                  ? "active"
                  : ""
              }`}
              key={i + "engine"}
              onClick={() => {
                window.open(activeSearchEngine.searchUrl + el.Txt, "_blank");
              }}
            >
              <div className="result-icon">
                <i
                  className="engine-icon"
                  style={{ backgroundImage: "url(img/searchBtn.png?v=2.0" }}
                ></i>
              </div>
              <div className="result-text">
                <span>{el.Txt}</span>
              </div>
              <div className="result-type">
                - {activeSearchEngine.name + "搜索"}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
