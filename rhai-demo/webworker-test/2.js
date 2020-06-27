(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{1:function(t,n,e){"use strict";e.r(n),e.d(n,"initEditor",(function(){return E}));var r=e(4),o=e(6);const i=new(e.n(o).a);i.onerror=t=>{console.error("An error occured in the worker:",t)};let c=null;var s=e(5),u=e.n(s);e(8),e(10),e(11),e(12),e(13),e(14),e(15),e(17),e(19),e(23);r.D(u.a.Pass);const a=e(27),l=document.getElementById("exampleScriptSelect");for(let t of a.keys()){const n=document.createElement("option");n.value=t,t.startsWith("./")&&(t=t.substr(2)),n.innerText=t,l.appendChild(n)}const f=e(28),d=document.getElementById("cmThemeSelect");for(let t of f.keys()){function h(t,n){const e=document.createElement("option");e.value=n?`${t}/${n}`:t,e.innerText=n||t,d.appendChild(e)}t.startsWith("./")&&t.endsWith(".css")&&(t=t.substring(2,t.length-4),"solarized"===t?(h(t,t+" dark"),h(t,t+" light")):h(t))}u.a.defineMode("rhai",(t,n)=>new r.a(t.indentUnit));let g=null;const p={delayMsec:500,timeout:null,cancel(){null!==this.timeout&&window.clearTimeout(this.timeout)},trigger(t){this.cancel(),this.timeout=window.setTimeout(()=>this._fire(t),this.delayMsec)},_fire(t){!function(t){g&&(g.clear(),g=null);try{r.C(t.getValue())}catch(n){console.log("Parse error:",n),"string"==typeof n.message&&n.line&&n.column&&(g=t.markText({line:n.line-1,ch:n.column-1},{line:n.line-1,ch:n.column},{className:"rhai-error",title:n.message}))}}(t)}},m=document.getElementById("runScriptButton");let b=null;async function y(t){if(b)return void console.log("Blocked run script request as another script is already running.");let n=t.getValue(),e=document.getElementById("result");e.value="",m.disabled=!0;try{await(b=function(t,n){return c?Promise.reject("Another script is running."):new Promise((e,r)=>{n(`Running script at ${(new Date).toISOString()}\n`),i.addEventListener("message",c=t=>{"runScript/output"===t.data.req?n(t.data.output):"runScript/end"===t.data.req&&(n("Finished at "+(new Date).toISOString()),i.removeEventListener("message",c),c=null,e())}),i.postMessage({req:"runScript",script:t})})}(n,(function(t){const n=e.scrollTop===e.scrollHeight-e.clientHeight;e.value+=t+"\n",n&&(e.scrollTop=e.scrollHeight-e.clientHeight)})))}finally{m.disabled=!1,b=null}}const v=document.getElementById("runScriptOnWorker");let w=!1;function k(t){w=!0,v.checked?y(t).then(()=>{w=!1}):(!function(t){let n=t.getValue(),e=document.getElementById("result");e.value=`Running script at ${(new Date).toISOString()}\n\n`,m.disabled=!0,setTimeout(()=>{try{let t=r.E(n,t=>{e.value+=`[PRINT] ${t}\n`},t=>{e.value+=`[DEBUG] ${t}\n`});e.value+=`\nScript returned: "${t}"`}catch(t){e.value+=`\nEXCEPTION: "${t}"`}e.value+="\nFinished at "+(new Date).toISOString(),e.scrollTop=e.scrollHeight-e.clientHeight,m.disabled=!1},10)}(t),w=!1)}function E(){const t=u()(document.getElementById("editorContainer"),{value:'fn run(a) {\n    let b = a + 1;\n    print("Hello world! a = " + a);\n}\nrun(10);\n',mode:"rhai",lineNumbers:!0,indentUnit:4,matchBrackets:!0,foldGutter:{rangeFinder:u.a.fold.brace},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],styleActiveLine:!0,highlightSelectionMatches:{minChars:3,showToken:!0,annotateScrollbar:!0},rulers:[{column:80,color:"#ccc"}],autoCloseBrackets:{pairs:"()[]{}''\"\"",closeBefore:")]}'\":;,",triples:"",explode:"()[]{}"},extraKeys:{Tab:t=>{t.somethingSelected()?t.indentSelection("add"):t.execCommand("insertSoftTab")},"Ctrl-Enter":t=>{k(t)},"Ctrl-/":"toggleComment"}});t.on("change",(t,n)=>{p.trigger(t)}),p.trigger(t),m.addEventListener("click",n=>{k(t)}),l.addEventListener("change",n=>{l.value&&(p.cancel(),t.setOption("readOnly",!0),a(l.value).then(n=>{t.setValue(n.default),t.setOption("readOnly",!1)}).catch(n=>{console.error("Error loading script",n),t.setOption("readOnly",!1)}))}),d.addEventListener("change",n=>{let e=d.value,r=e;if(!e)return;if("default"===e)return void t.setOption("theme","default");const o=e.indexOf("/");-1!==o&&(r=e.substring(0,o),e=e.substring(o+1)),f(`./${r}.css`).then(n=>{t.setOption("theme",e)}).catch(t=>{console.error("Error loading theme",t)})})}},26:function(t,n,e){"use strict";var r=e.w[t.i];t.exports=r;e(4);r.s()},27:function(t,n,e){var r={"./array.rhai":[29,66],"./assignment.rhai":[30,67],"./comments.rhai":[31,68],"./fibonacci.rhai":[32,69],"./for1.rhai":[33,70],"./for2.rhai":[34,71],"./function_decl1.rhai":[35,72],"./function_decl2.rhai":[36,73],"./function_decl3.rhai":[37,74],"./if1.rhai":[38,75],"./loop.rhai":[39,76],"./mat_mul.rhai":[40,77],"./op1.rhai":[41,78],"./op2.rhai":[42,79],"./op3.rhai":[43,80],"./primes.rhai":[44,81],"./speed_test.rhai":[45,82],"./string.rhai":[46,83],"./strings_map.rhai":[47,84],"./while.rhai":[48,85]};function o(t){if(!e.o(r,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[t],o=n[0];return e.e(n[1]).then((function(){return e(o)}))}o.keys=function(){return Object.keys(r)},o.id=27,t.exports=o},28:function(t,n,e){var r={"./3024-day.css":[49,3],"./3024-night.css":[51,4],"./abcdef.css":[53,5],"./ambiance-mobile.css":[55,6],"./ambiance.css":[57,7],"./ayu-dark.css":[59,8],"./ayu-mirage.css":[61,9],"./base16-dark.css":[63,10],"./base16-light.css":[65,11],"./bespin.css":[67,12],"./blackboard.css":[69,13],"./cobalt.css":[71,14],"./colorforth.css":[73,15],"./darcula.css":[75,16],"./dracula.css":[77,17],"./duotone-dark.css":[79,18],"./duotone-light.css":[81,19],"./eclipse.css":[83,20],"./elegant.css":[85,21],"./erlang-dark.css":[87,22],"./gruvbox-dark.css":[89,23],"./hopscotch.css":[91,24],"./icecoder.css":[93,25],"./idea.css":[95,26],"./isotope.css":[97,27],"./lesser-dark.css":[99,28],"./liquibyte.css":[101,29],"./lucario.css":[103,30],"./material-darker.css":[105,31],"./material-ocean.css":[107,32],"./material-palenight.css":[109,33],"./material.css":[111,34],"./mbo.css":[113,35],"./mdn-like.css":[115,36],"./midnight.css":[117,37],"./monokai.css":[119,38],"./moxer.css":[121,39],"./neat.css":[123,40],"./neo.css":[125,41],"./night.css":[127,42],"./nord.css":[129,43],"./oceanic-next.css":[131,44],"./panda-syntax.css":[133,45],"./paraiso-dark.css":[135,46],"./paraiso-light.css":[137,47],"./pastel-on-dark.css":[139,48],"./railscasts.css":[141,49],"./rubyblue.css":[143,50],"./seti.css":[145,51],"./shadowfox.css":[147,52],"./solarized.css":[149,53],"./ssms.css":[151,54],"./the-matrix.css":[153,55],"./tomorrow-night-bright.css":[155,56],"./tomorrow-night-eighties.css":[157,57],"./ttcn.css":[159,58],"./twilight.css":[161,59],"./vibrant-ink.css":[163,60],"./xq-dark.css":[165,61],"./xq-light.css":[167,62],"./yeti.css":[169,63],"./yonce.css":[171,64],"./zenburn.css":[173,65]};function o(t){if(!e.o(r,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[t],o=n[0];return e.e(n[1]).then((function(){return e(o)}))}o.keys=function(){return Object.keys(r)},o.id=28,t.exports=o},4:function(t,n,e){"use strict";(function(t,r){e.d(n,"D",(function(){return w})),e.d(n,"E",(function(){return x})),e.d(n,"C",(function(){return O})),e.d(n,"a",(function(){return T})),e.d(n,"y",(function(){return C})),e.d(n,"m",(function(){return I})),e.d(n,"q",(function(){return j})),e.d(n,"h",(function(){return B})),e.d(n,"o",(function(){return $})),e.d(n,"A",(function(){return D})),e.d(n,"w",(function(){return A})),e.d(n,"x",(function(){return q})),e.d(n,"v",(function(){return M})),e.d(n,"j",(function(){return N})),e.d(n,"r",(function(){return P})),e.d(n,"d",(function(){return F})),e.d(n,"n",(function(){return L})),e.d(n,"i",(function(){return U})),e.d(n,"l",(function(){return H})),e.d(n,"b",(function(){return R})),e.d(n,"c",(function(){return W})),e.d(n,"e",(function(){return z})),e.d(n,"k",(function(){return J})),e.d(n,"p",(function(){return V})),e.d(n,"s",(function(){return G})),e.d(n,"f",(function(){return K})),e.d(n,"g",(function(){return X})),e.d(n,"u",(function(){return Q})),e.d(n,"t",(function(){return Y})),e.d(n,"B",(function(){return Z})),e.d(n,"z",(function(){return tt}));var o=e(26);const i=new Array(32).fill(void 0);function c(t){return i[t]}i.push(void 0,null,!0,!1);let s=i.length;function u(t){const n=c(t);return function(t){t<36||(i[t]=s,s=t)}(t),n}let a=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let l=null;function f(){return null!==l&&l.buffer===o.j.buffer||(l=new Uint8Array(o.j.buffer)),l}function d(t,n){return a.decode(f().subarray(t,t+n))}function h(t){s===i.length&&i.push(i.length+1);const n=s;return s=i[n],i[n]=t,n}let g=0;let p=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const m="function"==typeof p.encodeInto?function(t,n){return p.encodeInto(t,n)}:function(t,n){const e=p.encode(t);return n.set(e),{read:t.length,written:e.length}};function b(t,n,e){if(void 0===e){const e=p.encode(t),r=n(e.length);return f().subarray(r,r+e.length).set(e),g=e.length,r}let r=t.length,o=n(r);const i=f();let c=0;for(;c<r;c++){const n=t.charCodeAt(c);if(n>127)break;i[o+c]=n}if(c!==r){0!==c&&(t=t.slice(c)),o=e(o,r,r=c+3*t.length);const n=f().subarray(o+c,o+r);c+=m(t,n).written}return g=c,o}let y=null;function v(){return null!==y&&y.buffer===o.j.buffer||(y=new Int32Array(o.j.buffer)),y}function w(t){o.h(h(t))}function k(t,n){if(!(t instanceof n))throw new Error("expected instance of "+n.name);return t.ptr}function E(t){return null==t}function x(t,n,e){try{var r=b(t,o.e,o.f),i=g;o.r(8,r,i,h(n),h(e));var c=v()[2],s=v()[3];return d(c,s)}finally{o.d(c,s)}}function O(t){try{var n=b(t,o.e,o.f),e=g;o.g(8,n,e);var r=v()[2],i=v()[3];return d(r,i)}finally{o.d(r,i)}}function S(t){return function(){try{return t.apply(this,arguments)}catch(t){o.c(h(t))}}}class T{static __wrap(t){const n=Object.create(T.prototype);return n.ptr=t,n}free(){const t=this.ptr;this.ptr=0,o.a(t)}constructor(t){var n=o.o(t);return T.__wrap(n)}startState(){var t=o.p(this.ptr);return _.__wrap(t)}copyState(t){k(t,_);var n=o.k(this.ptr,t.ptr);return _.__wrap(n)}token(t,n){k(n,_),o.q(8,this.ptr,h(t),n.ptr);var e=v()[2],r=v()[3];let i;return 0!==e&&(i=d(e,r).slice(),o.d(e,1*r)),i}indent(t,n){k(t,_);var e=b(n,o.e,o.f),r=g;return u(o.m(this.ptr,t.ptr,e,r))}get electricInput(){return u(o.l(this.ptr))}get lineComment(){return u(o.n(this.ptr))}}class _{static __wrap(t){const n=Object.create(_.prototype);return n.ptr=t,n}free(){const t=this.ptr;this.ptr=0,o.b(t)}}const C=function(t){u(t)},I=function(t){var n=c(t).next();return E(n)?16777215:n.codePointAt(0)},j=function(t){return c(t).sol()},B=function(t){return c(t).indentation()},$=function(t){var n=c(t).peek();return E(n)?16777215:n.codePointAt(0)},D=function(t,n){return h(d(t,n))},A=function(t){return h(t)},q=function(t){return h(c(t))},M=function(t,n){return h(JSON.parse(d(t,n)))},N=function(){return h(new Error)},P=function(t,n){var e=b(c(n).stack,o.e,o.f),r=g;v()[t/4+1]=r,v()[t/4+0]=e},F=function(t,n){try{console.error(d(t,n))}finally{o.d(t,n)}},L=function(t){return c(t).now()},U=function(t){console.log(c(t))},H=function(t,n){return h(new Function(d(t,n)))},R=S((function(t,n){return h(c(t).call(c(n)))})),W=S((function(t,n,e){return h(c(t).call(c(n),c(e)))})),z=S((function(t,n){return h(Reflect.get(c(t),c(n)))})),J=function(t,n,e,r){return h(new RegExp(d(t,n),d(e,r)))},V=S((function(){return h(self.self)})),G=S((function(){return h(window.window)})),K=S((function(){return h(globalThis.globalThis)})),X=S((function(){return h(r.global)})),Q=function(t){return void 0===c(t)},Y=function(t,n){var e=b(function t(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return""+n;if("string"==e)return`"${n}"`;if("symbol"==e){const t=n.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==e){const t=n.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(n)){const e=n.length;let r="[";e>0&&(r+=t(n[0]));for(let o=1;o<e;o++)r+=", "+t(n[o]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(n));let o;if(!(r.length>1))return toString.call(n);if(o=r[1],"Object"==o)try{return"Object("+JSON.stringify(n)+")"}catch(t){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:o}(c(n)),o.e,o.f),r=g;v()[t/4+1]=r,v()[t/4+0]=e},Z=function(t,n){throw new Error(d(t,n))},tt=function(t){throw u(t)}}).call(this,e(24)(t),e(25))},6:function(t,n,e){var r=e(7),o=[];t.exports=function(){var t=new Worker(e.p+"1a56144702b213a5654b.worker.js",{name:"[hash].worker.js"});return r(t,o),t}}}]);