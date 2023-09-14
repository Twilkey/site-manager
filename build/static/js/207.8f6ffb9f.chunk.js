"use strict";(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[207],{64253:function(e,r,n){var t=n(1413),a=n(45987),o=n(72791),s=n(22178),c=n(80184),i=["name","message","label","accepter","error"],u=(0,o.forwardRef)((function(e,r){var n=e.name,o=e.message,u=e.label,p=e.accepter,h=e.error,d=(0,a.Z)(e,i);return(0,c.jsxs)(s.Z.Group,{controlId:"".concat(n),ref:r,className:h?"has-error":"",children:[(0,c.jsxs)(s.Z.ControlLabel,{children:[u," "]}),(0,c.jsx)(s.Z.Control,(0,t.Z)({name:n,accepter:p,errorMessage:h},d)),(0,c.jsx)(s.Z.HelpText,{children:o})]})}));r.Z=u},19096:function(e,r,n){var t=n(74165),a=n(15861),o=n(80184),s=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,n,a,s,c){var i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("action",a),i.append("enviornment",window.location.hostname),null!==s&&i.append("table",s),i.append("params",JSON.stringify(c)),e.next=7,fetch("".concat("http://devops-backend.wwtd.tech"),{method:"POST",mode:"cors",body:i}).then((function(e){if(!e.ok)throw r.push((0,o.jsx)(n,{showIcon:!0,type:"error",children:"Network response was not OK"}),{duration:3e3}),new Error("Network response was not OK");return e.json()})).then((function(e){return e})).catch((function(e){r.push((0,o.jsxs)(n,{showIcon:!0,type:"error",children:["There has been a problem with your fetch operation: ",e]}),{duration:3e3})}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(r,n,t,a,o){return e.apply(this,arguments)}}();r.Z=s},35069:function(e,r,n){var t=n(74165),a=n(15861),o=n(80184),s=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,n,a,s,c,i,u){var p;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(p=new FormData).append("action",a),p.append("enviornment",window.location.hostname),null!==s&&p.append("table",s),null!==i&&p.append("where",i),p.append("params",JSON.stringify(c)),e.next=8,fetch("".concat("http://devops-backend.wwtd.tech"),{method:"POST",mode:"cors",body:p}).then((function(e){if(!e.ok)throw r.push((0,o.jsx)(n,{showIcon:!0,type:"error",children:"Network response was not OK"}),{duration:3e3}),new Error("Network response was not OK");return e.json()})).then((function(e){return r.push((0,o.jsxs)(n,{showIcon:!0,type:"success",children:[u," was successfully updated"]}),{duration:3e3}),e})).catch((function(e){r.push((0,o.jsxs)(n,{showIcon:!0,type:"error",children:["There has been a problem with your fetch operation: ",e]}),{duration:3e3}),console.error("There has been a problem with your fetch operation:",e)}));case 8:case"end":return e.stop()}}),e)})));return function(r,n,t,a,o,s,c){return e.apply(this,arguments)}}();r.Z=s},61207:function(e,r,n){n.r(r);var t=n(74165),a=n(15861),o=n(29439),s=n(72791),c=n(57689),i=n(46820),u=n(39716),p=n(13748),h=n(22178),d=n(26032),l=n(67045),f=n(64253),m=n(19096),w=n(35069),Z=n(80184),x=i.Z.Types.StringType,y=i.Z.Model({name:x().isRequired("This field is required.")});r.default=function(e){var r=(0,c.UO)(),n=(0,s.useRef)(),i=(0,s.useRef)(!1),x=(0,s.useState)("Add Registrar"),b=(0,o.Z)(x,2),v=b[0],g=b[1],j=(0,s.useState)({}),k=(0,o.Z)(j,2),T=k[0],N=k[1],O=(0,s.useState)({name:""}),S=(0,o.Z)(O,2),I=S[0],C=S[1];(0,s.useEffect)((function(){if(!1===i.current){if(0!==Object.keys(r).length&&r.constructor===Object){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fetchtype:"single",table:"registrars",where:"id=:id",params:"id:".concat(r.id)})).then((function(e){return e.json()})).then((function(e){g("Editing "+e.domain),C({domain:e.domain,registrar:e.registrar})}),(function(e){console.log(e),u.Z.push((0,Z.jsx)(p.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),u.Z.push((0,Z.jsx)(p.Z,{showIcon:!0,type:"error",children:e.t0.message}),{duration:3e3});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}i.current=!0}}),[r]);var R=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!n.current.check()){e.next=11;break}if(!r.id){e.next=7;break}return e.next=5,(0,w.Z)(u.Z,p.Z,"update_custom","registrars",{id:r.id,name:I.name},"id=:id",v);case 5:e.next=9;break;case 7:return e.next=9,(0,m.Z)(u.Z,p.Z,"insert_custom","registrars",{name:I.name},"/domain/registrar/list");case 9:e.next=13;break;case 11:console.log(T),u.Z.push((0,Z.jsx)(p.Z,{showIcon:!0,type:"error",children:(0,Z.jsx)("pre",{children:JSON.stringify(T)})}),{duration:3e3});case 13:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(h.Z,{ref:n,onChange:C,onCheck:N,formValue:I,model:y,fluid:!0,children:[(0,Z.jsx)("div",{className:"page-title",children:(0,Z.jsx)("h1",{children:v})}),(0,Z.jsx)("div",{className:"page-box",children:(0,Z.jsx)("div",{className:"page-box-form-input",children:(0,Z.jsx)(f.Z,{name:"name",label:"Name",accepter:d.Z,error:T.name})})}),(0,Z.jsx)(h.Z.Group,{children:(0,Z.jsx)(l.Z,{appearance:"primary",onClick:R,children:"Submit"})})]})})}},46820:function(e,r,n){n.d(r,{Z:function(){return a}});var t=n(5916),a={Model:t.G4,Types:{StringType:t.uW,NumberType:t.sw,ArrayType:t.ts,DateType:t.Uv,ObjectType:t.LP,BooleanType:t.wy,MixedType:t.vx}}}}]);
//# sourceMappingURL=207.8f6ffb9f.chunk.js.map