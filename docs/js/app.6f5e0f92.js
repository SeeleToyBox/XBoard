(function(e){function t(t){for(var n,r,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)r=s[d],a[r]&&l.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var s=o[r];0!==a[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},a={app:0},i=[];function s(e){return c.p+""+({Board:"Board"}[e]||e)+"."+{Board:"2c0fae67ac3682429507"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={Board:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise(function(t,o){for(var n="css/"+({Board:"Board"}[e]||e)+"."+{Board:"90b3e48b"}[e]+".css",a=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===a))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===n||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],f.parentNode.removeChild(f),o(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[e]=0}));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),u=function(t){d.onerror=d.onload=null,clearTimeout(l);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,o[1](i)}a[e]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/XBoard/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"3dfd":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("router-view")},r=[],a={name:"App",created:function(){document.oncontextmenu=function(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}}},i=a,s=o("2877"),c=Object(s["a"])(i,n,r,!1,null,"7e9b138a",null);t["a"]=c.exports},"41cb":function(e,t,o){"use strict";var n=o("2b0e"),r=o("8c4f");n["default"].use(r["a"]),t["a"]=new r["a"]({mode:"history",base:"/XBoard/",routes:[{path:"/",name:"Board",component:function(){return o.e("Board").then(o.bind(null,"5d6d"))}}]})},"4de4":function(e,t,o){"use strict";o("6762"),o("2fdb"),o("7f7f");var n=o("2d66"),r=o("6be2"),a=o("117e"),i=o("d3b2"),s=o("4904"),c=o("6880"),u=o("f886"),d=o("de10"),l=o("dd4b"),f=o("f69c"),p=o("7d1f"),g=o("bf7a"),b=o("9e6d"),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.type?o("span",{staticClass:"icon iconfont",class:[e.type?"icon-"+e.type:""]}):e._e()},A=[],m={name:"Icon",props:{type:String}},v=m,L=(o("f26a"),o("2877")),y=Object(L["a"])(v,h,A,!1,null,"134c9f88",null),w=y.exports,B=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"tooltipBox",class:{"tooltip-box":!0,hover:e.isShow},on:{mouseover:e.handleMouseOver,mouseout:e.handleMouseOut}},[o("div",{ref:"tooltip",staticClass:"tooltip",style:e.tooltipStyle},[e._t("content",[e._v(e._s(e.content))])],2),o("div",{staticClass:"content"},[e._t("default")],2)])},C=[],E=(o("c5f6"),{name:"Tooltip",props:{content:[String,Number]},data:function(){return{isShow:!1,tooltipStyle:{}}},methods:{handleMouseOver:function(){this.isShow=!0},handleMouseOut:function(){this.isShow=!1}},mounted:function(){var e=this,t=e.$refs.tooltip,o=t.clientWidth?t.clientWidth/-2:0;o&&(e.tooltipStyle={"margin-left":o+"px"})}}),O=E,x=(o("b866"),Object(L["a"])(O,B,C,!1,null,"570be5aa",null)),M=x.exports,k={Menu:b["a"],MenuItem:g["a"],Tooltip:p["a"],Divider:f["a"],ColorPicker:l["a"],InputNumber:d["a"],Dropdown:u["a"],DropdownMenu:c["a"],DropdownItem:s["a"],Icon:i["a"],Message:a["a"],Modal:r["a"],Input:n["a"],XIcon:w,XTooltip:M},S={install:function(e,t){for(var o in k)o&&k[o]&&(e.component(o,k[o]),["Message","Modal"].includes(o)&&(e.prototype["$".concat(o)]=k[o]))}};t["a"]=S},"56d7":function(e,t,o){"use strict";o.r(t),function(e){o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),n=o("a78e"),r=o("5ad4"),a=o("953d"),i=o.n(a),s=o("2a19"),c=o("f318"),u=o.n(c),d=o("3dfd"),l=o("9225"),f=o("41cb"),p=o("c0d6"),g=(o("ddb8"),o("bee9")),b=o("4de4"),h=o("f121"),A=(o("a753"),o("8096"),o("14e1"),o("dbaa"),e&&!1);t["default"].config.debug=A,t["default"].config.devtools=A,t["default"].config.productionTip=A,t["default"].config.performance=A,t["default"].prototype.$X={isDev:A,utils:g["a"],config:h["a"],Cookies:n};var m=Object(l["a"])(t["default"],"en-us");t["default"].use(r["a"]),t["default"].use(i.a),a["Quill"].register("modules/imageDrop",s["a"]),a["Quill"].register("modules/imageResize",u.a),t["default"].use(b["a"]),new t["default"]({i18n:m,router:f["a"],store:p["a"],render:function(e){return e(d["a"])}}).$mount("#app")}.call(this,o("f28c"))},"594e":function(e,t,o){},9225:function(e,t,o){"use strict";o("ac6a"),o("456d");var n=o("a925"),r=o("cebc"),a=o("69c5"),i=o.n(a),s=o("9ef8"),c=o.n(s),u={L10001:"移动（V）",L10002:"Marquee（M）",L10003:"铅笔（P）",L10004:"Line（L）",L10005:"文字（T）",L10006:"橡皮擦（E）",L10007:"撤消（Ctrl + Z）",L10008:"重做（Ctrl + Shift + Z）",L10009:"上传图片（U）",L10010:"清除（C）",L10011:"下载（Ctrl + S）",L10012:"全屏",L10013:"铅笔颜色",L10014:"画布颜色",L10015:"铅笔大小",L10016:"语言",L10017:"Github",L10018:"预览（Ctrl + P）",L10019:"反馈",L10020:"便签（N）",L10021:"栅格（G）",L10101:"提示",L10102:"确认清空当前画板吗？",L10103:"切换背景色将清空当前画板，确认切换？",L10104:"数据为空，导出失败！",L10105:"确认删除该便签吗？",L10106:"确认删除该文本吗？",L10107:"确认删除该画板吗？"},d={L10001:"Move (V)",L10002:"Marquee (M)",L10003:"Pencil (P)",L10004:"Line (L)",L10005:"Text (T)",L10006:"Eraser (E)",L10007:"Undo (Ctrl + Z)",L10008:"Redo (Ctrl + Shift + Z)",L10009:"Upload Image (U)",L10010:"Clear (C)",L10011:"Download (Ctrl + S)",L10012:"Full Screen",L10013:"Pencil color",L10014:"Canvas Color",L10015:"Pencil size",L10016:"Language",L10017:"Github",L10018:"Preview (Ctrl + P)",L10019:"Feedback",L10020:"Note (N)",L10021:"Grid (G)",L10101:"Hint",L10102:"Are you sure to clear the current artboard? ",L10103:"Switching the background color will clear the current artboard, confirm the switch? ",L10104:"Data is empty, export failed!",L10105:"Are you sure to delete the note? ",L10106:"Are you sure to delete the text? ",L10107:"Are you sure to delete the artboard? "},l={label:{"zh-cn":"简体中文","en-us":"English"},icon:{"zh-cn":o("984f"),"en-us":o("d3ea")},data:{"zh-cn":Object(r["a"])({},c.a,u),"en-us":Object(r["a"])({},i.a,d)}},f=o("c3fc");t["a"]=function(e,t){var o=e.prototype.$X,r=o.config,a=o.Cookies,i=r.cookie.getItem("locale"),s=a.get(i);if(!t){var c=Object.keys(l.label);t=s||c[0]}e.use(n["a"]),e.locale=function(){},e.prototype.$X.langs=l,e.prototype.$X.locale=t;var u=new n["a"]({locale:t,messages:l.data});return f["a"].i18n(function(e,t){return u.t(e,t)}),u}},"984f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAElBMVEXWTCTVRSXcYR/gchrokhL3zAVCW9qcAAAAWElEQVQoz62QCwrAIAxDmzS9/5WnwmDDRfYrCOJLHmrEPwMsMek42LqZDlPqAZm+qoTuMO6qaEUGrjHGzZ18nDJXTwMTr74F08ZHnsKjG3Fe9+xzDB8S+2y66AB9oQlI7gAAAABJRU5ErkJggg=="},"9a15":function(e,t,o){},"9d64":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACjElEQVRoQ+1ZPW/TUBQ994WqC819EVJVsaRJGICFr50BCTGyMDAxlN/Al8o3CJXyExAdOjHwByomZgSCBZAgSbOgCgnFL2FAQHyRIyc4rZNi14kd6XlL/D7Oufdc2/c8wpRfNOX4YQmknUGbgcxmoNFuH3Vd94LruipNkEopVyn1ojg39yEMxw4JNRyn0AGeAFgCMlPkAmAtB1wpat0MEhkg8F0k7xjzloBKmlEftrcAVc188gBRqzdmgEDdmNsici+L4PuAie6UmO+HEqg5zkcAh/2bW4poqZjPbxCRmwYpEVGNVuucK7IGYMHH8Kms9ZEdBESE6sZ0eroXYLWi9bU0gG/fs+o4jwm46v8vJeYcEXl18a9IP4vM5oz5GZi8XNb6URYI1BxnGcDDHpYS8ywR/YpEwCtwY8xFETk4TlJE9JWZnwcLNRECtWbzHYiOjRN8f22R9+VC4Xjv954JiEiubsyfiYD3Nykx7yMiryaRBIGZujFdzU3qKjHPEFE3aJaAiNgMRJWelRCA/ovMSiiqfgBYCVkJxZBNcIqVkJWQlZD9mBv5Jn69n/nMPNGPUUqptdun0em8iqOmpJ9Cgw0N0a0yc79HHQbQNwpiORqJNjTdpiLQUnreUaVQuLtbZGN/QyXdUnpAg029ItpaZH5GRL9HkdhsNk90gPO7EQ3eH1tTHwVE0mP/q6UMMbZWKlrfSBpMnPWqjrNCQM9kCze2/Oa5by0K8E0RXVrM51+maS1utlpnXZF1AuZ98uHWYpeAMTch8iBOlCY2Z9sTMMxef0PAoYkBirCRAF8086mh9rq3ln/AsQrgcsYOOJ7mgOsjDziCwZjaI6YIGc3EUHvMmnYabAZsBvYYgb9su4ZP7eojSwAAAABJRU5ErkJggg=="},b866:function(e,t,o){"use strict";var n=o("9a15"),r=o.n(n);r.a},bee9:function(e,t,o){"use strict";var n=o("2b0e"),r=new n["default"],a=r,i=(o("3b2b"),o("a481"),{formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm";e instanceof Date||(e=new Date(e));var o=function(e){return("00"+e).substr(e.length)},n=function(e,t){/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(t)){var a=n[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?a:o(a))}return t};return n(e,t)}}),s={sortByNumber:function(e,t,o){return"desc"===o?parseInt(e)<parseInt(t)?1:-1:parseInt(e)>parseInt(t)?1:-1}},c=(o("34ef"),o("28a5"),{base642Blob:function(e){for(var t=e.split(";base64,"),o=t[0].split(":")[1],n=window.atob(t[1]),r=n.length,a=new Uint8Array(r),i=0;i<r;i++)a[i]=n.charCodeAt(i);return new Blob([a],{type:o})},downloadFile:function(e,t){var o=this.base642Blob(t),n=URL.createObjectURL(o),r=document.createElement("a");r.textContent="download image",r.href=n,r.download=e,r.click(),URL.revokeObjectURL(n)}});t["a"]={bus:a,filters:i,sort:s,file:c}},c0d6:function(e,t,o){"use strict";var n=o("cebc"),r=o("2b0e"),a=o("2f62");r["default"].use(a["a"]);var i={penColor:"#222F3D",backgroundColor:"rgba(255, 255, 255, 1)",dotSize:1},s={id:"",screenshot:"",status:{footer:!0},formData:i,signaturePad:{options:{dotSize:i.dotSize,minWidth:.3*i.dotSize,maxWidth:1.7*i.dotSize,throttle:1,minDistance:1,backgroundColor:i.backgroundColor,penColor:i.penColor},data:[],undoHistory:[]},textList:[],noteList:[],activePad:{}};t["a"]=new a["a"].Store({state:{activeBoardIndex:null,defBoard:s,boardList:[]},mutations:{"board/activeBoardIndex/update":function(e,t){e.activeBoardIndex=t},"board/list/add":function(e,t){var o=Object(n["a"])({},s,t);e.boardList.push(JSON.parse(JSON.stringify(o)))},"board/list/remove":function(e,t){if(e.boardList.splice(t,1),!e.boardList.length){var o=Object(n["a"])({},s);e.boardList.push(JSON.parse(JSON.stringify(o)))}},"board/screenshot/update":function(e,t){var o=t.index,n=t.screenshot;e.boardList[o].screenshot=n},"board/signaturePad/options/update":function(e,t){var o=t.index,n=t.data;e.boardList[o].signaturePad.options[n.key]=n.val},"board/signaturePad/data/update":function(e,t){var o=t.index,n=t.data;e.boardList[o].signaturePad.data=n},"board/signaturePad/undoHistory/update":function(e,t){var o=t.index,n=t.data;e.boardList[o].signaturePad.undoHistory=n}},actions:{},getters:{activeBoardIndex:function(e){return e.activeBoardIndex},boardList:function(e){return e.boardList},defBoard:function(e){return e.defBoard}}})},d3ea:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAPFBMVEUtQGbakJrIWmnNZXP///+xEijdmaK6L0IlOmCuCiDXiJMaL1dFU3TNaHa+O031///dmaPANEa3UWOmHTOgdo66AAAAdklEQVQoz4XP2Q6AIAxE0RFQ0HGJ/v/HyiJRqaknJDw03CpAhGoUEJClK0wCmJ6hFDbXut6VgN/9/pZW51lM8LCmgTgvZXD+iLN0036uQh7Vjz+MiBO3r3hcy5B/j8ba5mB+8AKcCosKXvUX71ToVX/xQYVRdQIA1g5aJxB67QAAAABJRU5ErkJggg=="},dbaa:function(e,t,o){},ddb8:function(e,t,o){"use strict";var n=o("9483");Object(n["a"])("".concat("/XBoard/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}})},f121:function(e,t,o){"use strict";var n={version:"1.0.0",name:"XBoard",title:"XBoard",subtitle:"XBoard",minTitle:"XBoard",logo:o("9d64"),github:"https://github.com/OXOYO/XBoard",githubPages:"https://oxoyo.github.io/XBoard/",feedback:"https://github.com/OXOYO/XBoard/issues/new",copyright:"© 2019 OXOYO All Rights Reserved."},r={prefix:"x-board-",path:"/",items:{account:"a",token:"t",locale:"l"},unless:["locale"],getItem:function(e){return e?this.prefix+this.items[e]:""}};t["a"]={system:n,cookie:r}},f26a:function(e,t,o){"use strict";var n=o("594e"),r=o.n(n);r.a}});