/*! For license information please see react.development.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).React={})}(this,(function(e){"use strict";var t=60103,r=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var n=60109,o=60110,a=60112;e.Suspense=60113;var u=60120,i=60115,c=60116,l=60121,s=60122,f=60117,p=60129,d=60131;if("function"==typeof Symbol&&Symbol.for){var y=Symbol.for;t=y("react.element"),r=y("react.portal"),e.Fragment=y("react.fragment"),e.StrictMode=y("react.strict_mode"),e.Profiler=y("react.profiler"),n=y("react.provider"),o=y("react.context"),a=y("react.forward_ref"),e.Suspense=y("react.suspense"),u=y("react.suspense_list"),i=y("react.memo"),c=y("react.lazy"),l=y("react.block"),s=y("react.server.block"),f=y("react.fundamental"),y("react.scope"),y("react.opaque.id"),p=y("react.debug_trace_mode"),y("react.offscreen"),d=y("react.legacy_hidden")}var v="function"==typeof Symbol&&Symbol.iterator;function m(e){if(null===e||"object"!=typeof e)return null;var t=v&&e[v]||e["@@iterator"];return"function"==typeof t?t:null}var h=Object.prototype.hasOwnProperty,g=function(e,t){for(var r in t)h.call(t,r)&&(e[r]=t[r])},b=Object.assign||function(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var r=Object(e),n=1;n<arguments.length;n++){var o=arguments[n];null!=o&&g(r,Object(o))}return r},_={current:null},w={transition:0},k={current:null},C={},R=null;function S(e){R=e}C.setExtraStackFrame=function(e){R=e},C.getCurrentStack=null,C.getStackAddendum=function(){var e="";R&&(e+=R);var t=C.getCurrentStack;return t&&(e+=t()||""),e};var P={current:!1},j={ReactCurrentDispatcher:_,ReactCurrentBatchConfig:w,ReactCurrentOwner:k,IsSomeRendererActing:P,assign:b};function E(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];x("warn",e,r)}function O(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];x("error",e,r)}function x(e,t,r){var n=j.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return""+e}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}j.ReactDebugCurrentFrame=C;var T={};function I(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;T[o]||(O("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),T[o]=!0)}var $={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){I(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){I(e,"replaceState")},enqueueSetState:function(e,t,r,n){I(e,"setState")}},A={};function F(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||$}Object.freeze(A),F.prototype.isReactComponent={},F.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},F.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var D={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},W=function(e,t){Object.defineProperty(F.prototype,e,{get:function(){E("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var N in D)D.hasOwnProperty(N)&&W(N,D[N]);function M(){}function L(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||$}M.prototype=F.prototype;var z=L.prototype=new M;function B(e){return e.displayName||"Context"}function U(t){if(null==t)return null;if("number"==typeof t.tag&&O("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case e.Fragment:return"Fragment";case r:return"Portal";case e.Profiler:return"Profiler";case e.StrictMode:return"StrictMode";case e.Suspense:return"Suspense";case u:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case o:return B(t)+".Consumer";case n:return B(t._context)+".Provider";case a:return d=t,v="ForwardRef",m=(y=t.render).displayName||y.name||"",d.displayName||(""!==m?"ForwardRef("+m+")":v);case i:return U(t.type);case l:return U(t._render);case c:var s=t,f=s._payload,p=s._init;try{return U(p(f))}catch(e){return null}}var d,y,v,m;return null}z.constructor=L,b(z,F.prototype),z.isPureReactComponent=!0;var q,Y,V,Q=Object.prototype.hasOwnProperty,H={key:!0,ref:!0,__self:!0,__source:!0};function J(e){if(Q.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function X(e){if(Q.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}function G(e,t){var r=function(){q||(q=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}function K(e,t){var r=function(){Y||(Y=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}function Z(e){if("string"==typeof e.ref&&k.current&&e.__self&&k.current.stateNode!==e.__self){var t=U(k.current.type);V[t]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),V[t]=!0)}}V={};var ee=function(e,r,n,o,a,u,i){var c={$$typeof:t,type:e,key:r,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function te(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in J(t)&&(u=t.ref,Z(t)),X(t)&&(a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)Q.call(t,n)&&!H.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(l>1){for(var s=Array(l),f=0;f<l;f++)s[f]=arguments[f+2];Object.freeze&&Object.freeze(s),o.children=s}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&G(o,d),u&&K(o,d)}return ee(e,a,u,i,c,k.current,o)}function re(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=b({},e.props),u=e.key,i=e.ref,c=e._self,l=e._source,s=e._owner;if(null!=t)for(n in J(t)&&(i=t.ref,s=k.current),X(t)&&(u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)Q.call(t,n)&&!H.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ee(e.type,u,i,c,l,s,a)}function ne(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var oe=!1,ae=/\/+/g;function ue(e){return e.replace(ae,"$&/")}function ie(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function ce(e,n,o,a,u){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c,l,s,f=!1;if(null===e)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case t:case r:f=!0}}if(f){var p=e,d=u(p),y=""===a?"."+ie(p,0):a;if(Array.isArray(d)){var v="";null!=y&&(v=ue(y)+"/"),ce(d,n,v,"",(function(e){return e}))}else null!=d&&(ne(d)&&(c=d,l=o+(!d.key||p&&p.key===d.key?"":ue(""+d.key)+"/")+y,d=ee(c.type,l,c.ref,c._self,c._source,c._owner,c.props)),n.push(d));return 1}var h=0,g=""===a?".":a+":";if(Array.isArray(e))for(var b=0;b<e.length;b++)h+=ce(s=e[b],n,o,g+ie(s,b),u);else{var _=m(e);if("function"==typeof _){var w=e;_===w.entries&&(oe||E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),oe=!0);for(var k,C=_.call(w),R=0;!(k=C.next()).done;)h+=ce(s=k.value,n,o,g+ie(s,R++),u)}else if("object"===i){var S=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===S?"object with keys {"+Object.keys(e).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.")}}return h}function le(e,t,r){if(null==e)return e;var n=[],o=0;return ce(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function se(e){if(-1===e._status){var t=(0,e._result)(),r=e;r._status=0,r._result=t,t.then((function(t){if(0===e._status){var r=t.default;void 0===r&&O("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",t);var n=e;n._status=1,n._result=r}}),(function(t){if(0===e._status){var r=e;r._status=2,r._result=t}}))}if(1===e._status)return e._result;throw e._result}function fe(t){return"string"==typeof t||"function"==typeof t||t===e.Fragment||t===e.Profiler||t===p||t===e.StrictMode||t===e.Suspense||t===u||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===c||t.$$typeof===i||t.$$typeof===n||t.$$typeof===o||t.$$typeof===a||t.$$typeof===f||t.$$typeof===l||t[0]===s)}function pe(){var e=_.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");return e}var de,ye,ve,me,he,ge,be,_e=0;function we(){}we.__reactDisabledLog=!0;var ke,Ce=j.ReactCurrentDispatcher;function Re(e,t,r){if(void 0===ke)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);ke=n&&n[1]||""}return"\n"+ke+e}var Se,Pe=!1,je="function"==typeof WeakMap?WeakMap:Map;function Ee(e,t){if(!e||Pe)return"";var r,n=Se.get(e);if(void 0!==n)return n;Pe=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Ce.current,Ce.current=null,function(){if(0===_e){de=console.log,ye=console.info,ve=console.warn,me=console.error,he=console.group,ge=console.groupCollapsed,be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:we,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}_e++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),c=r.stack.split("\n"),l=i.length-1,s=c.length-1;l>=1&&s>=0&&i[l]!==c[s];)s--;for(;l>=1&&s>=0;l--,s--)if(i[l]!==c[s]){if(1!==l||1!==s)do{if(l--,--s<0||i[l]!==c[s]){var f="\n"+i[l].replace(" at new "," at ");return"function"==typeof e&&Se.set(e,f),f}}while(l>=1&&s>=0);break}}}finally{Pe=!1,Ce.current=o,function(){if(0==--_e){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:b({},e,{value:de}),info:b({},e,{value:ye}),warn:b({},e,{value:ve}),error:b({},e,{value:me}),group:b({},e,{value:he}),groupCollapsed:b({},e,{value:ge}),groupEnd:b({},e,{value:be})})}_e<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Re(p):"";return"function"==typeof e&&Se.set(e,d),d}function Oe(e,t,r){return Ee(e,!1)}function xe(t,r,n){if(null==t)return"";if("function"==typeof t)return Ee(t,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(t));if("string"==typeof t)return Re(t);switch(t){case e.Suspense:return Re("Suspense");case u:return Re("SuspenseList")}if("object"==typeof t)switch(t.$$typeof){case a:return Oe(t.render);case i:return xe(t.type,r,n);case l:return Oe(t._render);case c:var o=t,s=o._payload,f=o._init;try{return xe(f(s),r,n)}catch(e){}}return""}Se=new je;var Te,Ie={},$e=j.ReactDebugCurrentFrame;function Ae(e){if(e){var t=e._owner,r=xe(e.type,e._source,t?t.type:null);$e.setExtraStackFrame(r)}else $e.setExtraStackFrame(null)}function Fe(e){if(e){var t=e._owner;S(xe(e.type,e._source,t?t.type:null))}else S(null)}function De(){if(k.current){var e=U(k.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}function We(e){return null!=e&&void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":"";var t}Te=!1;var Ne={};function Me(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=De();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ne[r]){Ne[r]=!0;var n="";e&&e._owner&&e._owner!==k.current&&(n=" It was passed a child from "+U(e._owner.type)+"."),Fe(e),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Fe(null)}}}function Le(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];ne(n)&&Me(n,t)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var o=m(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ne(a.value)&&Me(a.value,t)}}function ze(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==a&&r.$$typeof!==i)return;t=r.propTypes}if(t){var n=U(r);!function(e,t,r,n,o){var a=Function.call.bind(Object.prototype.hasOwnProperty);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": "+"prop type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(Ae(o),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),Ae(null)),i instanceof Error&&!(i.message in Ie)&&(Ie[i.message]=!0,Ae(o),O("Failed %s type: %s",r,i.message),Ae(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||Te||(Te=!0,O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",U(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Be(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Fe(e),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Fe(null);break}}null!==e.ref&&(Fe(e),O("Invalid attribute `ref` supplied to `React.Fragment`."),Fe(null))}function Ue(r,n,o){var a=fe(r);if(!a){var u="";(void 0===r||"object"==typeof r&&null!==r&&0===Object.keys(r).length)&&(u+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i,c=We(n);u+=c||De(),null===r?i="null":Array.isArray(r)?i="array":void 0!==r&&r.$$typeof===t?(i="<"+(U(r.type)||"Unknown")+" />",u=" Did you accidentally export a JSX literal instead of a component?"):i=typeof r,O("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",i,u)}var l=te.apply(this,arguments);if(null==l)return l;if(a)for(var s=2;s<arguments.length;s++)Le(arguments[s],r);return r===e.Fragment?Be(l):ze(l),l}var qe,Ye,Ve,Qe,He,Je,Xe,Ge=!1;if("object"==typeof performance&&"function"==typeof performance.now){var Ke=performance;Je=function(){return Ke.now()}}else{var Ze=Date,et=Ze.now();Je=function(){return Ze.now()-et}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var tt=null,rt=null,nt=function(){if(null!==tt)try{var e=Je();tt(!0,e),tt=null}catch(e){throw setTimeout(nt,0),e}};qe=function(e){null!==tt?setTimeout(qe,0,e):(tt=e,setTimeout(nt,0))},Ye=function(e,t){rt=setTimeout(e,t)},Ve=function(){clearTimeout(rt)},Qe=function(){return!1},He=Xe=function(){}}else{var ot=window.setTimeout,at=window.clearTimeout;if("undefined"!=typeof console){var ut=window.requestAnimationFrame,it=window.cancelAnimationFrame;"function"!=typeof ut&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof it&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var ct=!1,lt=null,st=-1,ft=5,pt=0;Qe=function(){return Je()>=pt},He=function(){},Xe=function(e){e<0||e>125?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ft=e>0?Math.floor(1e3/e):5};var dt=new MessageChannel,yt=dt.port2;dt.port1.onmessage=function(){if(null!==lt){var e=Je();pt=e+ft;try{lt(!0,e)?yt.postMessage(null):(ct=!1,lt=null)}catch(e){throw yt.postMessage(null),e}}else ct=!1},qe=function(e){lt=e,ct||(ct=!0,yt.postMessage(null))},Ye=function(e,t){st=ot((function(){e(Je())}),t)},Ve=function(){at(st),st=-1}}function vt(e,t){var r=e.length;e.push(t),function(e,t,r){for(var n=r;;){var o=n-1>>>1,a=e[o];if(!(void 0!==a&&gt(a,t)>0))return;e[o]=t,e[n]=a,n=o}}(e,t,r)}function mt(e){var t=e[0];return void 0===t?null:t}function ht(e){var t=e[0];if(void 0!==t){var r=e.pop();return r!==t&&(e[0]=r,function(e,t,r){for(var n=0,o=e.length;n<o;){var a=2*(n+1)-1,u=e[a],i=a+1,c=e[i];if(void 0!==u&&gt(u,t)<0)void 0!==c&&gt(c,u)<0?(e[n]=c,e[i]=t,n=i):(e[n]=u,e[a]=t,n=a);else{if(!(void 0!==c&&gt(c,t)<0))return;e[n]=c,e[i]=t,n=i}}}(e,r)),t}return null}function gt(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}var bt=0,_t=0,wt="function"==typeof SharedArrayBuffer?new SharedArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):"function"==typeof ArrayBuffer?new ArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):null,kt=null!==wt?new Int32Array(wt):[];kt[0]=0,kt[3]=0,kt[1]=0;var Ct=0,Rt=null,St=null,Pt=0;function jt(e){if(null!==St){var t=Pt;if((Pt+=e.length)+1>Ct){if((Ct*=2)>524288)return console.error("Scheduler Profiling: Event log exceeded maximum size. Don't forget to call `stopLoggingProfilingEvents()`."),void Et();var r=new Int32Array(4*Ct);r.set(St),Rt=r.buffer,St=r}St.set(e,t)}}function Et(){var e=Rt;return Ct=0,Rt=null,St=null,Pt=0,e}function Ot(e,t){kt[3]++,null!==St&&jt([1,1e3*t,e.id,e.priorityLevel])}function xt(e,t){kt[0]=0,kt[1]=0,kt[3]--,null!==St&&jt([2,1e3*t,e.id])}function Tt(e,t){kt[0]=0,kt[1]=0,kt[2]=0,null!==St&&jt([6,1e3*t,e.id,bt])}var It=[],$t=[],At=1,Ft=null,Dt=3,Wt=!1,Nt=!1,Mt=!1;function Lt(e){for(var t=mt($t);null!==t;){if(null===t.callback)ht($t);else{if(!(t.startTime<=e))return;ht($t),t.sortIndex=t.expirationTime,vt(It,t),Ot(t,e),t.isQueued=!0}t=mt($t)}}function zt(e){if(Mt=!1,Lt(e),!Nt)if(null!==mt(It))Nt=!0,qe(Bt);else{var t=mt($t);null!==t&&Ye(zt,t.startTime-e)}}function Bt(e,t){null!==St&&jt([8,1e3*t,_t]),Nt=!1,Mt&&(Mt=!1,Ve()),Wt=!0;var r=Dt;try{try{return function(e,t){var r,n,o=t;for(Lt(o),Ft=mt(It);null!==Ft&&(!(Ft.expirationTime>o)||e&&!Qe());){var a=Ft.callback;if("function"==typeof a){Ft.callback=null,Dt=Ft.priorityLevel;var u=Ft.expirationTime<=o;r=Ft,n=o,bt++,kt[0]=r.priorityLevel,kt[1]=r.id,kt[2]=bt,null!==St&&jt([5,1e3*n,r.id,bt]);var i=a(u);o=Je(),"function"==typeof i?(Ft.callback=i,Tt(Ft,o)):(xt(Ft,o),Ft.isQueued=!1,Ft===mt(It)&&ht(It)),Lt(o)}else ht(It);Ft=mt(It)}if(null!==Ft)return!0;var c=mt($t);return null!==c&&Ye(zt,c.startTime-o),!1}(e,t)}catch(e){if(null!==Ft){var n=Je();!function(e,t){kt[0]=0,kt[1]=0,kt[3]--,null!==St&&jt([3,1e3*t,e.id])}(Ft,n),Ft.isQueued=!1}throw e}}finally{Ft=null,Dt=r,Wt=!1,function(e){_t++,null!==St&&jt([7,1e3*e,_t])}(Je())}}var Ut=He,qt={startLoggingProfilingEvents:function(){Ct=131072,Rt=new ArrayBuffer(4*Ct),St=new Int32Array(Rt),Pt=0},stopLoggingProfilingEvents:Et,sharedProfilingBuffer:wt},Yt=Object.freeze({__proto__:null,unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=Dt;Dt=e;try{return t()}finally{Dt=r}},unstable_next:function(e){var t;switch(Dt){case 1:case 2:case 3:t=3;break;default:t=Dt}var r=Dt;Dt=t;try{return e()}finally{Dt=r}},unstable_scheduleCallback:function(e,t,r){var n,o,a=Je();if("object"==typeof r&&null!==r){var u=r.delay;n="number"==typeof u&&u>0?a+u:a}else n=a;switch(e){case 1:o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}var i=n+o,c={id:At++,callback:t,priorityLevel:e,startTime:n,expirationTime:i,sortIndex:-1,isQueued:!1};return n>a?(c.sortIndex=n,vt($t,c),null===mt(It)&&c===mt($t)&&(Mt?Ve():Mt=!0,Ye(zt,n-a))):(c.sortIndex=i,vt(It,c),Ot(c,a),c.isQueued=!0,Nt||Wt||(Nt=!0,qe(Bt))),c},unstable_cancelCallback:function(e){e.isQueued&&(function(e,t){kt[3]--,null!==St&&jt([4,1e3*t,e.id])}(e,Je()),e.isQueued=!1),e.callback=null},unstable_wrapCallback:function(e){var t=Dt;return function(){var r=Dt;Dt=t;try{return e.apply(this,arguments)}finally{Dt=r}}},unstable_getCurrentPriorityLevel:function(){return Dt},get unstable_shouldYield(){return Qe},unstable_requestPaint:Ut,unstable_continueExecution:function(){Nt||Wt||(Nt=!0,qe(Bt))},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return mt(It)},get unstable_now(){return Je},get unstable_forceFrameRate(){return Xe},unstable_Profiling:qt}),Vt=0,Qt=0,Ht=null,Jt=null;Ht={current:new Set},Jt={current:null};var Xt=null;function Gt(e){var t=!1,r=null;if(Xt.forEach((function(n){try{n.onInteractionTraced(e)}catch(e){t||(t=!0,r=e)}})),t)throw r}function Kt(e){var t=!1,r=null;if(Xt.forEach((function(n){try{n.onInteractionScheduledWorkCompleted(e)}catch(e){t||(t=!0,r=e)}})),t)throw r}function Zt(e,t){var r=!1,n=null;if(Xt.forEach((function(o){try{o.onWorkScheduled(e,t)}catch(e){r||(r=!0,n=e)}})),r)throw n}function er(e,t){var r=!1,n=null;if(Xt.forEach((function(o){try{o.onWorkStarted(e,t)}catch(e){r||(r=!0,n=e)}})),r)throw n}function tr(e,t){var r=!1,n=null;if(Xt.forEach((function(o){try{o.onWorkStopped(e,t)}catch(e){r||(r=!0,n=e)}})),r)throw n}function rr(e,t){var r=!1,n=null;if(Xt.forEach((function(o){try{o.onWorkCanceled(e,t)}catch(e){r||(r=!0,n=e)}})),r)throw n}Xt=new Set;var nr=Object.freeze({__proto__:null,get __interactionsRef(){return Ht},get __subscriberRef(){return Jt},unstable_clear:function(e){var t=Ht.current;Ht.current=new Set;try{return e()}finally{Ht.current=t}},unstable_getCurrent:function(){return Ht.current},unstable_getThreadID:function(){return++Qt},unstable_trace:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o={__count:1,id:Vt++,name:e,timestamp:t},a=Ht.current,u=new Set(a);u.add(o),Ht.current=u;var i,c=Jt.current;try{null!==c&&c.onInteractionTraced(o)}finally{try{null!==c&&c.onWorkStarted(u,n)}finally{try{i=r()}finally{Ht.current=a;try{null!==c&&c.onWorkStopped(u,n)}finally{o.__count--,null!==c&&0===o.__count&&c.onInteractionScheduledWorkCompleted(o)}}}}return i},unstable_wrap:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=Ht.current,n=Jt.current;null!==n&&n.onWorkScheduled(r,t),r.forEach((function(e){e.__count++}));var o=!1;function a(){var a=Ht.current;Ht.current=r,n=Jt.current;try{var u;try{null!==n&&n.onWorkStarted(r,t)}finally{try{u=e.apply(void 0,arguments)}finally{Ht.current=a,null!==n&&n.onWorkStopped(r,t)}}return u}finally{o||(o=!0,r.forEach((function(e){e.__count--,null!==n&&0===e.__count&&n.onInteractionScheduledWorkCompleted(e)})))}}return a.cancel=function(){n=Jt.current;try{null!==n&&n.onWorkCanceled(r,t)}finally{r.forEach((function(e){e.__count--,n&&0===e.__count&&n.onInteractionScheduledWorkCompleted(e)}))}},a},unstable_subscribe:function(e){Xt.add(e),1===Xt.size&&(Jt.current={onInteractionScheduledWorkCompleted:Kt,onInteractionTraced:Gt,onWorkCanceled:rr,onWorkScheduled:Zt,onWorkStarted:er,onWorkStopped:tr})},unstable_unsubscribe:function(e){Xt.delete(e),0===Xt.size&&(Jt.current=null)}}),or={ReactCurrentDispatcher:_,ReactCurrentOwner:k,IsSomeRendererActing:P,ReactCurrentBatchConfig:w,assign:b,Scheduler:Yt,SchedulerTracing:nr};or.ReactDebugCurrentFrame=C;try{var ar=Object.freeze({});new Map([[ar,null]]),new Set([ar])}catch(e){}var ur=Ue,ir={map:le,forEach:function(e,t,r){le(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return le(e,(function(){t++})),t},toArray:function(e){return le(e,(function(e){return e}))||[]},only:function(e){if(!ne(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};e.Children=ir,e.Component=F,e.PureComponent=L,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=or,e.cloneElement=function(e,t,r){for(var n=re.apply(this,arguments),o=2;o<arguments.length;o++)Le(arguments[o],n.type);return ze(n),n},e.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&O("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:o,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:n,_context:r};var a=!1,u=!1,i=!1,c={$$typeof:o,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(c,{Provider:{get:function(){return u||(u=!0,O("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return a||(a=!0,O("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}},displayName:{get:function(){return r.displayName},set:function(e){i||(E("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),i=!0)}}}),r.Consumer=c,r._currentRenderer=null,r._currentRenderer2=null,r},e.createElement=ur,e.createFactory=function(e){var t=Ue.bind(null,e);return t.type=e,Ge||(Ge=!0,E("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return E("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},e.createRef=function(){var e={current:null};return Object.seal(e),e},e.forwardRef=function(e){null!=e&&e.$$typeof===i?O("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?O("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&O("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||O("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:a,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,null==e.displayName&&(e.displayName=r)}}),r},e.isValidElement=ne,e.lazy=function(e){var t,r,n={$$typeof:c,_payload:{_status:-1,_result:e},_init:se};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){O("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){O("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},e.memo=function(e,t){fe(e)||O("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:i,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,null==e.displayName&&(e.displayName=t)}}),n},e.useCallback=function(e,t){return pe().useCallback(e,t)},e.useContext=function(e,t){var r=pe();if(void 0!==t&&O("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?O("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&O("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},e.useDebugValue=function(e,t){return pe().useDebugValue(e,t)},e.useEffect=function(e,t){return pe().useEffect(e,t)},e.useImperativeHandle=function(e,t,r){return pe().useImperativeHandle(e,t,r)},e.useLayoutEffect=function(e,t){return pe().useLayoutEffect(e,t)},e.useMemo=function(e,t){return pe().useMemo(e,t)},e.useReducer=function(e,t,r){return pe().useReducer(e,t,r)},e.useRef=function(e){return pe().useRef(e)},e.useState=function(e){return pe().useState(e)},e.version="17.0.1"}));