(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"assets/js/"+({}[e]||e)+"."+{"chunk-352f1c45":"c4c43193","chunk-45f48b58":"e92ad4f6"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-352f1c45":1,"chunk-45f48b58":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-352f1c45":"0e433876","chunk-45f48b58":"5163b175"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],m.parentNode.removeChild(m),n(i)},m.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/displacement-monitor-frontend/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0fcb":function(e,t,n){},"69e5":function(e,t,n){"use strict";var r=n("85d3"),a=n.n(r);a.a},"6d69":function(e,t,n){},"6dc7":function(e,t,n){"use strict";var r=n("6d69"),a=n.n(r);a.a},"85d3":function(e,t,n){},b184:function(e,t,n){"use strict";var r=n("fe31"),a=n.n(r);a.a},b850:function(e,t,n){"use strict";var r=n("eaf6"),a=n("08c1");r["a"].use(a["a"]),t["a"]=new a["a"].Store({state:{site_title:localStorage.getItem("site_title"),title:"无标题",user:null,user_full_name:null,token:null},mutations:{setSiteTitle:function(e,t){e.site_title=t},setTitle:function(e,t){e.title=t,document.querySelector("title").innerText=t},setUser:function(e,t){e.user=t.user,e.token=t.token,e.user_full_name=t.user_full_name},logout:function(e){e.user_full_name=null,e.user=null,e.token=null}},actions:{},modules:{}})},c52c:function(e,t,n){"use strict";n("12cd");var r=n("eaf6"),a=n("c478"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"left"},[n("div",{staticClass:"top card"},[n("div",{staticClass:"header"},[e._v("项目信息")]),n("table",{staticClass:"table"},[n("tbody",e._l(e.meta,(function(t){return n("tr",{key:t[0]},[n("th",[e._v(e._s(t[0]))]),n("td",[e._v(e._s(t[1]))])])})),0)])]),n("div",{staticClass:"left-bottom card"},[n("div",{staticClass:"header"},[e._v("项目统计")]),n("table",{staticClass:"table"},[n("tbody",e._l(e.summary,(function(t){return n("tr",{key:t[0]},[n("th",[e._v(e._s(t[0]))]),n("td",[e._v(e._s(t[1]))])])})),0)])])]),n("div",{staticClass:"right card"},[n("div",{staticClass:"header"},[e._v("项目图片")]),e._l(e.imageUrlList,(function(e){return n("img",{key:e,staticClass:"image",attrs:{src:e,alt:"项目图片"}})}))],2)])},i=[],s=(n("dca8"),n("b488"),n("63ff"),n("d054")),c={name:"home",data:function(){return{imageUrlList:"",meta:[["加载中","请稍后"]],summary:[["加载中","请稍后"]]}},beforeMount:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return s["a"].setTitle("首页"),t.next=3,regeneratorRuntime.awrap(s["a"].get("tunnel/1/"));case 3:return e=t.sent,this.meta=[["项目名称",e.name],["业主信息",e.company],["项目完成状态",e.construction_status],["周边特殊地质",e.environment_status],["项目编号",e.readable_id],["项目概况",e.info],["项目位置",e.land_block],["安全评价（未完成）",e.judgement],["报警开启状态（未完成）",e.is_alarm_opened?"已开启":"未开启"],["预警信息（未完成）",e.warning_status]],this.summary=[["测点数量",e.points_count],["传感器数量",e.sensors_count]],t.next=8,regeneratorRuntime.awrap(s["a"].get("tunnel/1/photos/"));case 8:e=t.sent,this.imageUrlList=e.map((function(e){return e["file"]}));case 10:case"end":return t.stop()}}),null,this)}},u=c,l=(n("6dc7"),n("4e82")),f=Object(l["a"])(u,o,i,!1,null,"1b706ee4",null),m=f.exports,d=n("b850"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logout card"},[n("div",{staticClass:"header"},[e._v("登出")]),n("div",{staticClass:"body"},[e._v(" 您已登出。 ")])])}],v={name:"Logout",beforeRouteEnter:function(e,t,n){n((function(e){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return s["a"].setTitle("登出页"),localStorage.removeItem("user"),s["a"].commit("logout"),e.next=5,regeneratorRuntime.awrap(s["a"].timeout(3));case 5:return e.next=7,regeneratorRuntime.awrap(s["a"].push("login"));case 7:case"end":return e.stop()}}))}))}},g=v,b=(n("69e5"),Object(l["a"])(g,p,h,!1,null,"278c7f11",null)),_=b.exports;r["a"].use(a["a"]);var y=[{path:"/",name:"home",component:m},{path:"/login",name:"login",component:function(){return n.e("chunk-45f48b58").then(n.bind(null,"a55b"))},meta:{escapeAuth:!0}},{path:"/point",name:"point",component:function(){return n.e("chunk-352f1c45").then(n.bind(null,"ec59"))}},{path:"/logout",name:"logout",component:_}],w=new a["a"]({routes:y});w.beforeEach((function(e,t,n){e.meta.escapeAuth?n():d["a"].state.token?n():"user"in localStorage?(d["a"].commit("setUser",JSON.parse(localStorage.user)),n()):n({name:"login",query:{next:e.path}})}));t["a"]=w},cd49:function(e,t,n){"use strict";n.r(t);n("a087"),n("9216"),n("9bc6"),n("b250");var r=n("eaf6"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.user_full_name?n("aside",{staticClass:"sidebar"},[n("router-link",{staticClass:"brand",attrs:{to:{name:"home"}}},[e._v(e._s(e.site_title))]),e._l(e.computedLinks,(function(t){return n("router-link",{key:t.title,class:t.classObject,attrs:{to:t.to}},[n("i",{class:t.icon}),e._v(" "+e._s(t.title)+" ")])}))],2):e._e(),n("div",{staticClass:"container"},[e.user?n("nav",{staticClass:"nav"},[n("div",{staticClass:"text"},[e._v(e._s(e.title))]),n("div",{staticClass:"spacer"}),e.user?n("div",{staticClass:"text"},[e._v(e._s(e.user_full_name))]):e._e(),e.user?n("router-link",{staticClass:"link",attrs:{to:{name:"logout"}}},[e._v("登出")]):n("router-link",{staticClass:"link",attrs:{to:{name:"login"}}},[e._v("登录")])],1):e._e(),n("router-view",{staticClass:"main"}),e.user?n("footer",{staticClass:"footer"},[e._v("2019 © 同济大学赵程课题组")]):e._e()],1)])},o=[],i=(n("0aa0"),n("0943"),n("dca8"),n("b488"),n("1e85"),n("f5f0"),n("89f7"),n("1d14"),n("f010")),s=n("08c1");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={name:"app",data:function(){return{links:[{icon:"home",title:"项目概况",name:"home"},{icon:"location",title:"测点信息",name:"point"},{icon:"stat",title:"实时数据",name:"home"},{icon:"table",title:"数据统计",name:"home"},{icon:"database",title:"后台管理",name:"home"},{icon:"phone",title:"关于我们",name:"login"},{icon:"warning",title:"管理员操作",name:"login"}]}},computed:u({},Object(s["b"])(["title","user","user_full_name","site_title"]),{computedLinks:function(){var e=this;return this.links.map((function(t){return{icon:"icon-"+t.icon,title:t.title,to:{name:t.name},classObject:{link:!0,active:e.$route.name===t.name}}}))}})},f=l,m=(n("fca7"),n("b184"),n("4e82")),d=Object(m["a"])(f,a,o,!1,null,"1f4561b2",null),p=d.exports,h=n("e1bc");Object(h["a"])("".concat("/displacement-monitor-frontend/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var v=n("c52c"),g=n("b850");r["a"].config.productionTip=!1,new r["a"]({router:v["a"],store:g["a"],render:function(e){return e(p)}}).$mount("#app")},d054:function(e,t,n){"use strict";n("12cd"),n("63ff");var r=n("c52c"),a=n("b850");t["a"]={commit:function(e,t){a["a"].commit(e,t)},setTitle:function(e){this.commit("setTitle",e)},push:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(r["a"].push({name:e}));case 2:case"end":return t.stop()}}))},get:function(e){var t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return e="http://dm.panhaoyu.top:88/api/"+e,r.next=3,regeneratorRuntime.awrap(fetch(e,{method:"GET",mode:"cors",headers:{Authorization:"bearer "+a["a"].state.token}}));case 3:return t=r.sent,r.next=6,regeneratorRuntime.awrap(t.json());case 6:return n=r.sent,r.abrupt("return",n.data);case 8:case"end":return r.stop()}}))},timeout:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout(t,e)})));case 1:case"end":return t.stop()}}))}}},fca7:function(e,t,n){"use strict";var r=n("0fcb"),a=n.n(r);a.a},fe31:function(e,t,n){}});
//# sourceMappingURL=app.010124ae.js.map