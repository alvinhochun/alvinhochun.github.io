!function(n){function e(e){for(var t,o,i=e[0],c=e[1],a=0,s=[];a<i.length;a++)o=i[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);for(u&&u(e);s.length;)s.shift()()}var t={},r={0:0};function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(n){var e=[],t=r[n];if(0!==t)if(t)e.push(t[2]);else{var i=new Promise((function(e,o){t=r[n]=[e,o]}));e.push(t[2]=i);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(n){return o.p+""+({}[n]||n)+".js"}(n);var u=new Error;c=function(e){a.onerror=a.onload=null,clearTimeout(s);var t=r[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,t[1](u)}r[n]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(e)},o.m=n,o.c=t,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o.oe=function(n){throw console.error(n),n};var i=this.webpackJsonp=this.webpackJsonp||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var a=0;a<i.length;a++)e(i[a]);var u=c;o(o.s=3)}([function(n,e,t){"use strict";t.r(e),function(n){function r(n){const e=t.p;let r="";return(!e||e.indexOf("://")<0)&&(r+=window.location.protocol+"//"+window.location.host),r+=e||"/",r+n}let o;t.d(e,"init_codemirror_pass",(function(){return y})),t.d(e,"run_script",(function(){return O})),t.d(e,"compile_script",(function(){return S})),t.d(e,"main_js",(function(){return x})),t.d(e,"RhaiMode",(function(){return P})),t.d(e,"State",(function(){return E}));const i=new Array(32).fill(void 0);function c(n){return i[n]}i.push(void 0,null,!0,!1);let a=i.length;function u(n){const e=c(n);return function(n){n<36||(i[n]=a,a=n)}(n),e}let s=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let l=null;function f(){return null!==l&&l.buffer===o.memory.buffer||(l=new Uint8Array(o.memory.buffer)),l}function _(n,e){return s.decode(f().subarray(n,n+e))}function d(n){a===i.length&&i.push(i.length+1);const e=a;return a=i[e],i[e]=n,e}let b=0,w=new TextEncoder("utf-8");const g="function"==typeof w.encodeInto?function(n,e){return w.encodeInto(n,e)}:function(n,e){const t=w.encode(n);return e.set(t),{read:n.length,written:t.length}};function p(n,e,t){if(void 0===t){const t=w.encode(n),r=e(t.length);return f().subarray(r,r+t.length).set(t),b=t.length,r}let r=n.length,o=e(r);const i=f();let c=0;for(;c<r;c++){const e=n.charCodeAt(c);if(e>127)break;i[o+c]=e}if(c!==r){0!==c&&(n=n.slice(c)),o=t(o,r,r=c+3*n.length);const e=f().subarray(o+c,o+r);c+=g(n,e).written}return b=c,o}let m=null;function h(){return null!==m&&m.buffer===o.memory.buffer||(m=new Int32Array(o.memory.buffer)),m}function y(n){o.init_codemirror_pass(d(n))}function v(n,e){if(!(n instanceof e))throw new Error("expected instance of "+e.name);return n.ptr}function j(n){return null==n}function O(n,e,t,r){try{var i=p(n,o.__wbindgen_malloc,o.__wbindgen_realloc),c=b;o.run_script(8,i,c,d(e),d(t),j(r)?0:d(r));var a=h()[2],u=h()[3];return _(a,u)}finally{o.__wbindgen_free(a,u)}}function S(n){try{var e=p(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=b;o.compile_script(8,e,t);var r=h()[2],i=h()[3];return _(r,i)}finally{o.__wbindgen_free(r,i)}}function x(){o.main_js()}function A(n){return function(){try{return n.apply(this,arguments)}catch(n){o.__wbindgen_exn_store(d(n))}}}class P{static __wrap(n){const e=Object.create(P.prototype);return e.ptr=n,e}free(){const n=this.ptr;this.ptr=0,o.__wbg_rhaimode_free(n)}constructor(n){var e=o.rhaimode_new(n);return P.__wrap(e)}startState(){var n=o.rhaimode_startState(this.ptr);return E.__wrap(n)}copyState(n){v(n,E);var e=o.rhaimode_copyState(this.ptr,n.ptr);return E.__wrap(e)}token(n,e){v(e,E),o.rhaimode_token(8,this.ptr,d(n),e.ptr);var t=h()[2],r=h()[3];let i;return 0!==t&&(i=_(t,r).slice(),o.__wbindgen_free(t,1*r)),i}indent(n,e){v(n,E);var t=p(e,o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;return u(o.rhaimode_indent(this.ptr,n.ptr,t,r))}get electricInput(){return u(o.rhaimode_electricInput(this.ptr))}get lineComment(){return u(o.rhaimode_lineComment(this.ptr))}}class E{static __wrap(n){const e=Object.create(E.prototype);return e.ptr=n,e}free(){const n=this.ptr;this.ptr=0,o.__wbg_state_free(n)}}e.default=async function e(t){void 0===t&&(t=r("pkg/index.js").replace(/\.js$/,"_bg.wasm"));const i={wbg:{}};i.wbg.__wbindgen_object_drop_ref=function(n){u(n)},i.wbg.__wbg_next_0864114990d58dd8=function(n){var e=c(n).next();return j(e)?16777215:e.codePointAt(0)},i.wbg.__wbindgen_string_new=function(n,e){return d(_(n,e))},i.wbg.__wbindgen_number_new=function(n){return d(n)},i.wbg.__wbg_sol_10af73622bf7e8ee=function(n){return c(n).sol()},i.wbg.__wbg_indentation_bdc928ee5ce4dfa9=function(n){return c(n).indentation()},i.wbg.__wbg_peek_815da24154859651=function(n){var e=c(n).peek();return j(e)?16777215:e.codePointAt(0)},i.wbg.__wbindgen_object_clone_ref=function(n){return d(c(n))},i.wbg.__wbindgen_json_parse=function(n,e){return d(JSON.parse(_(n,e)))},i.wbg.__wbg_now_0aafc2276b5e8d61=function(n){return c(n).now()},i.wbg.__wbg_log_d85e484a8ba03c98=function(n){console.log(c(n))},i.wbg.__wbg_newnoargs_714dec97cfe3da72=function(n,e){return d(new Function(_(n,e)))},i.wbg.__wbg_call_652fa4cfce310118=A((function(n,e){return d(c(n).call(c(e)))})),i.wbg.__wbg_call_0d50cec2d58307ad=A((function(n,e,t){return d(c(n).call(c(e),c(t)))})),i.wbg.__wbg_get_09cf0143b5128db8=A((function(n,e){return d(Reflect.get(c(n),c(e)))})),i.wbg.__wbg_new_1fb07a0e62f55c1e=function(n,e,t,r){return d(new RegExp(_(n,e),_(t,r)))},i.wbg.__wbg_self_8a533577b0c752d3=A((function(){return d(self.self)})),i.wbg.__wbg_window_5912543aff64b459=A((function(){return d(window.window)})),i.wbg.__wbg_globalThis_8f997d48cb67f28e=A((function(){return d(globalThis.globalThis)})),i.wbg.__wbg_global_69b29294e4daedff=A((function(){return d(n.global)})),i.wbg.__wbindgen_is_undefined=function(n){return void 0===c(n)},i.wbg.__wbindgen_debug_string=function(n,e){var t=p(function n(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return""+e;if("string"==t)return`"${e}"`;if("symbol"==t){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==t){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const t=e.length;let r="[";t>0&&(r+=n(e[0]));for(let o=1;o<t;o++)r+=", "+n(e[o]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(e));let o;if(!(r.length>1))return toString.call(e);if(o=r[1],"Object"==o)try{return"Object("+JSON.stringify(e)+")"}catch(n){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:o}(c(e)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;h()[n/4+1]=r,h()[n/4+0]=t},i.wbg.__wbindgen_throw=function(n,e){throw new Error(_(n,e))},i.wbg.__wbindgen_rethrow=function(n){throw u(n)},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:a,module:s}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await t,i);return o=a.exports,e.__wbindgen_wasm_module=s,o.__wbindgen_start(),o}}.call(this,t(2))},function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}));var r=t.p+"ef9e06707d5f5f8fea12d3ee3a1cb48b.wasm",o=t(0);const i=Object(o.default)(r);i.then(n=>o)},function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},function(n,e,t){"use strict";t.r(e);var r=t(1);const o=Promise.all([t.e(1),t.e(2)]).then(t.bind(null,5)),i=t.e(3).then(t.t.bind(null,4,7));let c;if(window.location.hash.startsWith("#embed-")&&window.parent!==window){const n=window.location.hash.substr(7);let e;c=new Promise((n,t)=>{e=n}),window.addEventListener("message",(function(n){if("rhai-playground"===n.data.to&&"embed-init"===n.data.req){if("string"!=typeof n.data.code)throw"Code is not a string";e({code:n.data.code})}})),window.parent.postMessage({from:"rhai-playground",req:"embed-loaded",id:n},"*");const t=document.createElement("div");t.innerText="(embedded)",document.getElementById("loading").appendChild(t)}else c=Promise.resolve(null);Promise.all([o,c,r.b,i]).then(([n,e,t,r])=>{document.getElementById("loading").remove(),n.default("#topContainer",e)})}]);