(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),s=n(16),a=n.n(s),o=(n(23),n(3)),l=function(e){var t=e.employees,n=e.updateEmployees,r=Object(i.useState)(""),s=Object(o.a)(r,2),a=s[0],l=s[1];return Object(i.useEffect)((function(){var e=""===a?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(a.toLowerCase())>=0}));n(e)}),[a,t]),Object(c.jsx)("div",{className:"container mb-1",children:Object(c.jsx)("input",{type:"text",value:a,onChange:function(e){return l(e.target.value)},placeholder:"filter by first name",title:"Type in a name"})})},j=n(17),d=n(7),u=n.n(d),b=(n(42),function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Object(i.useState)(t),c=Object(o.a)(n,2),r=c[0],s=c[1],a=Object(i.useMemo)((function(){var t=Object(j.a)(e);return console.log(t),null!==r&&t.sort((function(e,t){return e[r.key]<t[r.key]?"ascending"===r.direction?-1:1:e[r.key]>t[r.key]?"ascending"===r.direction?1:-1:0})),t}),[e,r]),l=function(e){var t="ascending";r&&r.key===e&&"ascending"===r.direction&&(t="descending"),s({key:e,direction:t})};return{items:a,requestSort:l,sortConfig:r}}(e.employees),n=t.items,r=t.requestSort,s=t.sortConfig;return Object(c.jsx)("div",{children:Object(c.jsxs)("table",{className:"table",id:"myTable",children:[Object(c.jsx)("thead",{className:"thead-light",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Profile Pic"}),Object(c.jsx)("th",{children:"Title"}),Object(c.jsx)("th",{children:"First Name"}),Object(c.jsx)("th",{children:"Last Name"}),Object(c.jsxs)("th",{children:[Object(c.jsx)("button",{type:"button",onClick:function(){return r("email")},className:function(e){if(s)return s.key===e?s.direction:void 0}("email")}),"Email Address"]}),Object(c.jsx)("th",{children:"Phone"})]})}),Object(c.jsx)("tbody",{children:n.map((function(e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:"profile"})}),Object(c.jsx)("td",{children:e.name.title}),Object(c.jsx)("td",{children:e.name.first}),Object(c.jsx)("td",{children:e.name.last}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.phone})]},e.login.uuid)}))})]})})}),h=function(){return Object(c.jsx)("div",{className:"container mt-5",children:Object(c.jsx)("h1",{className:"text-center",children:"Acme Employee Directory"})})};var O=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)([]),a=Object(o.a)(s,2),j=a[0],d=a[1];return Object(i.useEffect)((function(){u.a.get("https://randomuser.me/api/?results=50&nat=us").then((function(e){var t=e.data.results;return r(t)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(h,{}),Object(c.jsx)(l,{employees:n,updateEmployees:d}),Object(c.jsx)(b,{employees:j})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};n(43);a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.a2411518.chunk.js.map