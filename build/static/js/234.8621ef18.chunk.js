"use strict";(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[234],{54234:function(e,a,n){n.r(a);var l=n(74165),s=n(93433),t=n(15861),r=n(29439),c=n(72791),i=n(57689),o=n(11087),d=n(39716),u=n(13748),m=n(80184);a.default=function(e){var a=(0,i.UO)(),n=(0,c.useState)(""),p=(0,r.Z)(n,2),h=p[0],b=p[1],g=(0,c.useState)([]),v=(0,r.Z)(g,2),f=v[0],x=v[1],j=(0,c.useRef)(!1);return(0,c.useEffect)((function(){var e=decodeURIComponent(a.name),n=function(){var a=(0,t.Z)((0,l.Z)().mark((function a(){return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",table:'sites, JSON_TABLE(plugins, "$[*]" COLUMNS(name VARCHAR(100) PATH "$.name")) as name',where:"name=:name",params:"name:".concat(e)})).then((function(e){return e.json()})).then((function(e){x((0,s.Z)(e))}),(function(e){console.log(e),d.Z.push((0,m.jsx)(u.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 2:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();!1===j.current&&(b(e),n(),j.current=!0)}),[a.name,h]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"page-title",children:(0,m.jsx)("h1",{children:h})}),f&&(0,m.jsxs)("div",{className:"page-table page-table-sitelist",children:[(0,m.jsxs)("div",{className:"page-table-head",children:[(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Site"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Status"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Version"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Update Available"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Frontend"}),(0,m.jsx)("div",{className:"page-table-column page-table-label",children:"Backend"})]}),f.map((function(e,a){var n=JSON.parse(e.plugins).find((function(e){return e.name===h})),l=n.update;return"-"!==n.new_version&&"Yes"===n.update&&(l+="/"+n.new_version),(0,m.jsx)("div",{className:"page-table-row-outter",children:(0,m.jsxs)("div",{className:"page-table-row-inner",children:[(0,m.jsx)("div",{className:"page-table-column page-table-label",children:(0,m.jsx)(o.rU,{to:"/site/".concat(e.id),children:e.label})}),(0,m.jsx)("div",{className:"page-table-column",children:n.status}),(0,m.jsx)("div",{className:"page-table-column",children:n.version}),(0,m.jsx)("div",{className:"page-table-column",children:l}),(0,m.jsx)("div",{className:"page-table-column",children:(0,m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"Visit"})}),(0,m.jsx)("div",{className:"page-table-column",children:(0,m.jsx)("a",{href:e.adminurl,target:"_blank",rel:"noreferrer",children:"Visit"})})]})},a)}))]})]})}}}]);
//# sourceMappingURL=234.8621ef18.chunk.js.map