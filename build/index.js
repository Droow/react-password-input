module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){"use strict";function n(e){return function(){return e}}var u=function(){};u.thatReturns=n,u.thatReturnsFalse=n(!1),u.thatReturnsTrue=n(!0),u.thatReturnsNull=n(null),u.thatReturnsThis=function(){return this},u.thatReturnsArgument=function(e){return e},e.exports=u},function(e,t,r){"use strict";var n=function(e){};e.exports=function(e,t,r,u,o,i,a,l){if(n(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,u,o,i,a,l],f=0;(s=new Error(t.replace(/%s/g,function(){return c[f++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=r(0),u=r(1),o=r(2);e.exports=function(){function e(e,t,r,n,i,a){a!==o&&u(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){e.exports=r(3)()},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))u.call(r,s)&&(a[s]=r[s]);if(n){i=n(r);for(var c=0;c<i.length;c++)o.call(r,i[c])&&(a[i[c]]=r[i[c]])}}return a}},function(e,t,r){"use strict";
/** @license React v16.4.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6),u=r(1),o=r(5),i=r(0),a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.element"):60103,s=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,f=a?Symbol.for("react.strict_mode"):60108,p=a?Symbol.for("react.profiler"):60114,d=a?Symbol.for("react.provider"):60109,h=a?Symbol.for("react.context"):60110,y=a?Symbol.for("react.async_mode"):60111,v=a?Symbol.for("react.forward_ref"):60112;a&&Symbol.for("react.timeout");var g="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);u(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function O(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||b}function k(){}function P(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||b}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=O.prototype;var _=P.prototype=new k;_.constructor=P,n(_,O.prototype),_.isPureReactComponent=!0;var R={current:null},S=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var n=void 0,u={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,n)&&!w.hasOwnProperty(n)&&(u[n]=t[n]);var a=arguments.length-2;if(1===a)u.children=r;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];u.children=s}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===u[n]&&(u[n]=a[n]);return{$$typeof:l,type:e,key:o,ref:i,props:u,_owner:R.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var C=/\/+/g,M=[];function E(e,t,r,n){if(M.length){var u=M.pop();return u.result=e,u.keyPrefix=t,u.func=r,u.context=n,u.count=0,u}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function V(e,t,r,n){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var o=!1;if(null===e)o=!0;else switch(u){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case l:case s:o=!0}}if(o)return r(n,e,""===t?"."+$(e,0):t),1;if(o=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var a=t+$(u=e[i],i);o+=V(u,a,r,n)}else if(null===e||void 0===e?a=null:a="function"==typeof(a=g&&e[g]||e["@@iterator"])?a:null,"function"==typeof a)for(e=a.call(e),i=0;!(u=e.next()).done;)o+=V(u=u.value,a=t+$(u,i++),r,n);else"object"===u&&m("31","[object Object]"===(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return o}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function q(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,u=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,i.thatReturnsArgument):null!=e&&(x(e)&&(t=u+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),n.push(e))}function I(e,t,r,n,u){var o="";null!=r&&(o=(""+r).replace(C,"$&/")+"/"),t=E(t,o,n,u),null==e||V(e,"",A,t),T(t)}var L={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=E(null,null,t,r),null==e||V(e,"",q,t),T(t)},count:function(e){return null==e?0:V(e,"",i.thatReturnsNull,null)},toArray:function(e){var t=[];return I(e,t,null,i.thatReturnsArgument),t},only:function(e){return x(e)||m("143"),e}},createRef:function(){return{current:null}},Component:O,PureComponent:P,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:d,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:v,render:e}},Fragment:c,StrictMode:f,unstable_AsyncMode:y,unstable_Profiler:p,createElement:j,cloneElement:function(e,t,r){(null===e||void 0===e)&&m("267",e);var u=void 0,o=n({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(a=t.ref,s=R.current),void 0!==t.key&&(i=""+t.key);var c=void 0;for(u in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)S.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}if(1===(u=arguments.length-2))o.children=r;else if(1<u){c=Array(u);for(var f=0;f<u;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:l,type:e.type,key:i,ref:a,props:o,_owner:s}},createFactory:function(e){var t=j.bind(null,e);return t.type=e,t},isValidElement:x,version:"16.4.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:R,assign:n}},U={default:L},N=U&&L||U;e.exports=N.default?N.default:N},function(e,t,r){"use strict";e.exports=r(7)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){u=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(u)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=s(r(8)),l=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return p.call(r),r.state={value:e.defaultValue,touched:!1,valid:!1,progress:{current:0},errors:[],isVisible:!1},r.errorMessages=t.getDefaultMessages(e.defaultMessages),r.rules=r.getRules(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),i(t,null,[{key:"appendRule",value:function(e,t){var r=e&&e.filter(function(e){return e.key===t.key});r&&r.length>0?console.error('react-password-indicator: Rule conflict with key "'+t.key+'". The new rule is ignored.'):e.push(t)}}]),i(t,[{key:"componentWillReceiveProps",value:function(e){var t=!1;if(e.rules.length>0||this.props.rules.length>0){var r=this.props.rules.map(function(e){return e.key}),n=e.rules.map(function(e){return e.key});if(n.length===r.length){var u=r.filter(function(e){return!n.includes(e)}),o=n.filter(function(e){return!r.includes(e)});u.length>0||o.length>0?t=!0:this.rules.filter(function(e){return void 0!==e.value}).forEach(function(r){var n=e.rules.find(function(e){return e.key===r.key});n&&n.value!==r.value&&(t=!0)})}else t=!0}this.props.mustMatch!==e.mustMatch&&(t=!0),t&&(this.rules=this.getRules(e),this.validate(this.getState().value)),this.isControlledProp("value")&&this.props.value!==e.value&&this.validate(e.value,!0)}},{key:"setupRule",value:function(e){var r=e.key,n=e.value,u=void 0===n?void 0:n,i=e.message,a=void 0===i?void 0:i,l=c(e,["key","value","message"]),s=t.getMessageStringValue(a,u,t.getMessageStringValue(this.errorMessages[r],u,"Missing message for rule "+r));return o({},l,{key:r,value:u,message:s})}},{key:"getRules",value:function(e){var r=this,n=e.minLen,u=e.maxLen,o=e.digits,i=e.uppercaseChars,a=e.specialChars,l=e.mustMatch,s=e.required,c=[];return e.rules.forEach(function(e){return c.push(r.setupRule(e))}),!1!==s&&t.appendRule(c,this.setupRule({rule:function(e){return!!e},key:"required"})),0!==n&&t.appendRule(c,this.setupRule({rule:function(e,t){return e.length>=t},key:"minLen",value:n})),0!==u&&t.appendRule(c,this.setupRule({rule:function(e,t){return e.length<=t},key:"maxLen",value:u,inverted:!0})),0!==i&&t.appendRule(c,this.setupRule({rule:function(e,t){var r=e.match(/[A-Z]/g);return r&&r.length>=t},key:"uppercaseChars",value:i})),0!==a&&t.appendRule(c,this.setupRule({rule:function(e,t){var r=e.match(/[\?!@#\$%\^\&*\)\(\+=\.\_\-\}\{,\"\'\[\]]/g);return r&&r.length>=t},key:"specialChars",value:a})),0!==o&&t.appendRule(c,this.setupRule({rule:function(e,t){var r=e.match(/[0-9]/g);return r&&r.length>=t},key:"digits",value:o})),void 0!==l&&t.appendRule(c,this.setupRule({rule:function(e,t){return e===t},key:"mustMatch",value:l})),c}},{key:"getState",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state;return Object.keys(t).reduce(function(r,n){return r[n]=e.isControlledProp(n)?e.props[n]:t[n],r},{})}},{key:"getRootProps",value:function(){var e=this.state,t=e.touched,r=e.errors,n=e.valid,u=e.isVisible;return{getInputProps:this.getInputProps,getProgressProps:this.getProgressProps,toggleShowPassword:this.handleToggleShowPassword,hasRulePassed:this.hasRulePassed,validate:this.inputValidate,touched:t,errors:r,rules:this.rules,valid:n,isVisible:u}}},{key:"isControlledProp",value:function(e){return void 0!==this.props[e]}},{key:"validate",value:function(e){if(arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.touched){var t=this.checkRules(e);return this.isControlledProp("onChange")&&this.props.onChange(e,t),this.setState(o({},t,{value:e,touched:!0})),t}return null}},{key:"checkRules",value:function(e){var t=this.rules.filter(function(e){return!e.inverted}).length,r=100/t,n={current:0,max:t,percent:0},u=!0,o=[];return this.rules.forEach(function(t){var i=t.rule,a=t.inverted,l=c(t,["rule","inverted"]);(void 0===t.value?i(e):i(e,t.value))?a||(n.current+=1,n.percent+=r):(a&&(n.current-=1,n.percent-=r),u=!1,o.push(l))}),{progress:n,valid:u,errors:o,touched:!0}}},{key:"render",value:function(){var e=this.props.render||this.props.children;if(!e)throw new Error("react-password-indicator: You must provide either children or the render function.");var t=e(this.getRootProps());return a.default.cloneElement(t,{})}}],[{key:"getDefaultMessages",value:function(e){var t={minLen:function(e){return"Minimal length is "+e},maxLen:function(e){return"Maximal length is "+e},digits:function(e){return"Requires at least "+e+" digits"},uppercaseChars:function(e){return"Requires at least "+e+" uppercase characters"},specialChars:function(e){return"Requires at least "+e+" special characters"},mustMatch:"Passwords must match",required:"Password is required"};return Object.keys(e).length>0&&Object.entries(e).forEach(function(e){var r=u(e,2),n=r[0],o=r[1];"string"!=typeof o&&"function"!=typeof o||(t[n]=o)}),t}},{key:"getMessageStringValue",value:function(e,t,r){var u=r,o=void 0===e?"undefined":n(e);return e&&("function"===o?u=e(t):"string"===o&&(u=e)),u}}]),t}(),p=function(){var e=this;this.getInputProps=function(t){var r=e.getState(),n=r.isVisible,u=r.value,i=e.props.name;return o({type:n?"text":"password",onChange:e.handleInputChange,value:u,name:i},t)},this.getProgressProps=function(){var t=e.state.progress;return{value:t.current,max:t.max}},this.inputValidate=function(){var t=e.validate(e.getState().value,!0);return t.errors.length?t.errors:null},this.hasRulePassed=function(t){return!e.state.errors.find(function(e){return e.key===t})},this.handleInputChange=function(t){var r=t.target.value;e.validate(r,!0)},this.handleToggleShowPassword=function(){e.isControlledProp("isVisible")||e.setState(function(e){return{isVisible:!e.isVisible}})}};f.propTypes={name:l.default.string,defaultValue:l.default.string,defaultMessages:l.default.objectOf(l.default.oneOfType([l.default.func,l.default.string])),render:l.default.func,children:l.default.func,onChange:l.default.func,rules:l.default.arrayOf(l.default.shape({rule:l.default.oneOfType([l.default.func,l.default.object]).isRequired,key:l.default.string.isRequired,message:l.default.oneOfType([l.default.func,l.default.string])})),minLen:l.default.number,maxLen:l.default.number,digits:l.default.number,required:l.default.bool,specialChars:l.default.number,uppercaseChars:l.default.number,mustMatch:l.default.string,value:l.default.string,isVisible:l.default.bool},f.defaultProps={minLen:0,maxLen:0,digits:0,specialChars:0,uppercaseChars:0,required:!1,mustMatch:void 0,rules:[],defaultValue:"",defaultMessages:{},value:void 0,name:void 0,onChange:void 0,isVisible:void 0,render:void 0,children:void 0},t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(9),o=(n=u)&&n.__esModule?n:{default:n};o.default.default=o.default,t.default=o.default}]);
//# sourceMappingURL=index.js.map