"use strict";(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[39],{64253:function(e,r,n){var a=n(1413),s=n(45987),t=n(72791),i=n(22178),c=n(80184),o=["name","message","label","accepter","error"],l=(0,t.forwardRef)((function(e,r){var n=e.name,t=e.message,l=e.label,u=e.accepter,d=e.error,m=(0,s.Z)(e,o);return(0,c.jsxs)(i.Z.Group,{controlId:"".concat(n),ref:r,className:d?"has-error":"",children:[(0,c.jsxs)(i.Z.ControlLabel,{children:[l," "]}),(0,c.jsx)(i.Z.Control,(0,a.Z)({name:n,accepter:u,errorMessage:d},m)),(0,c.jsx)(i.Z.HelpText,{children:t})]})}));r.Z=l},54514:function(e,r,n){var a=n(1413),s=n(72791),t=n(26032),i=n(80184),c=(0,s.forwardRef)((function(e,r){return(0,i.jsx)(t.Z,(0,a.Z)((0,a.Z)({},e),{},{as:"textarea",ref:r}))}));r.Z=c},83322:function(e,r){r.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=["Production","Staging","Development"];return null===e?r:r[e]}},13582:function(e,r){r.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=["APAC","EMEA","North America"];return null===e?r:r[e]}},3039:function(e,r,n){n.r(r),n.d(r,{default:function(){return V}});var a=n(74165),s=n(1413),t=n(15861),i=n(29439),c=n(72791),o=n(57689),l=n(39716),u=n(13748),d=n(58408),m=n(46820),p=n(22178),h=n(26032),x=n(57618),f=n(4265),v=n(67045),j=n(64253),b=n(54514),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=["Subscriber","Contributor","Author","Editor","Administrator"];return null===e?r:r[e]},Z=n(80184),w=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",table:"users",where:"JSON_SEARCH(roles, 'one', 'Manager', NULL, '$[*]') IS NOT NULL",orderby:"firstname",orderbydirec:"ASC"})).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.log(e),n.push((0,Z.jsx)(r,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),N=w,y=m.Z.Types,k=y.StringType,S=y.ArrayType,q=function(e){var r=(0,c.useContext)(d.V).userData,n={password:k().isRequired("This field is required."),firstname:k().isRequired("This field is required."),lastname:k().isRequired("This field is required."),email:k().isEmail("Please enter a valid email address.").isRequired("This field is required."),roles:k().isRequired("This field is required.")};r&&!r.isapprover&&(n.approvers=S().minLength(1,"Please select at least 1 approver.").isRequired("This field is required."));var a=m.Z.Model(n),s=e.data,t=e.buttonText,o=(0,c.useRef)(),w=(0,c.useState)({}),y=(0,i.Z)(w,2),q=y[0],C=y[1],R=(0,c.useState)([]),T=(0,i.Z)(R,2),L=T[0],A=T[1],O=g().map((function(e){return{label:e,value:e.toLowerCase()}}));return(0,c.useEffect)((function(){N(u.Z,l.Z).then((function(e){var r=e.map((function(e){return{label:"".concat(e.firstname," ").concat(e.lastname," (").concat(e.email,")"),value:e.id}}));A(r)}))}),[r]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(p.Z,{ref:o,onChange:e.setData,onCheck:C,formValue:s,model:a,fluid:!0,children:[Object.keys(r).length>0&&r.isapprover&&(0,Z.jsx)("div",{className:"page-box",children:"You are automatically approved."}),(0,Z.jsxs)("div",{className:"page-box",children:[(0,Z.jsx)("div",{className:"page-box-form-input",children:(0,Z.jsxs)("div",{className:"page-box-flex",children:[(0,Z.jsx)("div",{className:"page-box-form-input page-box-flex-child",children:(0,Z.jsx)(j.Z,{name:"username",label:"Username",accepter:h.Z,error:q.username,readOnly:!0})}),(0,Z.jsx)("div",{className:"page-box-form-input page-box-flex-child",children:(0,Z.jsx)(j.Z,{name:"password",label:"Password",accepter:h.Z,error:q.password})})]})}),(0,Z.jsx)("div",{className:"page-box-form-input",children:(0,Z.jsxs)("div",{className:"page-box-flex",children:[(0,Z.jsx)("div",{className:"page-box-form-input page-box-flex-child",children:(0,Z.jsx)(j.Z,{name:"firstname",label:"First Name",accepter:h.Z,error:q.firstname,onChange:e.updateUsername})}),(0,Z.jsx)("div",{className:"page-box-form-input page-box-flex-child",children:(0,Z.jsx)(j.Z,{name:"lastname",label:"Last Name",accepter:h.Z,error:q.lastname,onChange:e.updateUsername})})]})}),(0,Z.jsx)("div",{className:"page-box-form-input",children:(0,Z.jsx)(j.Z,{name:"email",label:"Email",accepter:h.Z,error:q.email})}),(0,Z.jsx)("div",{className:"page-box-form-input",children:(0,Z.jsx)(j.Z,{name:"roles",label:"Role",data:O,accepter:x.Z,error:q.roles,block:!0})}),Object.keys(r).length>0&&!r.isapprover&&(0,Z.jsx)("div",{className:"page-box-form-input",children:(0,Z.jsx)(j.Z,{name:"approvers",label:"Approvers",data:L,accepter:f.Z,error:q.approvers,block:!0,sticky:!0})}),(0,Z.jsx)("div",{className:"page-box-form-input",children:(0,Z.jsx)(j.Z,{name:"notes",label:"Notes",accepter:b.Z,error:q.notes})})]}),(0,Z.jsx)(p.Z.Group,{children:(0,Z.jsx)(v.Z,{appearance:"primary",onClick:function(){return e.handleSubmit(o)},children:t})})]})})},C=n(62601),R=n(26630),T=n(91033),L=n(86404),A=n(81562),O=n(83322),E=n(13582),U=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r,n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fields:"sites.*, domains.domain AS domain_name",table:"sites LEFT JOIN domains on sites.domain = domains.id"})).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.log(e),n.push((0,Z.jsx)(r,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),_=U,P=m.Z.Types.ArrayType,D=m.Z.Model({sites:P().minLength(1,"Please select at least 1 site.").isRequired("This field is required.")}),I=function(e){var r=e.sitesData,n=(0,c.useRef)(!1),a=(0,c.useRef)(),s=(0,c.useState)({}),t=(0,i.Z)(s,2),o=t[0],d=t[1],m=(0,c.useState)([]),h=(0,i.Z)(m,2),x=h[0],f=h[1];return(0,c.useEffect)((function(){!1===n.current&&(_(u.Z,l.Z).then((function(e){var r={};e.forEach((function(e){r[e.vertical]||(r[e.vertical]={}),r[e.vertical][e.domain_name]||(r[e.vertical][e.domain_name]={}),r[e.vertical][e.domain_name][e.environment]=e.id}));var n=Object.entries(r).map((function(e){var r=(0,i.Z)(e,2),n=r[0],a=r[1];return{vertical:n,domains:Object.entries(a).map((function(e){var r=(0,i.Z)(e,2),n=r[0],a=r[1];return{domain:n,environments:Object.entries(a).map((function(e){var r=(0,i.Z)(e,2);r[0];return r[1]}))}}))}}));f(n)})),n.current=!0)}),[x]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(p.Z,{ref:a,onChange:e.setSitesData,onCheck:d,formValue:r,model:D,fluid:!0,children:[(0,Z.jsx)("div",{className:"page-box",children:x&&(0,Z.jsxs)(j.Z,{name:"sites",accepter:C.Z,error:o.sites,children:[(0,Z.jsx)(Z.Fragment,{}),(0,Z.jsx)(R.Z,{accordion:!0,defaultActiveKey:0,bordered:!0,children:x.map((function(e,r){return(0,Z.jsx)(T.Z,{header:(0,E.Z)(e.vertical),eventKey:r,id:"panel".concat(r),children:e.domains.map((function(e,r){return(0,Z.jsxs)("div",{className:"flexwrap-3col",children:[(0,Z.jsx)("h4",{children:e.domain}),Object.entries(e.environments).map((function(e,r){var n=(0,i.Z)(e,2),a=n[0],s=n[1];return(0,Z.jsx)("div",{children:(0,Z.jsx)(L.Z,{value:s,children:(0,O.Z)(a)})},r)}))]},r)}))},r)}))})]})}),(0,Z.jsx)(p.Z.Group,{children:(0,Z.jsxs)(A.Z,{children:[(0,Z.jsx)(v.Z,{appearance:"primary",onClick:function(){return e.handleSubmit(a)},children:"Continue"}),(0,Z.jsx)(v.Z,{appearance:"default",onClick:e.goBack,children:"Back"})]})})]})})},F=n(4942),B=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(r,n,s){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fetchtype:"single",table:"sites",where:"id=:id",params:"id:".concat(r)})).then((function(e){return e.json()})).then((function(e){return e}),(function(e){console.log(e),s.push((0,Z.jsx)(n,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n,a){return e.apply(this,arguments)}}(),J=B,M=function(e){var r=(0,c.useContext)(d.V).userData,n=e.data,a=e.sitesData,t=(0,c.useRef)(!1),o=(0,c.useState)([]),m=(0,i.Z)(o,2),h=m[0],x=m[1];return(0,c.useEffect)((function(){!1===t.current&&(a.sites.forEach((function(e){try{fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"userexists",id:e,username:n.username,useremail:n.email})).then((function(e){return e.json()})).then((function(r){var a=JSON.parse(r);J(e).then((function(r){x((function(t){var i={siteid:e,label:r.label,requestType:!1===a.username&&!1===a.useremail?"add":!1!==a.username&&!1===a.useremail?"editEmail":!1===a.username&&!1!==a.useremail?"editUsername":!1!==a.same?"editOther":!1!==a.username&&!1!==a.useremail&&!1===a.same?"conflicting":void 0,data:!1!==a.username&&!1===a.useremail?a.username:!1===a.username&&!1!==a.useremail?a.useremail:!1!==a.same?a.same:void 0},c={};return void 0!==i.data&&(c=["username","firstname","lastname","email","roles"].reduce((function(e,r){return n[r]!==i.data[r]&&(e[r]=r),e}),{})),i.checkboxes=c,(0,s.Z)((0,s.Z)({},t),{},(0,F.Z)({},e,i))}))}))}),(function(e){console.log(e),l.Z.push((0,Z.jsx)(u.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}))}catch(r){console.log(r),l.Z.push((0,Z.jsx)(u.Z,{showIcon:!0,type:"error",children:r.message}),{duration:3e3})}})),t.current=!0),console.log(h)}),[n,a,h]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("div",{className:"page-box",children:[(0,Z.jsx)("h2",{children:"Confirmation"}),(0,Z.jsx)("div",{className:"page-box-row",children:(0,Z.jsxs)("div",{className:"page-box-flex",children:[(0,Z.jsxs)("div",{className:"page-box-flex-child",children:[(0,Z.jsx)("label",{children:"Username"}),(0,Z.jsx)("div",{children:n.username})]}),(0,Z.jsxs)("div",{className:"page-box-flex-child",children:[(0,Z.jsx)("label",{children:"Password"}),(0,Z.jsx)("div",{children:n.password})]})]})}),(0,Z.jsx)("div",{className:"page-box-row",children:(0,Z.jsxs)("div",{className:"page-box-flex",children:[(0,Z.jsxs)("div",{className:"page-box-flex-child",children:[(0,Z.jsx)("label",{children:"First Name"}),(0,Z.jsx)("div",{children:n.firstname})]}),(0,Z.jsxs)("div",{className:"page-box-flex-child",children:[(0,Z.jsx)("label",{children:"Last Name"}),(0,Z.jsx)("div",{children:n.lastname})]})]})}),(0,Z.jsxs)("div",{className:"page-box-row",children:[(0,Z.jsx)("label",{children:"Email"}),(0,Z.jsx)("div",{children:n.email})]}),(0,Z.jsxs)("div",{className:"page-box-row",children:[(0,Z.jsx)("label",{children:"Roles"}),(0,Z.jsx)("div",{children:n.roles})]}),(0,Z.jsxs)("div",{className:"page-box-row",children:[(0,Z.jsx)("label",{children:"Approvers"}),r&&!r.isapprover&&(0,Z.jsx)("div",{children:n.approvers.join(", ")}),r&&r.isapprover&&(0,Z.jsx)("div",{children:"You are automatically the approver"})]}),(0,Z.jsxs)("div",{className:"page-box-row",children:[(0,Z.jsx)("label",{children:"Notes"}),(0,Z.jsx)("div",{children:n.notes})]})]}),(0,Z.jsx)("div",{className:"page-box",children:Object.entries(h).map((function(e,r){return"add"===e.requestType?(0,Z.jsx)("div",{className:"page-table-row-outter",children:(0,Z.jsx)("div",{className:"page-table-row-inner",children:(0,Z.jsxs)("div",{className:"page-table-column page-table-label",children:["Add ",n.username," to ",e.label]})})},r):"conflicting"===e.requestType?(0,Z.jsx)("div",{className:"page-table-row-outter",children:(0,Z.jsx)("div",{className:"page-table-row-inner",children:(0,Z.jsxs)("div",{className:"page-table-column page-table-label",children:["There are multiple conflicting accounts on ",e.label]})})},r):(0,Z.jsx)("div",{className:"page-table-row-outter",children:(0,Z.jsx)("div",{className:"page-table-row-inner",children:Object.entries(e.checkboxes).map((function(e,r){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)("input",{type:"checkbox",value:e}),e]},r)}))})},r)}))}),(0,Z.jsxs)(p.Z.Group,{children:[(0,Z.jsx)(v.Z,{appearance:"primary",onClick:function(){return e.handleConfirm()},children:"Confirm"}),(0,Z.jsx)(v.Z,{appearance:"default",onClick:e.goBack,children:"Back"})]})]})},V=function(e){var r=(0,o.UO)(),n=(0,c.useRef)(!1),m=(0,c.useContext)(d.V).userData,p=(0,c.useState)("Request User Account"),h=(0,i.Z)(p,2),x=h[0],f=h[1],v=(0,c.useState)("Select Sites"),j=(0,i.Z)(v,2),b=j[0],g=j[1],w=(0,c.useState)("1"),N=(0,i.Z)(w,2),y=N[0],k=N[1],S=(0,c.useState)({sites:[]}),C=(0,i.Z)(S,2),R=C[0],T=C[1],L=(0,c.useState)({type:"useradd",requester:m.userPrincipalName,approvers:m.isapprover?[m.userPrincipalName]:[],approved:m.isapprover?1:0,notes:"",username:"",password:"",firstname:"",lastname:"",email:"",roles:""}),A=(0,i.Z)(L,2),O=A[0],E=A[1];(0,c.useEffect)((function(){if(!1===n.current){if(0!==Object.keys(r).length&&r.constructor===Object){g("Save");var e=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fetchtype:"single",fields:"requests.*, sites.label AS site_label",table:"requests LEFT JOIN sites on JSON_EXTRACT(requests.request, '$.siteid') = sites.id",where:"id=:id",params:"id:".concat(r.id)})).then((function(e){return e.json()})).then((function(e){f("Editing User Account Request"),E((function(r){return(0,s.Z)((0,s.Z)({},r),{},{requester:e.requester,notes:e.notes,site_label:e.site_label,siteid:e.request.siteid,username:e.request.username,password:e.request.password,firstname:e.request.firstname,lastname:e.request.lastname,email:e.request.email,roles:e.request.roles.split(",")})}))}),(function(e){console.log(e),l.Z.push((0,Z.jsx)(u.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),l.Z.push((0,Z.jsx)(u.Z,{showIcon:!0,type:"error",children:e.t0.message}),{duration:3e3});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}n.current=!0}}),[r,n]);var U=function(e){e.current.check()&&(r.id?k("3"):k("1"===y?"2":"3"))},_=function(){r.id?k("1"):k("3"===y?"2":"1")};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:"page-title",children:(0,Z.jsx)("h1",{children:x})}),"1"===y&&(0,Z.jsxs)(Z.Fragment,{children:[r.id&&(0,Z.jsxs)("div",{children:[(0,Z.jsx)("div",{children:"Site:"}),(0,Z.jsx)("div",{children:O.request.site_label})]}),(0,Z.jsx)(q,{data:O,setData:E,updateUsername:function(){E((function(e){return(0,s.Z)((0,s.Z)({},e),{},{username:e.lastname.length>0?e.firstname.toLowerCase().replace(/[^a-z0-9]/g,".")+"."+e.lastname.toLowerCase().replace(/[^a-z0-9]/g,"."):e.firstname.toLowerCase().replace(/[^a-z0-9]/g,".")})}))},handleSubmit:U,buttonText:b})]}),"2"===y&&(0,Z.jsx)(I,{sitesData:R,setSitesData:T,handleSubmit:U,goBack:_}),"3"===y&&(0,Z.jsx)(M,{data:O,sitesData:R,handleConfirm:function(){r.id},goBack:_})]})}}}]);
//# sourceMappingURL=39.3b36f628.chunk.js.map