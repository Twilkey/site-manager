"use strict";(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[741],{46741:function(e,a,s){s.r(a);var n=s(74165),l=s(15861),r=s(29439),t=s(72791),i=s(57689),c=s(11087),o=s(39716),d=s(13748),m=s(80184);a.default=function(e){var a=(0,i.UO)(),s=(0,t.useState)(""),u=(0,r.Z)(s,2),h=u[0],p=u[1],b=(0,t.useState)([]),g=(0,r.Z)(b,2),f=g[0],j=g[1],v=(0,t.useRef)(!1);return(0,t.useEffect)((function(){var e=decodeURIComponent(a.email),s=function(){var a=(0,l.Z)((0,n.Z)().mark((function a(){return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fields:"sites.*, domains.domain AS domain_name",table:'sites LEFT JOIN domains on sites.domain = domains.id, JSON_TABLE(sites.users, "$[*]" COLUMNS(user_email VARCHAR(100) PATH "$.user_email")) as user_email',where:"user_email=:user_email",params:"user_email:".concat(e)})).then((function(e){return e.json()})).then((function(e){j(e)}),(function(e){console.log(e),o.Z.push((0,m.jsx)(d.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();!1===v.current&&(p(e),s(),v.current=!0)}),[a.email]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"page-title",children:(0,m.jsx)("h1",{children:h})}),f&&(0,m.jsxs)("div",{className:"page-table",children:[(0,m.jsxs)("div",{className:"page-table-head",children:[(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Site"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Name"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Username"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Roles"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Frontend"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Backend"})]}),Object.entries(f).map((function(e,a){var s=e[1],n=JSON.parse(s.users).find((function(e){return e.user_email===h}));return(0,m.jsx)("div",{className:"page-table-row-outter",children:(0,m.jsxs)("div",{className:"page-table-row-inner",children:[(0,m.jsx)("div",{className:"page-table-column page-table-label",children:(0,m.jsx)(c.rU,{to:"/site/".concat(s.id),children:s.label})}),(0,m.jsx)("div",{className:"page-table-column",children:n.display_name}),(0,m.jsx)("div",{className:"page-table-column",children:n.user_login}),(0,m.jsx)("div",{className:"page-table-column",children:n.roles.join(", ")}),(0,m.jsx)("div",{className:"page-table-column",children:(0,m.jsx)("a",{href:s.url,target:"_blank",rel:"noreferrer",children:"Visit"})}),(0,m.jsx)("div",{className:"page-table-column",children:(0,m.jsx)("a",{href:s.adminurl,target:"_blank",rel:"noreferrer",children:"Visit"})})]})},a)}))]})]})}}}]);
//# sourceMappingURL=741.0608b272.chunk.js.map