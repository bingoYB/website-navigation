export function jsonp(option: {
  url: string;
  data: Object;
  jsonp: string;
  success: (...args: any) => any;
}) {
  let { url, data, jsonp, success } = option;
  const callbackName = "jsonpCallback" + ~~(Math.random() * 1000000);
  let script = document.createElement("script");
  script.src =
    url + "?" + serializeObject(data) + `&${jsonp}=${callbackName}`;
  document.body.append(script);
  window[callbackName] = function (res) {
    document.body.removeChild(script);
    success(res);
  };
}

function serializeObject(Obj: { [x: string]: any; hasOwnProperty: (arg0: string) => any; }) {
  let str = "";
  for (const key in Obj) {
    if (Obj.hasOwnProperty(key)) {
      str += `&${key}=${Obj[key]}`;
    }
  }
  return str.substr(1);
}
