"use strict";(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[154],{64253:function(e,n,r){var a=r(1413),t=r(45987),o=r(72791),s=r(22178),i=r(80184),c=["name","message","label","accepter","error"],l=(0,o.forwardRef)((function(e,n){var r=e.name,o=e.message,l=e.label,u=e.accepter,d=e.error,p=(0,t.Z)(e,c);return(0,i.jsxs)(s.Z.Group,{controlId:"".concat(r),ref:n,className:d?"has-error":"",children:[(0,i.jsxs)(s.Z.ControlLabel,{children:[l," "]}),(0,i.jsx)(s.Z.Control,(0,a.Z)({name:r,accepter:u,errorMessage:d},p)),(0,i.jsx)(s.Z.HelpText,{children:o})]})}));n.Z=l},19096:function(e,n,r){var a=r(74165),t=r(15861),o=r(80184),s=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n,r,t,s,i){var c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("action",t),c.append("enviornment",window.location.hostname),null!==s&&c.append("table",s),c.append("params",JSON.stringify(i)),e.next=7,fetch("".concat("http://devops-backend.wwtd.tech"),{method:"POST",mode:"cors",body:c}).then((function(e){if(!e.ok)throw n.push((0,o.jsx)(r,{showIcon:!0,type:"error",children:"Network response was not OK"}),{duration:3e3}),new Error("Network response was not OK");return e.json()})).then((function(e){return e})).catch((function(e){n.push((0,o.jsxs)(r,{showIcon:!0,type:"error",children:["There has been a problem with your fetch operation: ",e]}),{duration:3e3})}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(n,r,a,t,o){return e.apply(this,arguments)}}();n.Z=s},35069:function(e,n,r){var a=r(74165),t=r(15861),o=r(80184),s=function(){var e=(0,t.Z)((0,a.Z)().mark((function e(n,r,t,s,i,c,l){var u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(u=new FormData).append("action",t),u.append("enviornment",window.location.hostname),null!==s&&u.append("table",s),null!==c&&u.append("where",c),u.append("params",JSON.stringify(i)),e.next=8,fetch("".concat("http://devops-backend.wwtd.tech"),{method:"POST",mode:"cors",body:u}).then((function(e){if(!e.ok)throw n.push((0,o.jsx)(r,{showIcon:!0,type:"error",children:"Network response was not OK"}),{duration:3e3}),new Error("Network response was not OK");return e.json()})).then((function(e){return n.push((0,o.jsxs)(r,{showIcon:!0,type:"success",children:[l," was successfully updated"]}),{duration:3e3}),e})).catch((function(e){n.push((0,o.jsxs)(r,{showIcon:!0,type:"error",children:["There has been a problem with your fetch operation: ",e]}),{duration:3e3}),console.error("There has been a problem with your fetch operation:",e)}));case 8:case"end":return e.stop()}}),e)})));return function(n,r,a,t,o,s,i){return e.apply(this,arguments)}}();n.Z=s},7154:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var a=r(1413),t=r(74165),o=r(15861),s=r(29439),i=r(72791),c=r(57689),l=r(46820),u=r(39716),d=r(13748),p=r(22178),f=r(26032),h=r(57618),m=r(67045),v=r(19096),b=r(35069),Z=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",table:"registrars",orderby:"name",orderbydirec:"ASC"}));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=Z,x=r(93433),y=function(e){return window.btoa(String.fromCharCode.apply(String,(0,x.Z)(window.crypto.getRandomValues(new Uint8Array(2*e))))).replace(/[+/]/g,"").substring(0,e)},g=r(64253),k=r(80184),C=l.Z.Types,j=C.StringType,S=C.NumberType,I=l.Z.Model({domain:j().isRequired("This field is required."),registrar:S().isRequired("This field is required."),apisecret:j().isRequired("This field is required.")}),N=function(e){var n=(0,c.UO)(),r=(0,c.s0)(),l=(0,i.useRef)(),Z=(0,i.useRef)(!1),x=(0,i.useState)("Add Domain"),C=(0,s.Z)(x,2),j=C[0],S=C[1],N=(0,i.useState)({}),R=(0,s.Z)(N,2),P=R[0],E=R[1],K=(0,i.useState)([]),M=(0,s.Z)(K,2),T=M[0],D=M[1],O=(0,i.useState)({domain:"",registrar:"",apisecret:""}),V=(0,s.Z)(O,2),G=V[0],A=V[1];(0,i.useEffect)((function(){if(!1===Z.current){if(w().then((function(e){var n=e.map((function(e){return{label:e.name,value:e.id}}));D(n)})),0!==Object.keys(n).length&&n.constructor===Object){var e=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fetchtype:"single",table:"domains",where:"id=:id",params:"id:".concat(n.id)})).then((function(e){return e.json()})).then((function(e){S("Editing "+e.domain),A({domain:e.domain,registrar:e.registrar,apisecret:e.apisecret})}),(function(e){console.log(e),u.Z.push((0,k.jsx)(d.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),u.Z.push((0,k.jsx)(d.Z,{showIcon:!0,type:"error",children:e.t0.message}),{duration:3e3});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e()}Z.current=!0}}),[n,T]);var B=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!l.current.check()){e.next=11;break}if(!n.id){e.next=7;break}return e.next=5,(0,b.Z)(u.Z,d.Z,"update_custom","domains",{id:n.id,domain:G.domain,registrar:G.registrar,apisecret:G.apisecret},"id=:id",j);case 5:e.next=9;break;case 7:return e.next=9,(0,v.Z)(u.Z,d.Z,"insert_custom","domains",{domain:G.domain,registrar:G.registrar,apisecret:y(64)},r,"/domain/list");case 9:e.next=13;break;case 11:console.log(P),u.Z.push((0,k.jsx)(d.Z,{showIcon:!0,type:"error",children:(0,k.jsx)("pre",{children:JSON.stringify(P)})}),{duration:3e3});case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(p.Z,{ref:l,onChange:A,onCheck:E,formValue:G,model:I,fluid:!0,children:[(0,k.jsx)("div",{className:"page-title",children:(0,k.jsx)("h1",{children:j})}),(0,k.jsxs)("div",{className:"page-box",children:[(0,k.jsx)("div",{className:"page-box-form-input",children:(0,k.jsx)(g.Z,{name:"domain",label:"Domain",accepter:f.Z,error:P.domain})}),(0,k.jsx)("div",{className:"page-box-form-input",children:(0,k.jsx)(g.Z,{name:"registrar",label:"Registrar",data:T,accepter:h.Z,error:P.registrar,block:!0})})]}),(0,k.jsxs)("div",{className:"page-box",children:[(0,k.jsx)("div",{className:"page-box-form-input",children:(0,k.jsx)(g.Z,{name:"apisecret",label:"API Secret",accepter:f.Z,error:P.apisecret,readOnly:!0})}),(0,k.jsx)(p.Z.Group,{children:(0,k.jsx)(m.Z,{color:"red",appearance:"ghost",onClick:function(e){A((0,a.Z)((0,a.Z)({},G),{},{apisecret:y(64)}))},children:"Generate New API Secret"})})]}),(0,k.jsx)(p.Z.Group,{children:(0,k.jsx)(m.Z,{appearance:"primary",onClick:B,children:"Submit"})})]})})}},11861:function(e,n,r){var a=r(87462),t=r(63366),o=r(72791),s=r(52007),i=r.n(s),c=r(29112),l=o.forwardRef((function(e,n){var r=e.as,s=void 0===r?"div":r,i=e.active,l=e.classPrefix,u=void 0===l?"dropdown-menu-item":l,d=e.children,p=e.className,f=e.disabled,h=e.focus,m=e.value,v=e.onKeyDown,b=e.onSelect,Z=e.renderItem,w=(0,t.Z)(e,["as","active","classPrefix","children","className","disabled","focus","value","onKeyDown","onSelect","renderItem"]),x=(0,o.useCallback)((function(e){e.preventDefault(),f||null===b||void 0===b||b(m,e)}),[b,f,m]),y=(0,(0,c.Z)(u).withClassPrefix)({active:i,focus:h,disabled:f});return o.createElement(s,(0,a.Z)({role:"option","aria-selected":i,"aria-disabled":f,"data-key":m},w,{ref:n,className:p,tabIndex:-1,onKeyDown:f?null:v,onClick:x}),o.createElement("span",{className:y},Z?Z(m):d))}));l.displayName="DropdownMenuItem",l.propTypes={classPrefix:i().string,active:i().bool,disabled:i().bool,value:i().any,onSelect:i().func,onKeyDown:i().func,focus:i().bool,title:i().string,className:i().string,children:i().node,as:i().elementType},n.Z=l},57618:function(e,n,r){r.d(n,{Z:function(){return V}});var a,t=r(81880),o=r(87462),s=r(63366),i=r(72791),c=r(52007),l=r.n(c),u=r(36460),d=r.n(u),p=r(42530),f=r.n(p),h=r(42854),m=r.n(h),v=r(74786),b=r.n(v),Z=r(24242),w=r.n(Z),x=r(33835),y=r(71243),g=r(77023),k=r(29112),C=r(95941),j=r(34349),S=r(2072),I=r(5722),N=r(91718),R=r(11861),P=r(25153),E=r(16883),K=r(47907),M=r(45193),T=r(87423),D=[],O=i.forwardRef((function(e,n){var r=e.as,c=void 0===r?"div":r,l=e.appearance,u=void 0===l?"default":l,p=e.data,h=void 0===p?D:p,v=e.valueKey,Z=void 0===v?"value":v,T=e.labelKey,O=void 0===T?"label":T,V=e.value,G=e.classPrefix,A=void 0===G?"picker":G,B=e.placeholder,F=e.defaultValue,q=e.disabled,_=e.cleanable,H=void 0===_||_,L=e.placement,z=void 0===L?"bottomStart":L,U=e.menuClassName,W=e.menuAutoWidth,J=void 0===W||W,Q=e.menuMaxHeight,X=void 0===Q?320:Q,Y=e.menuStyle,$=e.groupBy,ee=e.locale,ne=e.toggleAs,re=e.style,ae=e.searchable,te=void 0===ae||ae,oe=e.disabledItemValues,se=void 0===oe?D:oe,ie=e.virtualized,ce=e.listProps,le=e.id,ue=e.onGroupTitleClick,de=e.searchBy,pe=e.onEntered,fe=e.onExited,he=e.onClean,me=e.onChange,ve=e.onSelect,be=e.onSearch,Ze=e.onClose,we=e.onOpen,xe=e.sort,ye=e.renderValue,ge=e.renderMenu,ke=e.renderMenuGroup,Ce=e.renderMenuItem,je=e.renderExtraFooter,Se=(0,s.Z)(e,["as","appearance","data","valueKey","labelKey","value","classPrefix","placeholder","defaultValue","disabled","cleanable","placement","menuClassName","menuAutoWidth","menuMaxHeight","menuStyle","groupBy","locale","toggleAs","style","searchable","disabledItemValues","virtualized","listProps","id","onGroupTitleClick","searchBy","onEntered","onExited","onClean","onChange","onSelect","onSearch","onClose","onOpen","sort","renderValue","renderMenu","renderMenuGroup","renderMenuItem","renderExtraFooter"]),Ie=(0,i.useRef)(null),Ne=(0,i.useRef)(null),Re=(0,i.useRef)(null),Pe=(0,i.useRef)(null),Ee=(0,i.useRef)(null),Ke=(0,x.Z)("Picker",ee).locale,Me=(0,y.Z)(V,F),Te=Me[0],De=Me[1],Oe=(0,I.Zx)(Te,{data:h,valueKey:Z,target:function(){return Re.current}}),Ve=Oe.focusItemValue,Ge=Oe.setFocusItemValue,Ae=Oe.onKeyDown,Be=(0,I.Rx)({labelKey:O,data:h,searchBy:de,callback:function(e,n,r){var a;Ge(null===n||void 0===n||null===(a=n[0])||void 0===a?void 0:a[Z]),null===be||void 0===be||be(e,r)}}),Fe=Be.searchKeyword,qe=Be.filteredData,_e=Be.updateFilteredData,He=Be.setSearchKeyword,Le=Be.handleSearch;(0,i.useEffect)((function(){_e(h)}),[h,_e]);var ze=(0,i.useState)(!1),Ue=ze[0],We=ze[1],Je=(0,i.useCallback)((function(){var e,n;null===(e=Ie.current)||void 0===e||null===(n=e.close)||void 0===n||n.call(e)}),[]),Qe=(0,i.useCallback)((function(e,n,r){var a;null===ve||void 0===ve||ve(e,n,r),null===(a=Ne.current)||void 0===a||a.focus()}),[ve]),Xe=(0,i.useCallback)((function(e,n){null===me||void 0===me||me(e,n)}),[me]),Ye=(0,i.useCallback)((function(e){if(Ve){var n=h.find((function(e){return(0,g.Z)(e[Z],Ve)}));De(Ve),Qe(Ve,n,e),Xe(Ve,e),Je()}}),[h,Ve,Xe,Je,Qe,De,Z]),$e=(0,i.useCallback)((function(e,n,r){De(e),Ge(e),Qe(e,n,r),Xe(e,r),Je()}),[De,Ge,Qe,Xe,Je]),en=(0,i.useCallback)((function(e){!q&&H&&(De(null),Ge(Te),Xe(null,e))}),[Te,q,H,De,Xe,Ge]),nn=(0,I.sZ)((0,o.Z)({toggle:!Ve||!Ue,triggerRef:Ie,targetRef:Ne,overlayRef:Re,searchInputRef:Pe,active:Ue,onExit:en,onMenuKeyDown:Ae,onMenuPressEnter:Ye,onClose:function(){Ge(null)}},Se)),rn=(0,i.useCallback)((function(){He(""),We(!1),null===be||void 0===be||be(""),null===Ze||void 0===Ze||Ze()}),[Ze,He,be]),an=(0,i.useCallback)((function(){We(!0),Ge(Te),null===we||void 0===we||we()}),[we,Ge,Te]);(0,I.Ls)(n,{triggerRef:Ie,overlayRef:Re,targetRef:Ne,listRef:Ee});var tn=h.find((function(e){return(0,g.Z)(e[Z],Te)})),on=!!tn||!m()(Te)&&b()(ye),sn=(0,k.Z)(A),cn=sn.prefix,ln=sn.merge,un=B;null!==tn&&void 0!==tn&&tn[O]&&(un=tn[O]),!m()(Te)&&b()(ye)&&(un=ye(Te,tn,un),m()(un)&&(on=!1));var dn=(0,I.wI)((0,o.Z)({},e,{classPrefix:A,appearance:u,hasValue:on,name:"select",cleanable:H})),pn=dn[0],fn=dn[1];return i.createElement(K.ZP,{pickerProps:d()(e,K.Op),ref:Ie,placement:z,onEntered:(0,S.Z)(an,pe),onExited:(0,S.Z)(rn,fe),speaker:function(e,n){var r=e.left,s=e.top,c=e.className,l=ln(c,U,cn("select-menu")),u=(0,o.Z)({},Y,{left:r,top:s}),d=qe;$?d=(0,C.ZP)(d,$,xe):"function"===typeof xe&&(d=d.sort(xe(!1)));var p=d.length?i.createElement(N.Z,{id:le?le+"-listbox":void 0,listProps:ce,listRef:Ee,disabledItemValues:se,valueKey:Z,labelKey:O,renderMenuGroup:ke,renderMenuItem:Ce,maxHeight:X,classPrefix:"picker-select-menu",dropdownMenuItemClassPrefix:"picker-select-menu-item",dropdownMenuItemAs:R.Z,activeItemValues:[Te],focusItemValue:Ve,data:d,group:!f()($),onSelect:$e,onGroupTitleClick:ue,virtualized:ie}):i.createElement("div",{className:cn(a||(a=(0,t.Z)(["none"])))},null===Ke||void 0===Ke?void 0:Ke.noResultsText);return i.createElement(P.Z,{ref:(0,j.Z)(Re,n),autoWidth:J,className:l,style:u,onKeyDown:nn,target:Ie},te&&i.createElement(E.Z,{placeholder:null===Ke||void 0===Ke?void 0:Ke.searchPlaceholder,onChange:Le,value:Fe,inputRef:Pe}),ge?ge(p):p,null===je||void 0===je?void 0:je())}},i.createElement(c,{className:pn,style:re},i.createElement(M.Z,(0,o.Z)({},w()(Se,[].concat(K.Lj,fn)),{id:le,ref:Ne,appearance:u,onClean:(0,S.Z)(en,he),onKeyDown:nn,as:ne,disabled:q,cleanable:H&&!q,hasValue:on,inputValue:null!==Te&&void 0!==Te?Te:"",active:Ue,placement:z}),un||(null===Ke||void 0===Ke?void 0:Ke.placeholder))))}));O.displayName="SelectPicker",O.propTypes=(0,o.Z)({},T.j,{locale:l().any,appearance:l().oneOf(["default","subtle"]),menuAutoWidth:l().bool,menuMaxHeight:l().number,renderMenu:l().func,renderMenuItem:l().func,renderMenuGroup:l().func,onSelect:l().func,onGroupTitleClick:l().func,onSearch:l().func,groupBy:l().any,sort:l().func,searchable:l().bool,virtualized:l().bool,searchBy:l().func});var V=O}}]);
//# sourceMappingURL=154.2440b399.chunk.js.map