(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return c.p+"assets/js/"+({}[e]||e)+"."+{"chunk-03d3dfda":"1ed831dd","chunk-68a05850":"11a6ab40","chunk-7551d8c8":"733aa6f1","chunk-7e94f094":"daf4e445"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-03d3dfda":1,"chunk-68a05850":1,"chunk-7551d8c8":1,"chunk-7e94f094":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-03d3dfda":"0360384d","chunk-68a05850":"f83b8ea2","chunk-7551d8c8":"0e433876","chunk-7e94f094":"0e433876"}[e]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0db5":function(e,t,n){},"0fed":function(e,t,n){},"69bb":function(e,t,n){},"6dc7":function(e,t,n){"use strict";var r=n("0fed"),a=n.n(r);a.a},"7fa09":function(e,t,n){"use strict";var r=n("0db5"),a=n.n(r);a.a},"8d3a":function(e,t,n){},b184:function(e,t,n){"use strict";var r=n("8d3a"),a=n.n(r);a.a},b850:function(e,t,n){"use strict";var r=n("a59a"),a=n("08c1");r["a"].use(a["a"]),t["a"]=new a["a"].Store({state:{site_title:localStorage.getItem("site_title"),title:"无标题",user:null,user_full_name:null,token:null},mutations:{setSiteTitle:function(e,t){e.site_title=t},setTitle:function(e,t){e.title=t,document.querySelector("title").innerText=t},setUser:function(e,t){e.user=t.user,e.token=t.token,e.user_full_name=t.user_full_name},logout:function(e){e.user_full_name=null,e.user=null,e.token=null}},actions:{},modules:{}})},c52c:function(e,t,n){"use strict";n("ff52");var r=n("a59a"),a=n("c478"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"left"},[n("div",{staticClass:"top card"},[n("div",{staticClass:"header"},[e._v("项目信息")]),n("table",{staticClass:"table"},[n("tbody",e._l(e.meta,(function(t){return n("tr",{key:t[0]},[n("th",[e._v(e._s(t[0]))]),n("td",[e._v(e._s(t[1]))])])})),0)])]),n("div",{staticClass:"left-bottom card"},[n("div",{staticClass:"header"},[e._v("项目统计")]),n("table",{staticClass:"table"},[n("tbody",e._l(e.summary,(function(t){return n("tr",{key:t[0]},[n("th",[e._v(e._s(t[0]))]),n("td",[e._v(e._s(t[1]))])])})),0)])])]),n("div",{staticClass:"right card"},[n("div",{staticClass:"header"},[e._v("项目图片")]),e._l(e.imageUrlList,(function(e){return n("img",{key:e,staticClass:"image",attrs:{src:e,alt:"项目图片"}})}))],2)])},s=[],i=(n("f5a1"),n("745d"),n("63ff"),n("d054")),c={name:"home",data:function(){return{imageUrlList:"",meta:[["加载中","请稍后"]],summary:[["加载中","请稍后"]]}},beforeMount:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return i["a"].setTitle("首页"),t.next=3,regeneratorRuntime.awrap(i["a"].get("tunnel/1/"));case 3:return e=t.sent,this.meta=[["项目名称",e.name],["业主信息",e.company],["项目完成状态",e.construction_status],["周边特殊地质",e.environment_status],["项目编号",e.readable_id],["项目概况",e.info],["项目位置",e.land_block],["安全评价（未完成）",e.judgement],["报警开启状态（未完成）",e.is_alarm_opened?"已开启":"未开启"],["预警信息（未完成）",e.warning_status]],this.summary=[["测点数量",e.points_count],["传感器数量",e.sensors_count]],t.next=8,regeneratorRuntime.awrap(i["a"].get("tunnel/1/photos/"));case 8:e=t.sent,this.imageUrlList=e.map((function(e){return e["file"]}));case 10:case"end":return t.stop()}}),null,this)}},u=c,l=(n("6dc7"),n("4e82")),f=Object(l["a"])(u,o,s,!1,null,"1b706ee4",null),d=f.exports,m=n("b850"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logout card"},[n("div",{staticClass:"header"},[e._v("登出")]),n("div",{staticClass:"body"},[e._v(" 您已登出。 ")])])}],v={name:"Logout",mounted:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return i["a"].setTitle("登出页"),localStorage.removeItem("user"),i["a"].commit("logout"),e.next=5,regeneratorRuntime.awrap(i["a"].timeout(3));case 5:return e.next=7,regeneratorRuntime.awrap(i["a"].push("login"));case 7:case"end":return e.stop()}}))}},b=v,g=(n("ea00"),Object(l["a"])(b,p,h,!1,null,"4dc44220",null)),_=g.exports;r["a"].use(a["a"]);var y=[{path:"/",name:"home",component:d},{path:"/login",name:"login",component:function(){return n.e("chunk-03d3dfda").then(n.bind(null,"a55b"))},meta:{escapeAuth:!0}},{path:"/point",name:"point",component:function(){return n.e("chunk-7e94f094").then(n.bind(null,"ec59"))}},{path:"/tendency",name:"tendency",component:function(){return n.e("chunk-68a05850").then(n.bind(null,"96a8"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-7551d8c8").then(n.bind(null,"f820"))}},{path:"/logout",name:"logout",component:_}],k=new a["a"]({routes:y});k.beforeEach((function(e,t,n){e.meta.escapeAuth?n():m["a"].state.token?n():"user"in localStorage?(m["a"].commit("setUser",JSON.parse(localStorage.user)),n()):n({name:"login",query:{next:e.path}})}));t["a"]=k},cd49:function(e,t,n){"use strict";n.r(t);n("2d98"),n("041d"),n("3466"),n("c412");var r=n("a59a"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.user_full_name?n("aside",{staticClass:"sidebar"},[n("router-link",{staticClass:"brand",attrs:{to:{name:"home"}}},[e._v(e._s(e.site_title))]),e._l(e.computedLinks,(function(t){return n("router-link",{key:t.title,class:t.classObject,attrs:{to:t.to}},[n("i",{class:t.icon}),e._v(" "+e._s(t.title)+" ")])}))],2):e._e(),n("div",{staticClass:"container"},[e.user?n("nav",{staticClass:"nav"},[n("div",{staticClass:"text"},[e._v(e._s(e.title))]),n("div",{staticClass:"spacer"}),e.user?n("div",{staticClass:"text"},[e._v(e._s(e.user_full_name))]):e._e(),e.user?n("router-link",{staticClass:"link",attrs:{to:{name:"logout"}}},[e._v("登出")]):n("router-link",{staticClass:"link",attrs:{to:{name:"login"}}},[e._v("登录")])],1):e._e(),n("router-view",{staticClass:"main"}),e.user?n("footer",{staticClass:"footer"},[e._v("2019 © 同济大学赵程课题组")]):e._e()],1)])},o=[],s=(n("31f0"),n("8bc6"),n("f5a1"),n("745d"),n("e8b0"),n("80f9"),n("dc2b"),n("a27f"),n("f010")),i=n("08c1");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"app",data:function(){return{links:[{icon:"home",title:"项目概况",name:"home"},{icon:"location",title:"测点信息",name:"point"},{icon:"stat",title:"数据趋势",name:"tendency"},{icon:"phone",title:"关于我们",name:"about"}]}},computed:u({},Object(i["b"])(["title","user","user_full_name","site_title"]),{computedLinks:function(){var e=this;return this.links.map((function(t){return{icon:"icon-"+t.icon,title:t.title,to:{name:t.name},classObject:{link:!0,active:e.$route.name===t.name}}}))}})},f=l,d=(n("7fa09"),n("b184"),n("4e82")),m=Object(d["a"])(f,a,o,!1,null,"0bcc4b8e",null),p=m.exports,h=n("e1bc");Object(h["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=n("c52c"),b=n("b850");r["a"].config.productionTip=!1,new r["a"]({router:v["a"],store:b["a"],render:function(e){return e(p)}}).$mount("#app")},d054:function(e,t,n){"use strict";n("6799"),n("ad15"),n("30cb"),n("ff52"),n("a27f");var r=n("5df6"),a=(n("63ff"),n("c52c")),o=n("b850");t["a"]={commit:function(e,t){o["a"].commit(e,t)},setTitle:function(e){this.commit("setTitle",e)},push:function(e){return new Promise((function(t){a["a"].push({name:e},t)}))},get:function(e,t){var n,a;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return e="http://dm-api.panhaoyu.top/"+e,t&&(-1===e.indexOf("?")&&(e+="?"),Object.entries(t).forEach((function(t){var n=Object(r["a"])(t,2),a=n[0],o=n[1];e+="&".concat(a,"=").concat(o)}))),s.next=4,regeneratorRuntime.awrap(fetch(e,{method:"GET",mode:"cors",headers:{Authorization:"bearer "+o["a"].state.token}}));case 4:return n=s.sent,s.next=7,regeneratorRuntime.awrap(n.json());case 7:return a=s.sent,s.abrupt("return",a.data);case 9:case"end":return s.stop()}}))},post:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return e="http://dm-api.panhaoyu.top/"+e,t.next=3,regeneratorRuntime.awrap(fetch(e,{method:"POST",mode:"cors",headers:{Authorization:"bearer "+o["a"].state.token}}));case 3:t.sent;case 4:case"end":return t.stop()}}))},timeout:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}))}}},ea00:function(e,t,n){"use strict";var r=n("69bb"),a=n.n(r);a.a}});
//# sourceMappingURL=app.2dca5856.js.map