"use strict";(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[103],{40103:function(e,n,a){a.r(n),a.d(n,{default:function(){return z}});var t=a(74165),r=a(15861),l=a(29439),s=a(72791),o=a(13748),i=a(39716),c=a(80184),u=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n,a){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_sites"})).then((function(e){return e.json()})).then((function(e){var n=[];return e.forEach((function(e){e.users&&JSON.parse(e.users).forEach((function(e){e.user_email&&(n.hasOwnProperty(e.user_email)||(n[e.user_email]=e))}))})),n}),(function(e){console.log(e),a.push((0,c.jsx)(n,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),d=u,f=a(70128).Z,m=a(87462),p=a(63366),b=a(52007),h=a.n(b),v=a(36460),g=a.n(v),x=a(24242),y=a.n(x),j=a(26032),w=a(71243),N=a(83271),C=a(29112),Z=a(87566),_=a(34349),O=a(97321),k=a(10261),S=a(5722),P=a(47907),M=a(91718),E=a(11861),I=a(25153),D=a(93464),L=a.n(D);var R=s.forwardRef((function(e,n){var a=e.as,t=void 0===a?"div":a,r=e.disabled,l=e.className,o=e.placement,i=void 0===o?"bottomStart":o,c=e.selectOnEnter,u=void 0===c||c,d=e.classPrefix,f=void 0===d?"auto-complete":d,b=e.defaultValue,h=void 0===b?"":b,v=e.menuAutoWidth,x=void 0===v||v,O=e.data,k=e.value,D=e.open,R=e.style,F=e.size,A=e.menuClassName,B=e.id,K=e.readOnly,U=e.renderMenu,V=e.renderMenuItem,z=e.onSelect,T=e.filterBy,W=e.onKeyDown,J=e.onChange,H=e.onClose,$=e.onOpen,q=e.onFocus,G=e.onBlur,Q=e.onMenuFocus,X=(0,p.Z)(e,["as","disabled","className","placement","selectOnEnter","classPrefix","defaultValue","menuAutoWidth","data","value","open","style","size","menuClassName","id","readOnly","renderMenu","renderMenuItem","onSelect","filterBy","onKeyDown","onChange","onClose","onOpen","onFocus","onBlur","onMenuFocus"]),Y=function(e){return e?e.map((function(e){return"string"===typeof e?{value:e,label:e}:"object"===typeof e?e:void 0})):[]}(O),ee=(0,w.Z)(k,h),ne=ee[0],ae=ee[1],te=(0,s.useState)(!1),re=te[0],le=te[1],se=(null===Y||void 0===Y?void 0:Y.filter(function(e,n){return function(a){if("function"===typeof e)return e(n,a);if(!L()(n))return!1;var t=n.toLocaleLowerCase();return(""+a.label).toLocaleLowerCase().indexOf(t)>=0}}(T,ne)))||[],oe=se.length>0,ie=(0,s.useRef)(null),ce=(0,N.Z)(),ue=(0,S.Zx)(ne,{data:Y,callback:Q,target:function(){return ie.current}}),de=ue.focusItemValue,fe=ue.setFocusItemValue,me=ue.onKeyDown,pe=function(e){ie.current&&((0,S.Az)(e,{enter:u?be:void 0,esc:ge}),me(e),null===W||void 0===W||W(e))},be=function(e){if(de){var n=Y.find((function(e){return(null===e||void 0===e?void 0:e.value)===de}));ae(de),fe(de),he(n,e),ne!==de&&ve(de,e),ge()}},he=(0,s.useCallback)((function(e,n){null===z||void 0===z||z(e.value,e,n)}),[z]),ve=(0,s.useCallback)((function(e,n){null===J||void 0===J||J(e,n)}),[J]),ge=(0,s.useCallback)((function(){ce()&&(le(!1),null===H||void 0===H||H())}),[ce,H]),xe=(0,s.useCallback)((function(){le(!0),null===$||void 0===$||$()}),[$]),ye=(0,s.useCallback)((function(e,n,a){ae(e),fe(e),he(n,a),ne!==e&&ve(e,a),ge()}),[ne,ae,he,ve,ge,fe]),je=(0,s.useCallback)((function(e){null===q||void 0===q||q(e),xe()}),[q,xe]),we=(0,s.useCallback)((function(e){setTimeout(ge,300),null===G||void 0===G||G(e)}),[G,ge]),Ne=(0,C.Z)(f),Ce=Ne.withClassPrefix,Ze=(0,Ne.merge)(l,Ce({disabled:r})),_e=(0,s.useRef)(null),Oe=(0,Z.vR)(y()(X,P.Op)),ke=Oe[0],Se=Oe[1];(0,S.Ls)(n,{triggerRef:_e,overlayRef:ie});return s.createElement(P.ZP,{ref:_e,placement:i,pickerProps:g()(e,P.Op),trigger:["click","focus"],open:D||re&&oe,speaker:function(e,n){var a=e.left,t=e.top,r=e.className,l={left:a,top:t},o=s.createElement(M.Z,{id:B?B+"-listbox":void 0,classPrefix:"auto-complete-menu",dropdownMenuItemClassPrefix:"auto-complete-item",dropdownMenuItemAs:E.Z,focusItemValue:de,onSelect:ye,renderMenuItem:V,data:se,className:A});return s.createElement(I.Z,{ref:(0,_.Z)(ie,n),style:l,className:r,onKeyDown:pe,target:_e,autoWidth:x},U?U(o):o)}},s.createElement(t,(0,m.Z)({className:Ze,style:R},Se),s.createElement(j.Z,(0,m.Z)({},ke,{id:B,disabled:r,value:ne,size:F,readOnly:K,onBlur:we,onFocus:je,onChange:function(e,n){fe(""),ae(e),le(!0),ve(e,n)},onKeyDown:pe}))))}));R.displayName="AutoComplete",R.propTypes=(0,m.Z)({},k.R,{data:h().array,disabled:h().bool,onSelect:h().func,onChange:h().func,classPrefix:h().string,value:h().string,defaultValue:h().string,className:h().string,menuClassName:h().string,menuAutoWidth:h().bool,placement:h().oneOf(O.r4),onFocus:h().func,onMenuFocus:h().func,onBlur:h().func,onKeyDown:h().func,onOpen:h().func,onClose:h().func,readOnly:h().bool,renderMenu:h().func,renderMenuItem:h().func,style:h().object,size:h().oneOf(["lg","md","sm","xs"]),open:h().bool,selectOnEnter:h().bool,filterBy:h().func});var F=R,A=a(76277),B=function(e){return(0,c.jsxs)(f,{children:[(0,c.jsx)(F,{data:e.data,placeholder:"Search Email",onChange:e.handleChange,renderMenuItem:function(e){return(0,c.jsx)("div",{className:"searchAutoComplete",children:e})}}),(0,c.jsx)(f.Button,{onClick:e.handleSubmit,tabIndex:-1,children:(0,c.jsx)(A.Z,{})})]})},K=a(11087),U=function(e){var n=e.data;return(0,c.jsx)(c.Fragment,{children:n&&(0,c.jsxs)("div",{className:"page-table",children:[(0,c.jsxs)("div",{className:"page-table-head",children:[(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Name"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Username"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Email"})]}),n.map((function(e,n){return(0,c.jsx)("div",{className:"page-table-row-outter",children:(0,c.jsxs)("div",{className:"page-table-row-inner",children:[(0,c.jsx)("div",{className:"page-table-column",children:(0,c.jsx)(K.rU,{to:"/site/user/".concat(encodeURIComponent(e[1].user_email)),children:e[1].display_name})}),(0,c.jsx)("div",{className:"page-table-column",children:e[1].user_login}),(0,c.jsx)("div",{className:"page-table-column",children:e[1].user_email})]})},n)}))]})})},V=function(e){var n=e.data,a=e.searchField;return(0,c.jsx)(c.Fragment,{children:n&&(0,c.jsxs)("div",{className:"page-table",children:[(0,c.jsxs)("div",{className:"page-table-head",children:[(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Site"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Domain"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Name"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Username"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Roles"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Frontend"}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:"Backend"})]}),n.map((function(e,n){var t=JSON.parse(e.users).find((function(e){return e.user_email===a}));return(0,c.jsx)("div",{className:"page-table-row-outter",children:(0,c.jsxs)("div",{className:"page-table-row-inner",children:[(0,c.jsx)("div",{className:"page-table-column page-table-label",children:(0,c.jsx)(K.rU,{to:"/site/".concat(e.id),children:e.label})}),(0,c.jsx)("div",{className:"page-table-column page-table-label",children:(0,c.jsx)(K.rU,{to:"/site/list/".concat(e.domain),children:e.domain_name})}),(0,c.jsx)("div",{className:"page-table-column",children:t.display_name}),(0,c.jsx)("div",{className:"page-table-column",children:t.user_login}),(0,c.jsx)("div",{className:"page-table-column",children:t.roles.join(", ")}),(0,c.jsx)("div",{className:"page-table-column",children:(0,c.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:"Visit"})}),(0,c.jsx)("div",{className:"page-table-column",children:(0,c.jsx)("a",{href:e.adminurl,target:"_blank",rel:"noreferrer",children:"Visit"})})]})},n)}))]})})},z=function(e){var n=(0,s.useState)([]),a=(0,l.Z)(n,2),u=a[0],f=a[1],m=(0,s.useState)(),p=(0,l.Z)(m,2),b=p[0],h=p[1],v=(0,s.useState)([]),g=(0,l.Z)(v,2),x=g[0],y=g[1],j=(0,s.useState)(!1),w=(0,l.Z)(j,2),N=w[0],C=w[1],Z=(0,s.useRef)(!1),_=function(e,n){return e[1].display_name.toLowerCase()<n[1].display_name.toLowerCase()?-1:e[1].display_name.toLowerCase()>n[1].display_name.toLowerCase()?1:0},O=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var n,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(o.Z,i.Z);case 2:n=e.sent,f(n),a=Object.entries(n).sort(_).map((function(e){return e[1].user_email})),y(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){!1===Z.current&&(O(),Z.current=!0)}));var k=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),0!==b.length){e.next=5;break}O(),e.next=7;break;case 5:return e.next=7,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fields:"sites.*, domains.domain AS domain_name",table:'sites LEFT JOIN domains on sites.domain = domains.id, JSON_TABLE(sites.users, "$[*]" COLUMNS(user_email VARCHAR(100) PATH "$.user_email")) as user_email',where:"user_email=:user_email",params:"user_email:".concat(b)})).then((function(e){return e.json()})).then((function(e){f(e),C(!0)}),(function(e){console.log(e),i.Z.push((0,c.jsx)(o.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"page-title",children:(0,c.jsx)("h1",{children:"User List"})}),(0,c.jsx)(B,{data:x,handleChange:function(e){h(e)},handleSubmit:k}),!1===N&&(0,c.jsx)(U,{data:Object.entries(u).sort(_)}),!0===N&&(0,c.jsx)(V,{data:u,searchField:b})]})}},83075:function(e,n,a){function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!==typeof e)return{default:e};var n=l();if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var o=r?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(a,s,o):a[s]=e[s]}a.default=e,n&&n.set(e,a);return a}(a(72791));function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},s.apply(this,arguments)}function o(e,n){return r.createElement("svg",s({width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",ref:n},e),r.createElement("path",{d:"M6.5 1a5.5 5.5 0 110 11 5.5 5.5 0 110-11zm0 1a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"}),r.createElement("path",{d:"M9.646 9.646a.5.5 0 01.638-.058l.069.058 4.5 4.5a.5.5 0 01-.638.765l-.069-.058-4.5-4.5a.5.5 0 010-.707z"}))}var i=r.forwardRef(o);n.default=i},76277:function(e,n,a){Object.defineProperty(n,"Z",{enumerable:!0,get:function(){return r.default}});var t,r=(t=a(2857))&&t.__esModule?t:{default:t}},2857:function(e,n,a){var t=a(64836);n.__esModule=!0,n.default=void 0;var r=t(a(34222)),l=t(a(83075)),s=(0,r.default)({as:l.default,ariaLabel:"search",category:"action",displayName:"Search"});n.default=s,e.exports=n.default},11861:function(e,n,a){var t=a(87462),r=a(63366),l=a(72791),s=a(52007),o=a.n(s),i=a(29112),c=l.forwardRef((function(e,n){var a=e.as,s=void 0===a?"div":a,o=e.active,c=e.classPrefix,u=void 0===c?"dropdown-menu-item":c,d=e.children,f=e.className,m=e.disabled,p=e.focus,b=e.value,h=e.onKeyDown,v=e.onSelect,g=e.renderItem,x=(0,r.Z)(e,["as","active","classPrefix","children","className","disabled","focus","value","onKeyDown","onSelect","renderItem"]),y=(0,l.useCallback)((function(e){e.preventDefault(),m||null===v||void 0===v||v(b,e)}),[v,m,b]),j=(0,(0,i.Z)(u).withClassPrefix)({active:o,focus:p,disabled:m});return l.createElement(s,(0,t.Z)({role:"option","aria-selected":o,"aria-disabled":m,"data-key":b},x,{ref:n,className:f,tabIndex:-1,onKeyDown:m?null:h,onClick:y}),l.createElement("span",{className:j},g?g(b):d))}));c.displayName="DropdownMenuItem",c.propTypes={classPrefix:o().string,active:o().bool,disabled:o().bool,value:o().any,onSelect:o().func,onKeyDown:o().func,focus:o().bool,title:o().string,className:o().string,children:o().node,as:o().elementType},n.Z=c}}]);
//# sourceMappingURL=103.940094cd.chunk.js.map