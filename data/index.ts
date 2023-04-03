import film from "./film.json";
import life from "./life.json";
import tools from "./tools.json";
import study from "./study.json";
// import local from "./local";

const rawData = [
  {
    title: "首页",
    icon: "icon-shouye",
    id: "home",
    sub: [],
  },
  {
    title: "学习",
    icon: "icon-xuexizhongxin",
    id: "study",
    sub: study,
  },
  {
    title: "生活",
    icon: "icon-tubiaozhizuomobanyihuifu-",
    id: "life",
    sub: life,
  },
  {
    title: "影视",
    icon: "icon-dianying",
    id: "films",
    sub: film,
  },
  {
    title: "工具",
    icon: "icon-tool",
    id: "tools",
    sub: tools,
  },
];

type RawDataType = typeof rawData[number];
type MetaData = RawDataType["sub"][number]["item"][number];

function createSearchIndex() {
  const map = new Map<MetaData, string>();
  const whiteList = ["icon", "disabled"];
  for (const key in rawData) {
    const list = rawData[key].sub;
    for (let i = 0; i < list.length; i++) {
      const item = list[i].item;
      for (let j = 0; j < item.length; j++) {
        const meta = item[j];
        let querystr = "";
        let sks = Object.keys(meta);
        // 拼接需要查询的字符串
        sks.forEach((k) => {
          if (meta.hasOwnProperty(k) && !whiteList.includes(k))
            querystr += " " + meta[k];
        });
        map.set(meta, querystr);
      }
    }
  }

  return map;
}

const searchDataMap = createSearchIndex();

function search(searchText: string) {
  let results: MetaData[] = [];
  for (let [key, value] of searchDataMap) {
    if (value.match(searchText)) {
      results.push(key);
    }
  }
  return results;
}

const webData = {
  navData: rawData,
  search
};

export default webData;
