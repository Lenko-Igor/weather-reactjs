(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c.n(i),j=c(4),r=c.n(j),a=(c(10),c(2)),o=(c(11),c(12),s.a.createContext());var b=function(e){var t=e.place,c=e.index,s=Object(i.useContext)(o).removeContent,j=[];return Object(i.useContext)(o).activePlace===c&&j.push("color"),Object(n.jsx)("li",{children:Object(n.jsx)("button",{className:j.join(" "),onClick:function(){s(c)},children:t.name})})};var d=function(e){var t=e.citys;return Object(n.jsx)("ul",{className:"citys",children:t.map((function(e,t){return Object(n.jsx)(b,{place:e,index:t},e.cityID)}))})};c(13),c(14);var O=function(){return Object(n.jsxs)("div",{className:"lds-spinner",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})};var l=function(e){var t=e.city,c=e.cityID,s=Object(i.useState)(null),j=Object(a.a)(s,2),r=j[0],o=j[1],b=Object(i.useState)(null),d=Object(a.a)(b,2),l=d[0],u=d[1];if(Object(i.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?id="+c+"&units=metric&lang=ru&appid=012244e216d87e61ae79056438d73ff3").then((function(e){return e.json()})).then((function(e){o(t),u(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u0440\u0438\u0447\u0438\u043d\u0430:"+e)}))}),[t,c]),l){var x=l.weather[0],h="http://openweathermap.org/img/w/"+x.icon+".png";return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("h3",{children:["\u0412 \u0433\u043e\u0440\u043e\u0434\u0435 ",r,":"]}),Object(n.jsx)("p",{children:x.description}),Object(n.jsx)("img",{src:h,alt:x.description}),Object(n.jsxs)("p",{children:["\u0422\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430:",Object(n.jsx)("br",{}),Object(n.jsxs)("span",{style:l.main.temp>0?{color:"red"}:{color:"blue"},children:[l.main.temp,"\xb0C"]})]}),Object(n.jsxs)("p",{children:["\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0435\u0442\u0440\u0430:",Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:[l.wind.speed," \u043c/\u0441"]})]})]})}return Object(n.jsx)("div",{className:"content",children:Object(n.jsx)(O,{})})};var u=function(){return Object(n.jsxs)("h1",{children:["\u041f\u043e\u0433\u043e\u0434\u0430 \u0432 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0435 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",Object(n.jsx)("br",{}),Object(n.jsx)("span",{children:"(\u0438\u0437 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 openweathermap)"})]})};var x=function(){var e=[{name:"\u041c\u0438\u043d\u0441\u043a",cityID:"625144"},{name:"\u0413\u043e\u043c\u0435\u043b\u044c",cityID:"627907"},{name:"\u0411\u0440\u0435\u0441\u0442",cityID:"629634"},{name:"\u0413\u0440\u043e\u0434\u043d\u043e",cityID:"627904"},{name:"\u0412\u0438\u0442\u0435\u0431\u0441\u043a",cityID:"620127"},{name:"\u041c\u043e\u0433\u0438\u043b\u0435\u0432",cityID:"625665"}],t=Object(i.useState)(0),c=Object(a.a)(t,2),s=c[0],j=c[1];return Object(n.jsx)(o.Provider,{value:{removeContent:function(e){j(e)},activePlace:s},children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(u,{}),Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(d,{citys:e}),Object(n.jsx)(l,{city:e[s].name,cityID:e[s].cityID},s)]})]})})};r.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.c54543b5.chunk.js.map