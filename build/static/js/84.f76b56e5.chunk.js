(self.webpackChunksite_manager=self.webpackChunksite_manager||[]).push([[84],{47084:function(e,t,n){"use strict";n.r(t);var r=n(74165),i=n(15861),o=n(29439),s=n(72791),a=n(54553),l=n.n(a),c=n(39716),p=n(13748),u=n(80184);t.default=function(e){var t=(0,s.useState)(null),n=(0,o.Z)(t,2),a=n[0],g=n[1],h=(0,s.useRef)(!1);return(0,s.useEffect)((function(){if(!1===h.current){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://devops-backend.wwtd.tech","?")+new URLSearchParams({enviornment:window.location.hostname,action:"get_noncompany_accounts",orderby:"domain",orderbydirec:"ASC"})).then((function(e){return e.json()})).then((function(e){var t=[];e.forEach((function(e){var n=[];e.users&&JSON.parse(e.users).forEach((function(e){e.user_email.includes("catenamedia.com")||n.push(e)})),n.length>0&&t.push({id:e.id,label:void 0!==e.label?e.label:e.url,domain:e.domain_name,url:e.url,adminurl:e.adminurl,users:n})})),g(t)}),(function(e){console.log(e),c.Z.push((0,u.jsx)(p.Z,{showIcon:!0,type:"error",children:e.message}),{duration:3e3})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),h.current=!0}})),(0,u.jsx)(u.Fragment,{children:a&&a.map((function(e,t){var n=e.adminurl.replace(/\/$/,""),r=!1;return 0===t&&(r=!0),(0,u.jsx)(l(),{trigger:e.label,open:r,children:(0,u.jsxs)("div",{className:"page-table",children:[(0,u.jsxs)("div",{className:"page-table-head",children:[(0,u.jsx)("div",{className:"page-table-column page-table-label",children:"Name"}),(0,u.jsx)("div",{className:"page-table-column page-table-label",children:"Username"}),(0,u.jsx)("div",{className:"page-table-column page-table-label",children:"Email"})]}),e.users.map((function(e,t){return(0,u.jsx)("div",{className:"page-table-row-outter",children:(0,u.jsxs)("div",{className:"page-table-row-inner",children:[(0,u.jsx)("div",{className:"page-table-column",children:(0,u.jsx)("a",{href:"".concat(n,"/user-edit.php?user_id=").concat(encodeURIComponent(e.user_id)),target:"_blank",rel:"noreferrer",children:e.display_name})}),(0,u.jsx)("div",{className:"page-table-column",children:e.user_login}),(0,u.jsx)("div",{className:"page-table-column",children:e.user_email})]})},t)}))]})},t)}))})}},54553:function(e,t,n){var r;e.exports=(r=n(72791),function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(2)()},function(e,t){e.exports=r},function(e,t,n){"use strict";var r=n(3);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(0),s=n.n(o),a=function(e){return 0!==e};function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(s,e);var t,n,r,o=g(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),m(d(t=o.call(this,e)),"continueOpenCollapsible",(function(){var e=d(t).innerRef;t.setState({height:e.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:a(e.scrollHeight),shouldOpenOnNextCycle:!1})})),m(d(t),"handleTriggerClick",(function(e){t.props.triggerDisabled||t.state.inTransition||(e.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):!0===t.state.isClosed?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))})),m(d(t),"handleTransitionEnd",(function(e){e.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))})),m(d(t),"setInnerRef",(function(e){return t.innerRef=e})),t.timeout=void 0,t.contentId=e.contentElementId||"collapsible-content-".concat(Date.now()),t.triggerId=e.triggerElementProps.id||"collapsible-trigger-".concat(Date.now()),e.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(e.transitionTime,"ms ").concat(e.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return t=s,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"!==t.height&&0!==t.height||!0!==this.state.shouldSwitchAutoOnNextCycle||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var e=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:e.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:a(e.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:a(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){var e=this.props,t=e.triggerSibling,n=e.classParentString;if(!t)return null;switch(c(t)){case"string":return i.a.createElement("span",{className:"".concat(n,"__trigger-sibling")},t);case"function":return t();case"object":return t;default:return null}}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",r=this.props.triggerDisabled?"is-disabled":"",o=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,s=this.props.contentContainerTagName,a=this.props.triggerTagName,c=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,p=this.props,u=p.classParentString,g=p.contentOuterClassName,h=p.contentInnerClassName,d="".concat(u,"__trigger ").concat(n," ").concat(r," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),f="".concat(u," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),m="".concat(u,"__contentOuter ").concat(g),b="".concat(u,"__contentInner ").concat(h);return i.a.createElement(s,l({className:f.trim()},this.props.containerElementProps),i.a.createElement(a,l({id:this.triggerId,className:d.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex,"aria-expanded":!this.state.isClosed,"aria-disabled":this.props.triggerDisabled,"aria-controls":this.contentId,role:"button"},this.props.triggerElementProps),o),this.renderNonClickableTriggerElement(),i.a.createElement("div",{id:this.contentId,className:m.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition,role:"region","aria-labelledby":this.triggerId},i.a.createElement("div",{className:b.trim()},c)))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.Component);b.propTypes={transitionTime:s.a.number,transitionCloseTime:s.a.number,triggerTagName:s.a.string,easing:s.a.string,open:s.a.bool,containerElementProps:s.a.object,triggerElementProps:s.a.object,contentElementId:s.a.string,classParentString:s.a.string,className:s.a.string,openedClassName:s.a.string,triggerStyle:s.a.object,triggerClassName:s.a.string,triggerOpenedClassName:s.a.string,contentOuterClassName:s.a.string,contentInnerClassName:s.a.string,accordionPosition:s.a.oneOfType([s.a.string,s.a.number]),handleTriggerClick:s.a.func,onOpen:s.a.func,onClose:s.a.func,onOpening:s.a.func,onClosing:s.a.func,onTriggerOpening:s.a.func,onTriggerClosing:s.a.func,trigger:s.a.oneOfType([s.a.string,s.a.element]),triggerWhenOpen:s.a.oneOfType([s.a.string,s.a.element]),triggerDisabled:s.a.bool,lazyRender:s.a.bool,overflowWhenOpen:s.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:s.a.bool,triggerSibling:s.a.oneOfType([s.a.string,s.a.element,s.a.func]),tabIndex:s.a.number,contentContainerTagName:s.a.string,children:s.a.oneOfType([s.a.string,s.a.element])},b.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div",triggerElementProps:{}},t.default=b}]))}}]);
//# sourceMappingURL=84.f76b56e5.chunk.js.map