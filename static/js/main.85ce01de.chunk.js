(this["webpackJsonptheia-test"]=this["webpackJsonptheia-test"]||[]).push([[0],{21:function(e,t,o){e.exports={app:"_1-JCt7NKOy8hY6vlspaYJc",app__header:"_2ZQUIfB1a7JecX8EpQbKbh",app__container:"pey_-gg4E0wvKJApdkCCK"}},40:function(e,t,o){e.exports={dropdown:"_16B5gTnxyB5smQ0CoeJd-5",dropdown__wrapper:"AjZp3vCRjJZmFFYxgmq-J",dropdown__content:"_2_0AggDpRMzUo2B61A59Iy",dropdown__button:"_1k-s8lsXFUrTpu5JaeR8mc",dropdown__button__container:"_3KzLyYVvxyaV9TNZRmcpDy",show:"_3-jfqRl5sJ4ery_LcEeoO8",rotateIcon:"CFYzplD6rjzG0ph8lfnKV"}},42:function(e,t,o){e.exports={textbox:"_27BSwd8A2GgXpG4C5qjWJ2",textbox__img:"_2iPqPhtAxPQbu6qIiPehwk",textbox__joke:"_19YubU6yM5OULEvZaJD3FH"}},43:function(e,t,o){e.exports={}},44:function(e,t,o){"use strict";o.r(t);var n=o(2),c=o.n(n),r=o(15),s=o.n(r),a=o(5),i=(o(21),o(16)),d=o.n(i).a.create({baseURL:"https://api.chucknorris.io/jokes/"}),l=(o(40),o(0)),u=function(e){var t=e.categories,o=e.setChoiceCategory,n=e.title;return window.onclick=function(e){if(!e.target.matches(".dropdown__button")){var t,o=document.getElementsByClassName("dropdown__content");for(t=0;t<o.length;t++){var n=o[t];n.classList.contains("show")&&(n.classList.remove("show"),document.getElementById("icon").classList.toggle("rotateIcon"))}}},Object(l.jsxs)("div",{className:"dropdown",children:[Object(l.jsxs)("div",{className:"dropdown__wrapper",children:[n,Object(l.jsx)("div",{className:"dropdown__button__container",children:Object(l.jsx)("img",{onClick:function(){return document.getElementById("myDropdown").classList.toggle("show"),void document.getElementById("icon").classList.toggle("rotateIcon")},className:"dropdown__button",id:"icon",src:"icons/down-arrow.png",alt:"arrow down"})})]}),Object(l.jsx)("div",{id:"myDropdown",className:"dropdown__content",children:t.map((function(e){return Object(l.jsx)("p",{onClick:function(t){return function(e,t){o(t)}(0,e)},name:e,children:e})}))})]})},p=(o(42),function(e){var t=e.joke,o=e.img;return Object(l.jsxs)("div",{className:"textbox",children:[Object(l.jsx)("div",{className:"textbox__img",children:o}),Object(l.jsx)("p",{className:"textbox__joke",children:t})]})});var _=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),o=t[0],c=t[1],r=Object(n.useState)("animal"),s=Object(a.a)(r,2),i=s[0],_=s[1],j=Object(n.useState)({}),b=Object(a.a)(j,2),h=b[0],g=b[1];return console.log(i,h),Object(n.useEffect)((function(){d.get("/categories").then((function(e){return c(e.data)})).catch((function(e){console.error("ops! ocorreu um erro"+e)}))}),[]),Object(n.useEffect)((function(){d.get("random?category=".concat(i)).then((function(e){return g(e.data)})).catch((function(e){console.error("ops! ocorreu um erro"+e)}))}),[i]),console.log(o),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("div",{className:"app__header",children:"The Chuck Noris jokes"}),Object(l.jsxs)("div",{className:"app__container",children:[Object(l.jsx)(u,{categories:o,setChoiceCategory:_,title:"Select the category"}),Object(l.jsx)(p,{joke:h.value,img:Object(l.jsx)("img",{src:h.icon_url,alt:"Chuck Norris icon"})})]})]})},j=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,45)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;o(e),n(e),c(e),r(e),s(e)}))};o(43);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),j()}},[[44,1,2]]]);
//# sourceMappingURL=main.85ce01de.chunk.js.map