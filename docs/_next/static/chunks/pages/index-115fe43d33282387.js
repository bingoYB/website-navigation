(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(633)}])},6773:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var t=n(5893),a=n(7267),c=n(5675),i=n.n(c);function l(e){return(0,t.jsx)("div",{className:"block block-list",children:e.data.map((e,s)=>(0,t.jsxs)("section",{className:"section","data-title":e.title,children:[(0,t.jsx)("div",{className:"title",children:(0,t.jsx)("h2",{className:"title-text",children:e.title})}),(0,t.jsx)("div",{className:"list",children:(0,t.jsx)("div",{className:"card-wrapper",children:(0,t.jsx)("div",{className:"pure-g",children:e.item.map((e,s)=>(0,t.jsx)("div",{className:"pure-u-lg-1-4 pure-u-md-1-3 pure-u-sm-23-24 pure-u-1-2",children:(0,t.jsxs)("div",{className:"card hint--bottom hint--bounce hint--medium","aria-label":e.desc,children:[e.disabled?(0,t.jsx)("div",{className:"diabled-item-badge",children:"失效"}):"",(0,t.jsx)("a",{href:e.url,rel:"nofollow",target:"_blank",className:"card-default ".concat(e.disabled?"web-disabled":""),children:(0,t.jsxs)("div",{children:[(0,t.jsx)(i(),{className:"card-icon",alt:"loading",src:(0,a.F)(e.url),width:32,height:32}),(0,t.jsxs)("div",{className:"card-main",children:[(0,t.jsx)("div",{className:"card-name",children:e.name}),(0,t.jsx)("div",{style:{width:"100%"},children:(0,t.jsx)("div",{className:"card-des",children:e.desc})})]})]})})]})},s+e.name))})})})]},s+e.title))})}},633:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return x},default:function(){return g}});var t=n(5893),a=JSON.parse('[{"title":"综合","icon":"icon-router","item":[{"tag":"资讯","url":"https://tophub.today/","icon":"https://tophub.today/favicon.ico","name":"今日热榜","desc":"今日热榜提供各站热点聚合：微信、今日头条、百度、知乎、V2EX、微博、贴吧、豆瓣、天涯、虎扑、Github、华尔街见闻...全网新闻热点排行榜服务。","disabled":false},{"url":"https://weibo.com/u/3816118370/home?topnav=1&wvr=6","icon":"https://weibo.com/favicon.ico","name":"微博","desc":"随时随地发现新鲜事","disabled":false},{"url":"https://github.com/","icon":"https://github.githubassets.com/favicon.ico","name":"github","desc":"开源代码库","disabled":false},{"url":"https://www.zhihu.com/","icon":"https://uploads.moulem.com/id0siteimg/z204.png","name":"知乎","desc":"有问题，上知乎","disabled":false},{"url":"https://36kr.com/","icon":"https://36kr.com/favicon.ico","name":"36氪","desc":"36氪通过全面，独家的视角为用户深度剖析最前沿的资讯，致力于让一部分人先看到未来，内容涵盖快讯，科技，金融，投资，房产，汽车，互联网，股市，教育，生活，职场等，秉承着新商业媒体人的使命砥砺前行","disabled":false},{"url":"https://juejin.im/timeline","icon":"https://b-gold-cdn.xitu.io/favicons/v2/favicon.ico","name":"掘金","desc":"前端社区","disabled":false},{"url":"https://www.dmxq.fun/","name":"大米星球","desc":"大米星球-最新Netflix新剧_韩国电影免费在线观看","disabled":false},{"url":"https://www.qweather.com/","name":"和风天气网","desc":"和风天气网","disabled":false}]}]'),c=n(6773),i=n(608);async function l(e){return new Promise(s=>{!function(e){let{url:s,data:n,jsonp:t,success:a}=e,c="jsonpCallback"+~~(1e6*Math.random()),i=document.createElement("script");i.src=s+"?"+function(e){let s="";for(let n in e)e.hasOwnProperty(n)&&(s+="&".concat(n,"=").concat(e[n]));return s.substr(1)}(n)+"&".concat(t,"=").concat(c),document.body.append(i),window[c]=function(e){document.body.removeChild(i),a(e)}}({url:"//api.bing.com/qsonhs.aspx",jsonp:"cb",data:{type:"cb",q:e},success(e){e.AS.FullResults?s(e.AS.Results[0].Suggests):s([])}})})}var r=n(7267),o=n(7294);let d=e=>s=>{for(let[n,t]of Object.entries(e))if(Array.isArray(t)){if(t.includes(s[n]))return!0}else if(s[n]===t)return!0;return!1};d({code:"Backspace",keyCode:8}),d({code:"Space",keyCode:32}),d({code:"Escape",keyCode:27});var u=n(5675),h=n.n(u);let m=[{name:"百度",icon:"/website-navigation/img/scbaidu.png",searchUrl:"https://www.baidu.com/s?wd="},{name:"必应",icon:"/website-navigation/img/scbing.png",searchUrl:"https://cn.bing.com/search?q="},{name:"Google",icon:"/website-navigation/img/scgoogle.png",searchUrl:"https://www.google.com/search?q="}];function p(){var e;let s;let n=(0,o.useRef)(!1),[a,c]=(0,o.useState)({txt:[],local:[],engine:[]}),[d,u]=(0,o.useState)(!1),[p,x]=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{serializer:n=JSON.stringify,deserializer:t=JSON.parse}=s,a=t(localStorage.getItem(e)),[c,i]=(0,o.useState)(null==s?void 0:s.defaultValue);return(0,o.useEffect)(()=>{i(a||(null==s?void 0:s.defaultValue))},[]),(0,o.useEffect)(()=>{localStorage.setItem(e,n(c))},[e,n,c]),[c,i]}("searchType",{defaultValue:m[0].name}),g=m.find(e=>e.name===p),[f,v]=(0,o.useState)({index:0,type:"local"}),[b,j]=(0,o.useState)(!1),w=(0,o.useCallback)((e=e=>{let s=e.target.value;if(""===s){j(!1),c({txt:[],local:[],engine:[]});return}l(s).then(e=>{let n=i.Z.search(s);c({txt:[],local:n,engine:e}),v({index:0,type:"txt"}),j(!0)})},function(){for(var n=arguments.length,t=Array(n),a=0;a<n;a++)t[a]=arguments[a];clearTimeout(s),s=setTimeout(()=>{e.apply(this,t)},300)}),[]),N=e=>{let{type:s,index:t}=f;if(e.code?"Enter"===e.code||"NumpadEnter"===e.code:13===e.keyCode){if(n.current)return;let c="";c="local"===s?a[s][t].url:"txt"!=s&&a[s].length?g.searchUrl+a[s][t].Txt:g.searchUrl+e.currentTarget.value,window.open(c,"_blank");return}(e.code?"ArrowUp"===e.code:38===e.keyCode)?(0===t?t=a[s=y(s,!0)].length-1:t--,v({index:t,type:s})):(e.code?"ArrowDown"===e.code:40===e.keyCode)&&("txt"!==s&&t<a[s].length-1?t++:(s=y(s),t=0),v({index:t,type:s}))};function y(e,s){let n=["txt","local","engine"],t=n.findIndex(s=>s===e);for(;;){let e=n[t=s?0===t?2:t-1:(t+1)%3];if("txt"===e||a[e].length)return e}}return(0,t.jsxs)("div",{className:"search inputing",children:[(0,t.jsxs)("div",{style:{overflow:"hidden"},children:[(0,t.jsx)("div",{className:"search-pre",children:(0,t.jsx)("div",{id:"sChoiceBtn",onBlur:()=>{setTimeout(()=>u(!1),300)},style:{background:"url(".concat(g.icon,")")},title:"切换搜索引擎",className:"sChoiceBtn",onClick:function(){u(!0)},tabIndex:1})}),(0,t.jsx)("div",{className:"search-input",children:(0,t.jsx)("input",{type:"text",onBlur:()=>{setTimeout(()=>j(!1),500)},onFocus:()=>j(!0),onInput:w,onCompositionStart:()=>{n.current=!0},onCompositionEnd:()=>{n.current=!1},onKeyDown:N,placeholder:"搜索",id:"search",autoComplete:"off",className:"textb"})}),(0,t.jsx)("div",{className:"search-post btn-search",id:"searchBtn",onClick:function(){var e=g.searchUrl+document.getElementById("search").value;window.open(e,"_blank")}})]}),(0,t.jsx)("div",{className:"scBigBox",style:{height:d?"160px":"0",display:d?"block":"none"},children:m.map(e=>(0,t.jsxs)("div",{className:"scSmallBox",onClick:()=>{x(e.name)},children:[(0,t.jsx)(h(),{src:e.icon,className:"scImg",alt:"",width:20,height:20}),(0,t.jsx)("span",{className:"scName",children:e.name})]},e.name))}),(0,t.jsx)("div",{className:"search-result",style:{display:b?"block":"none"},children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{className:"",style:{display:a.local.length||a.engine.length?"none":"flex"},children:[(0,t.jsx)("div",{className:"result-icon",children:(0,t.jsx)("i",{className:"engine-icon",style:{backgroundImage:"url(img/searchBtn.png?v=2.0"}})}),(0,t.jsx)("div",{className:"result-text",children:(0,t.jsx)("span",{children:"无搜索结果"})})]}),a.local.map((e,s)=>(0,t.jsxs)("li",{className:"local-data ".concat("local"===f.type&&f.index===s?"active":""),onClick:()=>{window.open(e.url,"_blank")},children:[(0,t.jsx)("div",{className:"result-icon",children:(0,t.jsx)("i",{style:{backgroundImage:"url(".concat((0,r.F)(e.url),"),url(img/404-1.png)")}})}),(0,t.jsxs)("div",{className:"result-text",children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsxs)("span",{className:"desc",children:["- ",e.desc]})]}),(0,t.jsxs)("div",{className:"result-url","data-url":e.url,children:["- ",e.url]})]},s+"local")),a.engine.map((e,s)=>(0,t.jsxs)("li",{className:"".concat("engine"===f.type&&f.index===s?"active":""),onClick:()=>{window.open(g.searchUrl+e.Txt,"_blank")},children:[(0,t.jsx)("div",{className:"result-icon",children:(0,t.jsx)("i",{className:"engine-icon",style:{backgroundImage:"url(img/searchBtn.png?v=2.0"}})}),(0,t.jsx)("div",{className:"result-text",children:(0,t.jsx)("span",{children:e.Txt})}),(0,t.jsxs)("div",{className:"result-type",children:["- ",g.name+"搜索"]})]},s+"engine"))]})})]})}var x=!0;function g(){return(0,t.jsxs)("div",{children:[(0,t.jsx)(p,{}),(0,t.jsx)("div",{className:"often",children:(0,t.jsx)(c.Z,{data:a})})]})}},7267:function(e,s,n){"use strict";function t(e){return"https://api.iowen.cn/favicon/"+new URL(e).host+".png"}n.d(s,{F:function(){return t}})}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);