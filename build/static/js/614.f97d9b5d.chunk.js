"use strict";(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[614],{77614:function(e,t,n){n.r(t);var r=n(74165),o=n(15861),a=n(29439),c=n(57689),l=n(72791),s=n(30337),i=n(53540),u=n(39716),d=n(13748),f=n(80184);t.default=function(e){var t=(0,c.UO)(),n=(0,c.s0)(),m=(0,l.useState)(null),p=(0,a.Z)(m,2),h=p[0],v=p[1],b=(0,l.useRef)(!1);(0,l.useEffect)((function(){if(!1===b.current&&0!==Object.keys(t).length&&t.constructor===Object){var e=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",fetchtype:"single",table:"posts",where:"id=:id",params:"id:".concat(t.id)})).then((function(e){return e.json()})).then((function(e){v(e)}),(function(e){console.log(e),u.Z.push((0,f.jsx)(d.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),u.Z.push((0,f.jsx)(d.Z,{showIcon:!0,type:"error",children:e.t0.message}),{duration:3e3});case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();e(),b.current=!0}}),[t]);var y=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_custom",table:"posts",where:"id=:id",params:"id:".concat(t)}));case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),u.Z.push((0,f.jsx)(d.Z,{showIcon:!0,type:"error",children:e.t0.message}),{duration:3e3});case 9:return e.prev=9,n("/post/list"),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,5,9,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"page-title site-page-title",children:[(0,f.jsxs)("div",{className:"site-page-title-left",children:[(0,f.jsx)("h1",{children:h&&h.title}),h&&(0,f.jsxs)("div",{className:"site-page-meta",children:["Published: ",h.datelogged]})]}),h&&(0,f.jsxs)("div",{className:"flex-columns",children:[(0,f.jsx)("div",{className:"green-button",onClick:function(e){return n("/post/edit/".concat(h.id))},children:"Edit"}),(0,f.jsx)("div",{className:"red-button",onClick:function(e){return t=h.id,void(0,s._1)({title:"Confirm to delete",message:"Are you sure to delete this.",buttons:[{label:"Yes",onClick:function(){return y(t)}},{label:"No"}]});var t},children:"Delete"})]})]}),h&&h.content&&(0,f.jsx)("div",{className:"page-box",children:(0,i.ZP)(h.content)})]})}},30337:function(e,t,n){var r,o,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t._1=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById(e.targetId||v);e.targetId&&!t&&console.error("React Confirm Alert:","Can not get element id (#"+e.targetId+")");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id=v,document.body.appendChild(t)),(h=(0,u.createRoot)(t)).render(s.default.createElement(p,e))}(e)};var l=n(72791),s=d(l),i=d(n(52007)),u=n(1250);function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=(o=r=function(e){function t(){var e,n,r;f(this,t);for(var o=arguments.length,a=Array(o),c=0;c<o;c++)a[c]=arguments[c];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,o=t.onClickOutside,a=e.target===r.overlay;n&&a&&(o(),r.close()),e.stopPropagation()},r.close=function(){var e=r.props.afterClose;g(),y(r.props),b(e)},r.keyboard=function(e){var t=r.props,n=t.closeOnEscape,o=t.onKeypressEscape,a=t.onkeyPress,c=t.keyCodeForClose,l=e.keyCode,s=27===l;c.includes(l)&&r.close(),n&&s&&(o(e),r.close()),a&&a()},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboard,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboard,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,o=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:o,onClose:r.close})},m(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,o=t.buttons,c=t.childrenElement,l=t.customUI,i=t.overlayClassName;return s.default.createElement("div",{className:"react-confirm-alert-overlay "+i,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},s.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():s.default.createElement("div",{className:"react-confirm-alert-body"},n&&s.default.createElement("h1",null,n),r,c(),s.default.createElement("div",{className:"react-confirm-alert-button-group"},o.map((function(t,n){return s.default.createElement("button",a({key:n,className:t.className},t,{onClick:function(n){return e.handleClickButton(t)}}),t.label)}))))))}}]),t}(l.Component),r.propTypes={title:i.default.string,message:i.default.string,buttons:i.default.array.isRequired,childrenElement:i.default.func,customUI:i.default.func,closeOnClickOutside:i.default.bool,closeOnEscape:i.default.bool,keyCodeForClose:i.default.arrayOf(i.default.number),willUnmount:i.default.func,afterClose:i.default.func,onClickOutside:i.default.func,onKeypressEscape:i.default.func,onkeyPress:i.default.func,overlayClassName:i.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},o);var h=null,v="react-confirm-alert";function b(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function y(e){var t=document.getElementById(e.targetId||v);t&&h.unmount(t)}function g(){document.body.classList.remove("react-confirm-alert-body-element")}}}]);
//# sourceMappingURL=614.f97d9b5d.chunk.js.map