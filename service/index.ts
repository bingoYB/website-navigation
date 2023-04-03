import { jsonp } from "@/utils/jsonp";
// 关键词联想地址
const suggestUrl = "//api.bing.com/qsonhs.aspx";

export async function getSearchSuggestions(searchWord: string) : Promise<string[]>{
  return new Promise((resolve) => {
    // http://api.bing.com/qsonhs.aspx?type=cb&q=#content#&cb=window.bing.sug
    jsonp({
      url: suggestUrl,
      jsonp: "cb",
      data: {
        type: "cb",
        q: searchWord,
      },
      success(datas) {
        if (datas.AS.FullResults) {
            resolve(datas.AS.Results[0].Suggests);
        }else{
            resolve([]);
        }
      },
    });
  });
}
