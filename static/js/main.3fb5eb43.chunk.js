(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(19),a=n.n(s),l=(n(24),n(10)),o=n(4),i=n.n(o),j=n(9),d=n(6),u=(n(26),n(0)),m=function(e){var t=e.employee;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("img",{src:t.picture.medium,alt:""})})},b=function(e){var t=e.employee;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("p",{children:[t.name.first,"\xa0",t.name.last]})})},f=function(e){var t=e.employee;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t.cell})})},x=function(e){var t=e.employee;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("a",{children:Object(u.jsx)("p",{children:t.email})})})},h=function(e){var t=e.employee;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("p",{children:t.dob.date})})},p=function(e){var t=e.employees,n=e.onClick;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"row border-bottom border-top border-2 d-flex justify-content-center",style:{marginTop:"80px"},children:[Object(u.jsx)("div",{className:"col d-flex justify-content-center mt-2",children:Object(u.jsx)("p",{children:"Image"})}),Object(u.jsx)("div",{className:"col d-flex justify-content-center mt-2",children:Object(u.jsx)("a",{onClick:n,children:"Name"})}),Object(u.jsx)("div",{className:"col d-flex justify-content-center mt-2",children:Object(u.jsx)("p",{children:"Image"})}),Object(u.jsx)("div",{className:"col d-flex justify-content-center mt-2",children:Object(u.jsx)("p",{children:"Image"})}),Object(u.jsx)("div",{className:"col d-flex justify-content-center mt-2",children:Object(u.jsx)("p",{children:"Image"})})]}),t.map((function(e){return Object(u.jsxs)("div",{className:"row mt-3 d-flex justify-content-center",children:[Object(u.jsx)("div",{className:"col d-flex justify-content-center",children:Object(u.jsx)(m,{employee:e},e.id.value)}),Object(u.jsx)("div",{className:"col d-flex justify-content-center",children:Object(u.jsx)(b,{employee:e},e.id.value)}),Object(u.jsx)("div",{className:"col d-flex justify-content-center",children:Object(u.jsx)(f,{employee:e},e.id.value)}),Object(u.jsx)("div",{className:"col d-flex justify-content-center",children:Object(u.jsx)(x,{employee:e},e.id.value)}),Object(u.jsx)("div",{className:"col d-flex justify-content-center",children:Object(u.jsx)(h,{employee:e},e.id.value)})]})}))]})},O=function(){return Object(u.jsxs)("div",{className:"border-bottom border-5 border-danger",style:{backgroundColor:"navy",height:200,width:"100%"},children:[Object(u.jsx)("h1",{className:"text-center lh-lg",style:{color:"white",fontSize:50},children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center lh-lg",style:{color:"white",fontSize:22},children:"Click on carrots to filter by heading or use the search box to narrow your results"})]})},y=function(e){return Object(u.jsx)("div",{style:{position:"absolute",left:"50%",top:"240px",transform:"translate(-50%, -50%)"},children:Object(u.jsx)("input",{type:"search",className:"search form-control border-5",style:{width:300},placeholder:e.placeholder,onChange:e.handleChange})})},v=n(8),g=n.n(v),N=function(){return g.a.get("https://randomuser.me/api/?results=50")},w=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(0),a=Object(d.a)(s,2),o=a[0],m=a[1],b=Object(c.useState)(""),f=Object(d.a)(b,2),x=f[0],h=f[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var t,n,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("employees"))){e.next=6;break}n=JSON.parse(t),r(n),e.next=12;break;case 6:return e.next=8,v();case 8:c=e.sent,s=JSON.stringify(c),localStorage.setItem("employees",s),r(c);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n.filter((function(e){e=e.name.first.toLowerCase();var t=x.toLowerCase();return e.includes(t)}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(y,{placeholder:"Search",handleChange:function(e){h(e.target.value)}}),Object(u.jsx)(p,{onClick:function(){if(o%2==0){var e=n.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));r(Object(l.a)(e)),m(o+1)}else{var t=n.sort((function(e,t){return t.name.first.localeCompare(e.name.first)}));r(Object(l.a)(t)),m(o+1)}},employees:g},1)]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(46);a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),C()}},[[47,1,2]]]);
//# sourceMappingURL=main.3fb5eb43.chunk.js.map