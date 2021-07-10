(this.webpackJsonpworkanaChallenge=this.webpackJsonpworkanaChallenge||[]).push([[0],{20:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),c=r(14),s=r.n(c),l=r(3),i=(r(20),r(15)),o=r.n(i),d=r(0),j=function(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsxs)("div",{className:"loader__container",children:[Object(d.jsxs)("div",{className:"loader__animation",children:[Object(d.jsx)("div",{className:"loader__cell"}),Object(d.jsx)("div",{className:"loader__cell"}),Object(d.jsx)("div",{className:"loader__cell"}),Object(d.jsx)("div",{className:"loader__cell"})]}),Object(d.jsx)("p",{className:"loader__text",children:"Loading..."})]})})},u=r(5),b=function(e){var t=e.value,r=e.currentVote,n=e.emitVote;return Object(d.jsx)("div",{className:r===t?"card card--active":"card","data-value":t,onClick:function(){return n(t)},children:Object(d.jsx)("p",{children:t})})},v=function(e){var t=e.numUsers,r=e.issue;return Object(d.jsxs)("div",{className:"issue",children:[Object(d.jsx)("p",{children:"Issue:"}),Object(d.jsx)("input",{className:"input",type:"number",value:r,readOnly:!0}),Object(d.jsxs)("p",{children:[t," Connected"]})]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createElement("path",{d:"M10.933 13.519L8.707 11.293 7.293 12.707 11.067 16.481 16.769 9.641 15.231 8.359z"}),f=n.createElement("path",{d:"M19,3H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V5C21,3.897,20.103,3,19,3z M5,19V5h14 l0.002,14H5z"});function p(e,t){var r=e.title,a=e.titleId,c=h(e,["title","titleId"]);return n.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,m,f)}var x=n.forwardRef(p);r.p;function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var w=n.createElement("path",{d:"M7,5C5.897,5,5,5.897,5,7v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V7c0-1.103-0.897-2-2-2H7z M7,17V7h10l0.002,10H7z"});function N(e,t){var r=e.title,a=e.titleId,c=y(e,["title","titleId"]);return n.createElement("svg",g({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:t,"aria-labelledby":a},c),r?n.createElement("title",{id:a},r):null,w)}var _=n.forwardRef(N),E=(r.p,function(e){var t=e.user;return Object(d.jsxs)("div",{className:t.vote?"user user--voted":"user",children:[Object(d.jsx)("div",{className:"",children:t.vote?Object(d.jsx)(x,{}):Object(d.jsx)(_,{})}),Object(d.jsx)("div",{className:"",children:t.name}),Object(d.jsx)("div",{className:"",children:t.vote?t.vote:"-"})]})});var k=function(e){var t=e.data,r=Object(n.useState)(Object(u.a)({},t)),a=Object(l.a)(r,2),c=a[0],s=a[1],i=function(e){var t=c.members[0];t.vote=t.vote!==e&&e,s(Object(u.a)({},c),t)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{className:"header__title",children:"Planning Poker"}),Object(d.jsx)("h2",{className:"header__branding",children:"Workana"}),Object(d.jsx)("p",{className:"header__subtitle",children:"Hiring challenge"})]}),Object(d.jsx)("div",{className:"cards",children:c.validVotes.map((function(e){return Object(d.jsx)(b,{value:e,currentVote:c.members[0].vote,emitVote:i},e)}))}),Object(d.jsx)(v,{numUsers:c.members.length,issue:c.issue}),Object(d.jsx)("div",{className:"users",children:c.members.map((function(e,t){return Object(d.jsx)(E,{user:e},t)}))})]})},V=function(){var e=Object(n.useState)({isLoading:!0,erros:null,data:{}}),t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(n.useEffect)((function(){o.a.get("https://my-json-server.typicode.com/max131/workana/db").then((function(e){return a({data:e.data,isLoading:!1})})).catch((function(e){return a({error:e,isLoading:!1})}))}),[]),r.isLoading?Object(d.jsx)(j,{}):Object(d.jsx)(k,{data:r.data})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(V,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4bd5ab9e.chunk.js.map