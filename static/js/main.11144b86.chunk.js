(this.webpackJsonpcorona19=this.webpackJsonpcorona19||[]).push([[0],{108:function(e,t,c){},216:function(e,t,c){},217:function(e,t,c){},218:function(e,t,c){},223:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(79),r=c.n(s),i=(c(89),c(84)),o=c(2),j=c(5),d=c(27),l=c.n(d),b=(c(108),c(1));var h=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=(t[0],t[1]),a=Object(n.useState)(0),s=Object(j.a)(a,2),r=s[0],i=s[1],o=Object(n.useState)(0),d=Object(j.a)(o,2),h=d[0],O=d[1],u=Object(n.useState)(0),x=Object(j.a)(u,2),f=x[0],p=x[1],m=Object(n.useState)(0),v=Object(j.a)(m,2),g=v[0],N=v[1],_=Object(n.useState)(0),C=Object(j.a)(_,2),D=C[0],S=C[1];return Object(n.useEffect)((function(){l.a.get("https://api.covid19api.com/summary").then((function(e){return c(e.data.Countries),e.data.Global})).catch((function(e){return console.log(e)})).then((function(e){i(e.Date.split("T")[0]),O(e.NewConfirmed),p(e.NewDeaths),N(e.TotalConfirmed),S(e.TotalDeaths)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"corona_state",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("span",{children:"Date:"})," ",r]}),Object(b.jsxs)("div",{className:"co_state_desc",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("span",{children:"NewConfirmed:"})," ",h]}),Object(b.jsxs)("h2",{children:[Object(b.jsx)("span",{children:"NewDeaths:"})," ",f]})]}),Object(b.jsxs)("div",{className:"co_state_desc",children:[Object(b.jsxs)("h2",{children:[Object(b.jsx)("span",{children:"TotalConfirmed:"})," ",g]}),Object(b.jsxs)("h2",{children:[Object(b.jsx)("span",{children:"TotalDeaths:"})," ",D]})]})]})})},O=c(43),u=c.n(O),x=c(80),f=c(47),p=(c(216),function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),r=Object(j.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)([]),h=Object(j.a)(d,2),O=h[0],p=h[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(x.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://api.covid19api.com/total/dayone/country/kr");case 2:c=e.sent,t(c.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e){var t=e.reduce((function(e,t){var c=new Date(t.Date),n=c.getFullYear(),a=c.getMonth(),s=c.getDate(),r=t.Active,i=t.Confirmed,o=t.Deaths,j=t.Recovered,d=e.find((function(e){return e.year===n&&e.month===a}));return d||e.push({year:n,month:a,date:s,active:r,confirmed:i,deaths:o}),d&&d.date<s&&(d.year=n,d.month=a,d.date=s,d.active=r,d.confirmed=i,d.deaths=o,d.recovered=j),e}),[]),c=t.map((function(e){return"".concat(e.month+1,"\uc6d4")}));a({labels:c,datasets:[{label:"\uad6d\ub0b4 \ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:!0,data:t.map((function(e){return e.confirmed}))}]}),o({labels:c,datasets:[{label:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",borderColor:"#75b67a",fill:!1,data:t.map((function(e){return e.active}))}]});var n=t[t.length-1];console.log(n),p([n.confirmed,n.recovered,n.deaths])};e()}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"\uad6d\ub0b4 \ucf54\ub85c\ub098 \ud604\ud669"}),Object(b.jsxs)("div",{className:"graph_wrap",children:[Object(b.jsxs)("div",{className:"korea_corona",children:[Object(b.jsxs)("div",{className:"korea_box",children:[Object(b.jsx)("p",{children:"\ub204\uc801\ud655\uc9c4\uc790"}),O[0]]}),Object(b.jsxs)("div",{className:"korea_box",children:[Object(b.jsx)("p",{children:"\uaca9\ub9ac\ud574\uc81c"}),O[1]]}),Object(b.jsxs)("div",{className:"korea_box",children:[Object(b.jsx)("p",{children:"\uc0ac\ub9dd\uc790"}),O[2]]})]}),Object(b.jsx)("div",{className:"graph_box",children:Object(b.jsx)(f.a,{data:c,options:{legend:{display:!0,position:"bottom"}}})}),Object(b.jsx)("div",{className:"graph_box",children:Object(b.jsx)(f.b,{data:i,options:{legend:{display:!0,position:"bottom"}}})})]})]})}),m=(c(217),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("div",{className:"header_inner",children:[Object(b.jsx)("h1",{children:"COVID-19"}),Object(b.jsxs)("select",{className:"opt_box",children:[Object(b.jsx)("option",{children:"\uad6d\ub0b4"}),Object(b.jsx)("option",{children:"\uc678\uad6d"})]})]})}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("h1",{children:"\ucf54\ub85c\ub098 \ud604\ud669"}),Object(b.jsx)(h,{}),Object(b.jsx)(p,{})]})]})}),v=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Overseas"})})},g=(c(218),function(){return Object(b.jsxs)(i.a,{children:[Object(b.jsx)(o.a,{path:"/",exact:!0,component:m}),Object(b.jsx)(o.a,{path:"/overseas",component:v})]})}),N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,224)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),N()},89:function(e,t,c){}},[[223,1,2]]]);
//# sourceMappingURL=main.11144b86.chunk.js.map