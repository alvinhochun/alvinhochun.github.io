!function(n){function e(e){for(var t,o,i=e[0],a=e[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t]);for(u&&u(e);s.length;)s.shift()()}var t={},r={0:0};function o(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(n){var e=[],t=r[n];if(0!==t)if(t)e.push(t[2]);else{var i=new Promise((function(e,o){t=r[n]=[e,o]}));e.push(t[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(n){return o.p+""+({}[n]||n)+".js"}(n);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(s);var t=r[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,t[1](u)}r[n]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},o.m=n,o.c=t,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o.oe=function(n){throw console.error(n),n};var i=this.webpackJsonp=this.webpackJsonp||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=a;o(o.s=3)}([function(n,e,t){"use strict";t.r(e),function(n){function r(n){const e=t.p;let r="";return(!e||e.indexOf("://")<0)&&(r+=window.location.protocol+"//"+window.location.host),r+=e||"/",r+n}let o;t.d(e,"init_codemirror_pass",(function(){return y})),t.d(e,"run_script",(function(){return j})),t.d(e,"compile_script",(function(){return O})),t.d(e,"main_js",(function(){return S})),t.d(e,"RhaiMode",(function(){return P})),t.d(e,"State",(function(){return E}));const i=new Array(32).fill(void 0);function a(n){return i[n]}i.push(void 0,null,!0,!1);let c=i.length;function u(n){const e=a(n);return function(n){n<36||(i[n]=c,c=n)}(n),e}let s=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let l=null;function _(){return null!==l&&l.buffer===o.memory.buffer||(l=new Uint8Array(o.memory.buffer)),l}function f(n,e){return s.decode(_().subarray(n,n+e))}function d(n){c===i.length&&i.push(i.length+1);const e=c;return c=i[e],i[e]=n,e}let b=0,w=new TextEncoder("utf-8");const g="function"==typeof w.encodeInto?function(n,e){return w.encodeInto(n,e)}:function(n,e){const t=w.encode(n);return e.set(t),{read:n.length,written:t.length}};function p(n,e,t){if(void 0===t){const t=w.encode(n),r=e(t.length);return _().subarray(r,r+t.length).set(t),b=t.length,r}let r=n.length,o=e(r);const i=_();let a=0;for(;a<r;a++){const e=n.charCodeAt(a);if(e>127)break;i[o+a]=e}if(a!==r){0!==a&&(n=n.slice(a)),o=t(o,r,r=a+3*n.length);const e=_().subarray(o+a,o+r);a+=g(n,e).written}return b=a,o}let m=null;function h(){return null!==m&&m.buffer===o.memory.buffer||(m=new Int32Array(o.memory.buffer)),m}function y(n){o.init_codemirror_pass(d(n))}function v(n,e){if(!(n instanceof e))throw new Error("expected instance of "+e.name);return n.ptr}function x(n){return null==n}function j(n,e,t,r){try{const s=o.__wbindgen_export_2.value-16;o.__wbindgen_export_2.value=s;var i=p(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=b;o.run_script(s,i,a,d(e),d(t),x(r)?0:d(r));var c=h()[s/4+0],u=h()[s/4+1];return f(c,u)}finally{o.__wbindgen_export_2.value+=16,o.__wbindgen_free(c,u)}}function O(n){try{const a=o.__wbindgen_export_2.value-16;o.__wbindgen_export_2.value=a;var e=p(n,o.__wbindgen_malloc,o.__wbindgen_realloc),t=b;o.compile_script(a,e,t);var r=h()[a/4+0],i=h()[a/4+1];return f(r,i)}finally{o.__wbindgen_export_2.value+=16,o.__wbindgen_free(r,i)}}function S(){o.main_js()}function A(n){return function(){try{return n.apply(this,arguments)}catch(n){o.__wbindgen_exn_store(d(n))}}}class P{static __wrap(n){const e=Object.create(P.prototype);return e.ptr=n,e}free(){const n=this.ptr;this.ptr=0,o.__wbg_rhaimode_free(n)}constructor(n){var e=o.rhaimode_new(n);return P.__wrap(e)}startState(){var n=o.rhaimode_startState(this.ptr);return E.__wrap(n)}copyState(n){v(n,E);var e=o.rhaimode_copyState(this.ptr,n.ptr);return E.__wrap(e)}token(n,e){try{const i=o.__wbindgen_export_2.value-16;o.__wbindgen_export_2.value=i,v(e,E),o.rhaimode_token(i,this.ptr,d(n),e.ptr);var t=h()[i/4+0],r=h()[i/4+1];let a;return 0!==t&&(a=f(t,r).slice(),o.__wbindgen_free(t,1*r)),a}finally{o.__wbindgen_export_2.value+=16}}indent(n,e){v(n,E);var t=p(e,o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;return u(o.rhaimode_indent(this.ptr,n.ptr,t,r))}get electricInput(){return u(o.rhaimode_electricInput(this.ptr))}get lineComment(){return u(o.rhaimode_lineComment(this.ptr))}}class E{static __wrap(n){const e=Object.create(E.prototype);return e.ptr=n,e}free(){const n=this.ptr;this.ptr=0,o.__wbg_state_free(n)}}e.default=async function e(t){void 0===t&&(t=r("pkg/index.js").replace(/\.js$/,"_bg.wasm"));const i={wbg:{}};i.wbg.__wbindgen_object_drop_ref=function(n){u(n)},i.wbg.__wbg_next_0864114990d58dd8=function(n){var e=a(n).next();return x(e)?16777215:e.codePointAt(0)},i.wbg.__wbg_sol_10af73622bf7e8ee=function(n){return a(n).sol()},i.wbg.__wbg_indentation_bdc928ee5ce4dfa9=function(n){return a(n).indentation()},i.wbg.__wbg_peek_815da24154859651=function(n){var e=a(n).peek();return x(e)?16777215:e.codePointAt(0)},i.wbg.__wbindgen_string_new=function(n,e){return d(f(n,e))},i.wbg.__wbindgen_number_new=function(n){return d(n)},i.wbg.__wbindgen_object_clone_ref=function(n){return d(a(n))},i.wbg.__wbindgen_json_parse=function(n,e){return d(JSON.parse(f(n,e)))},i.wbg.__wbg_now_acfa6ea53a7be2c2=function(n){return a(n).now()},i.wbg.__wbg_log_61ea781bd002cc41=function(n){console.log(a(n))},i.wbg.__wbg_newnoargs_e2fdfe2af14a2323=function(n,e){return d(new Function(f(n,e)))},i.wbg.__wbg_call_e9f0ce4da840ab94=A((function(n,e){return d(a(n).call(a(e)))})),i.wbg.__wbg_call_0dad7db75ec90ae7=A((function(n,e,t){return d(a(n).call(a(e),a(t)))})),i.wbg.__wbg_get_2e96a823c1c5a5bd=A((function(n,e){return d(Reflect.get(a(n),a(e)))})),i.wbg.__wbg_new_4f977ed6447a5a84=function(n,e,t,r){return d(new RegExp(f(n,e),f(t,r)))},i.wbg.__wbg_self_179e8c2a5a4c73a3=A((function(){return d(self.self)})),i.wbg.__wbg_window_492cfe63a6e41dfa=A((function(){return d(window.window)})),i.wbg.__wbg_globalThis_8ebfea75c2dd63ee=A((function(){return d(globalThis.globalThis)})),i.wbg.__wbg_global_62ea2619f58bf94d=A((function(){return d(n.global)})),i.wbg.__wbindgen_is_undefined=function(n){return void 0===a(n)},i.wbg.__wbindgen_debug_string=function(n,e){var t=p(function n(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return""+e;if("string"==t)return`"${e}"`;if("symbol"==t){const n=e.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==t){const n=e.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(e)){const t=e.length;let r="[";t>0&&(r+=n(e[0]));for(let o=1;o<t;o++)r+=", "+n(e[o]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(e));let o;if(!(r.length>1))return toString.call(e);if(o=r[1],"Object"==o)try{return"Object("+JSON.stringify(e)+")"}catch(n){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:o}(a(e)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;h()[n/4+1]=r,h()[n/4+0]=t},i.wbg.__wbindgen_throw=function(n,e){throw new Error(f(n,e))},i.wbg.__wbindgen_rethrow=function(n){throw u(n)},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:c,module:s}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await t,i);return o=c.exports,e.__wbindgen_wasm_module=s,o.__wbindgen_start(),o}}.call(this,t(2))},function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}));var r=t.p+"122b9aac6fa80315f80aecf9020dc1d1.wasm",o=t(0);const i=Object(o.default)(r);i.then(n=>o)},function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},function(n,e,t){"use strict";t.r(e);var r=t(1);const o=Promise.all([t.e(1),t.e(2)]).then(t.bind(null,5)),i=t.e(3).then(t.t.bind(null,4,7));let a;if(window.location.hash.startsWith("#embed-")&&window.parent!==window){const n=window.location.hash.substr(7);let e;a=new Promise((n,t)=>{e=n}),window.addEventListener("message",(function(n){if("rhai-playground"===n.data.to&&"embed-init"===n.data.req){if("string"!=typeof n.data.code)throw"Code is not a string";e({code:n.data.code})}})),window.parent.postMessage({from:"rhai-playground",req:"embed-loaded",id:n},"*");const t=document.createElement("div");t.innerText="(embedded)",document.getElementById("loading").appendChild(t)}else a=Promise.resolve(null);Promise.all([o,a,r.b,i]).then(([n,e,t,r])=>{document.getElementById("loading").remove(),n.default("#topContainer",e)})}]);