(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{10:function(t,n,e){"use strict";(function(t,r){e.d(n,"D",(function(){return _})),e.d(n,"E",(function(){return x})),e.d(n,"C",(function(){return k})),e.d(n,"a",(function(){return O})),e.d(n,"y",(function(){return T})),e.d(n,"m",(function(){return R})),e.d(n,"A",(function(){return $})),e.d(n,"w",(function(){return D})),e.d(n,"q",(function(){return P})),e.d(n,"h",(function(){return j})),e.d(n,"o",(function(){return q})),e.d(n,"x",(function(){return M})),e.d(n,"v",(function(){return I})),e.d(n,"k",(function(){return W})),e.d(n,"r",(function(){return N})),e.d(n,"d",(function(){return A})),e.d(n,"n",(function(){return z})),e.d(n,"i",(function(){return L})),e.d(n,"l",(function(){return B})),e.d(n,"c",(function(){return F})),e.d(n,"b",(function(){return U})),e.d(n,"e",(function(){return V})),e.d(n,"j",(function(){return H})),e.d(n,"p",(function(){return J})),e.d(n,"s",(function(){return G})),e.d(n,"f",(function(){return X})),e.d(n,"g",(function(){return K})),e.d(n,"u",(function(){return Y})),e.d(n,"t",(function(){return Q})),e.d(n,"B",(function(){return Z})),e.d(n,"z",(function(){return tt}));var i=e(34);const o=new Array(32).fill(void 0);function s(t){return o[t]}o.push(void 0,null,!0,!1);let a=o.length;function c(t){const n=s(t);return function(t){t<36||(o[t]=a,a=t)}(t),n}let u=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});u.decode();let l=null;function d(){return null!==l&&l.buffer===i.j.buffer||(l=new Uint8Array(i.j.buffer)),l}function f(t,n){return u.decode(d().subarray(t,t+n))}function p(t){a===o.length&&o.push(o.length+1);const n=a;return a=o[n],o[n]=t,n}let h=0;let g=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const m="function"==typeof g.encodeInto?function(t,n){return g.encodeInto(t,n)}:function(t,n){const e=g.encode(t);return n.set(e),{read:t.length,written:e.length}};function b(t,n,e){if(void 0===e){const e=g.encode(t),r=n(e.length);return d().subarray(r,r+e.length).set(e),h=e.length,r}let r=t.length,i=n(r);const o=d();let s=0;for(;s<r;s++){const n=t.charCodeAt(s);if(n>127)break;o[i+s]=n}if(s!==r){0!==s&&(t=t.slice(s)),i=e(i,r,r=s+3*t.length);const n=d().subarray(i+s,i+r);s+=m(t,n).written}return h=s,i}let v=null;function y(){return null!==v&&v.buffer===i.j.buffer||(v=new Int32Array(i.j.buffer)),v}function _(t){i.h(p(t))}function w(t,n){if(!(t instanceof n))throw new Error("expected instance of "+n.name);return t.ptr}function S(t){return null==t}function x(t,n,e,r){try{var o=b(t,i.e,i.f),s=h;i.r(8,o,s,p(n),p(e),S(r)?0:p(r));var a=y()[2],c=y()[3];return f(a,c)}finally{i.d(a,c)}}function k(t){try{var n=b(t,i.e,i.f),e=h;i.g(8,n,e);var r=y()[2],o=y()[3];return f(r,o)}finally{i.d(r,o)}}function C(t){return function(){try{return t.apply(this,arguments)}catch(t){i.c(p(t))}}}class O{static __wrap(t){const n=Object.create(O.prototype);return n.ptr=t,n}free(){const t=this.ptr;this.ptr=0,i.a(t)}constructor(t){var n=i.o(t);return O.__wrap(n)}startState(){var t=i.p(this.ptr);return E.__wrap(t)}copyState(t){w(t,E);var n=i.k(this.ptr,t.ptr);return E.__wrap(n)}token(t,n){w(n,E),i.q(8,this.ptr,p(t),n.ptr);var e=y()[2],r=y()[3];let o;return 0!==e&&(o=f(e,r).slice(),i.d(e,1*r)),o}indent(t,n){w(t,E);var e=b(n,i.e,i.f),r=h;return c(i.m(this.ptr,t.ptr,e,r))}get electricInput(){return c(i.l(this.ptr))}get lineComment(){return c(i.n(this.ptr))}}class E{static __wrap(t){const n=Object.create(E.prototype);return n.ptr=t,n}free(){const t=this.ptr;this.ptr=0,i.b(t)}}const T=function(t){c(t)},R=function(t){var n=s(t).next();return S(n)?16777215:n.codePointAt(0)},$=function(t,n){return p(f(t,n))},D=function(t){return p(t)},P=function(t){return s(t).sol()},j=function(t){return s(t).indentation()},q=function(t){var n=s(t).peek();return S(n)?16777215:n.codePointAt(0)},M=function(t){return p(s(t))},I=function(t,n){return p(JSON.parse(f(t,n)))},W=function(){return p(new Error)},N=function(t,n){var e=b(s(n).stack,i.e,i.f),r=h;y()[t/4+1]=r,y()[t/4+0]=e},A=function(t,n){try{console.error(f(t,n))}finally{i.d(t,n)}},z=function(t){return s(t).now()},L=function(t){console.log(s(t))},B=function(t,n){return p(new Function(f(t,n)))},F=C((function(t,n){return p(s(t).call(s(n)))})),U=C((function(t,n,e){return p(s(t).call(s(n),s(e)))})),V=C((function(t,n){return p(Reflect.get(s(t),s(n)))})),H=function(t,n,e,r){return p(new RegExp(f(t,n),f(e,r)))},J=C((function(){return p(self.self)})),G=C((function(){return p(window.window)})),X=C((function(){return p(globalThis.globalThis)})),K=C((function(){return p(r.global)})),Y=function(t){return void 0===s(t)},Q=function(t,n){var e=b(function t(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return""+n;if("string"==e)return`"${n}"`;if("symbol"==e){const t=n.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==e){const t=n.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(n)){const e=n.length;let r="[";e>0&&(r+=t(n[0]));for(let i=1;i<e;i++)r+=", "+t(n[i]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(n));let i;if(!(r.length>1))return toString.call(n);if(i=r[1],"Object"==i)try{return"Object("+JSON.stringify(n)+")"}catch(t){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:i}(s(n)),i.e,i.f),r=h;y()[t/4+1]=r,y()[t/4+0]=e},Z=function(t,n){throw new Error(f(t,n))},tt=function(t){throw c(t)}}).call(this,e(33)(t),e(0))},12:function(t,n,e){var r=e(2),i=e(38);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},13:function(t,n,e){var r=e(2),i=e(40);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},189:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"playgroundTop"},[e("header",{staticClass:"header"},[e("b-field",{attrs:{grouped:"","group-multiline":""}},[e("b-field",[e("p",{staticClass:"control"},[e("b-button",{attrs:{type:"is-success","native-type":"button","icon-left":"play",disabled:t.runDisabled},on:{click:t.requestRun}},[t._v("Run")])],1),t._v(" "),t.isRunScriptOnWorker?e("p",{staticClass:"control"},[e("b-tooltip",{attrs:{position:"is-bottom",label:(t.isScriptRunning?"Running":"Idle")+(t.runningOps?" / Ops: "+t.runningOpsDisplay:""),always:t.isScriptRunning&&null!==t.runningOps}},[e("b-button",{attrs:{type:"is-danger","native-type":"button","icon-left":"stop",disabled:t.stopDisabled},on:{click:t.stopScript}},[t._v("Stop")])],1)],1):t._e()]),t._v(" "),e("b-field",{staticStyle:{"margin-bottom":"0.75rem"}},[e("p",{staticClass:"control"},[e("b-dropdown",{attrs:{"aria-role":"menu",disabled:null!==t.exampleScriptChangePromise||t.isScriptRunning}},[e("button",{staticClass:"button",attrs:{slot:"trigger",position:"is-bottom-left",role:"button",type:"button"},slot:"trigger"},[e("span",[t._v("Example Scripts")]),t._v(" "),e("b-icon",{attrs:{icon:"menu-down"}})],1),t._v(" "),t._l(t.exampleScriptList,(function(n){return e("b-dropdown-item",{key:n.value,attrs:{"aria-role":"menu-item",href:"#"},nativeOn:{click:function(e){return e.preventDefault(),t.loadExampleScript(n.value)}}},[t._v(t._s(n.text))])}))],2)],1),t._v(" "),e("p",{staticClass:"control"},[e("b-dropdown",{attrs:{"aria-role":"menu"}},[e("b-button",{attrs:{slot:"trigger","icon-left":"cog",role:"button","native-type":"button"},slot:"trigger"},[t._v("Config")]),t._v(" "),e("b-dropdown-item",{attrs:{"aria-role":"menu-item",focusable:!1,custom:""}},[e("b-field",{attrs:{label:"Theme"}},[e("b-select",{attrs:{disabled:null!==t.cmThemeChangePromise},model:{value:t.selectedCmTheme,callback:function(n){t.selectedCmTheme=n},expression:"selectedCmTheme"}},[e("option",{attrs:{value:"default"}},[t._v("Default")]),t._v(" "),t._l(t.cmThemeList,(function(n){return e("option",{key:n.value,domProps:{value:n.value}},[t._v(t._s(n.text))])}))],2)],1),t._v(" "),e("div",{staticClass:"field"},[e("b-switch",{attrs:{disabled:t.isScriptRunning},model:{value:t.isRunScriptOnWorker,callback:function(n){t.isRunScriptOnWorker=n},expression:"isRunScriptOnWorker"}},[t._v("\n                                    Run script using\n                                    "),e("b",[t._v("Web Worker")])])],1)],1)],1)],1),t._v(" "),e("p",{staticClass:"control"},[e("b-dropdown",{attrs:{"aria-role":"menu"}},[e("b-button",{attrs:{slot:"trigger","icon-left":"help-circle",role:"button","native-type":"button"},slot:"trigger"}),t._v(" "),e("b-dropdown-item",{attrs:{"aria-role":"menu-item",focusable:!1,custom:"",paddingless:""}},[e("div",{staticClass:"modal-card",staticStyle:{width:"300px"}},[e("section",{staticClass:"modal-card-body"},[e("div",{staticClass:"content"},[e("h1",[t._v("What is Rhai?")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/jonathandturner/rhai",target:"_blank"}},[t._v("Rhai")]),t._v(" is an embedded scripting language and evaluation engine for Rust.\n                                        ")]),t._v(" "),e("h1",[t._v("Hotkeys")]),t._v(" "),e("p",[t._v("\n                                            You can run the script by pressing\n                                            "),e("kbd",[t._v("Ctrl")]),t._v(" +\n                                            "),e("kbd",[t._v("Enter")]),t._v(" when focused in the editor.\n                                        ")])])]),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("span",[e("a",{attrs:{href:"https://github.com/alvinhochun/rhai-playground",target:"_blank"}},[t._v("rhai-playground")]),t._v("\n                                        version: "+t._s(t.VERSION)+"\n                                    ")])])])])],1)],1)])],1)],1),t._v(" "),e("editor",{ref:"editor",staticStyle:{overflow:"hidden"},on:{change:t.codeChange,requestRun:t.requestRun}}),t._v(" "),e("div",{staticClass:"outputPanel"},[e("textarea",{ref:"result",staticClass:"result",attrs:{readonly:"",autocomplete:"off"}})])],1)};r._withStripped=!0;var i=e(10),o=function(){var t=this.$createElement;return(this._self._c||t)("div")};o._withStripped=!0;var s=e(11),a=e.n(s);e(15),e(17),e(18),e(19),e(20),e(21),e(22),e(24),e(26),e(30);var c={methods:{change(t,n){this.$emit("change",t,n)},requestRun(){this.$emit("requestRun",this.$_cm)},getEditor(){return this.$_cm}},mounted(){this.$_cm=function(t){const n=a()(t.$el,{mode:"rhai",lineNumbers:!0,indentUnit:4,matchBrackets:!0,foldGutter:{rangeFinder:a.a.fold.brace},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],styleActiveLine:!0,highlightSelectionMatches:{minChars:3,showToken:!0,annotateScrollbar:!0},rulers:[{column:80,color:"#ccc"}],autoCloseBrackets:{pairs:"()[]{}''\"\"",closeBefore:")]}'\":;,",triples:"",explode:"()[]{}"},extraKeys:{Tab:t=>{t.somethingSelected()?t.indentSelection("add"):t.execCommand("insertSoftTab")},"Ctrl-Enter":n=>{t.requestRun()},"Ctrl-/":"toggleComment"}});return n.on("change",(n,e)=>{t.change(n,e)}),n}(this)}},u=e(14),l=Object(u.a)(c,o,[],!1,null,null,null);l.options.__file="js/components/editor.vue";var d=l.exports,f=e(31),p=e.n(f);let h=null;let g=null,m=null;function b(t,n,e){return null===h&&(h=new p.a,h.onerror=t=>{console.error("An error occured in the worker:",t)}),g?Promise.reject("Another script is running."):new Promise((r,i)=>{n(`Running script at ${(new Date).toISOString()}\n`),h.addEventListener("message",g=t=>{"runScript/output"===t.data.req?n(t.data.output):"runScript/end"===t.data.req?(n("Finished at "+(new Date).toISOString()),h.removeEventListener("message",g),g=null,m=null,r()):"runScript/updateOps"===t.data.req&&e(t.data.ops)}),m=i,h.postMessage({req:"runScript",script:t})})}function v(){m&&(null!=h&&(h.terminate(),h=null),m("Script execution stopped."),g=null,m=null)}i.D(a.a.Pass),a.a.defineMode("rhai",(t,n)=>new i.a(t.indentUnit));function y(){let t=null;let n=null;let e=!1;return{tryCompileDebounced:{delayMsec:500,timeout:null,cancel(){null!==this.timeout&&window.clearTimeout(this.timeout)},trigger(t){this.cancel(),this.timeout=window.setTimeout(()=>this._fire(t),this.delayMsec)},_fire(n){!function(n){t&&(t.clear(),t=null);try{i.C(n.getValue())}catch(e){console.log("Parse error:",e),"string"==typeof e.message&&e.line&&e.column&&(t=n.markText({line:e.line-1,ch:e.column-1},{line:e.line-1,ch:e.column},{className:"rhai-error",title:e.message}))}}(n)}},doRunScript:async function(t,r,o,s){e?console.log("Blocked run script request as another script is already running."):(e=!0,r?await async function(t,e,r){if(n)return void console.log("Blocked run script request as another script is already running.");let i=t.getValue();function o(t){const n=e.scrollTop>=e.scrollHeight-e.clientHeight-2;e.value+=t+"\n",n&&(e.scrollTop+=1e3)}e.value="";try{await(n=b(i,o,r))}catch(t){o(`\nEXCEPTION: "${t}"`)}finally{n=null}}(t,o,s):await function(t,n){let e=t.getValue();return n.value=`Running script at ${(new Date).toISOString()}\n\n`,new Promise((t,r)=>{setTimeout(()=>{try{let t=i.E(e,t=>{n.value+=`[PRINT] ${t}\n`},t=>{n.value+=`[DEBUG] ${t}\n`});n.value+=`\nScript returned: "${t}"`}catch(t){n.value+=`\nEXCEPTION: "${t}"`}n.value+="\nFinished at "+(new Date).toISOString(),n.scrollTop=n.scrollHeight-n.clientHeight,t()},10)})}(t,o),e=!1)}}}const _=e(35);let w=[];for(let t of _.keys()){const n=t;t.startsWith("./")&&(t=t.substr(2));const e=t;w.push({value:n,text:e})}Object.freeze(w);const S=e(36);let x=[];for(let t of S.keys()){function k(t,n){const e=n?`${t}/${n}`:t,r=n||t;x.push({value:e,text:r})}t.startsWith("./")&&t.endsWith(".css")&&(t=t.substring(2,t.length-4),"solarized"===t?(k(t,t+" dark"),k(t,t+" light")):k(t))}Object.freeze(x);var C={data:()=>({exampleScriptList:w,exampleScriptChangePromise:null,selectedCmTheme:"default",cmThemeList:x,cmThemeChangePromise:null,isRunScriptOnWorker:!0,isScriptRunning:!1,runningOps:null,stopDisabled:!0}),computed:{runDisabled(){return this.isScriptRunning||null!==this.exampleScriptChangePromise},runningOpsDisplay(){return null!==this.runningOps?this.runningOps.toLocaleString():"-"},VERSION:()=>"81be785"},methods:{codeChange(t,n){this.$_r.tryCompileDebounced.trigger(t)},async requestRun(){this.runDisabled||(this.isScriptRunning=!0,this.isRunScriptOnWorker&&(this.stopDisabled=!1),this.runningOps=null,await this.$_r.doRunScript(this.$refs.editor.getEditor(),this.isRunScriptOnWorker,this.$refs.result,t=>{this.runningOps=t}),this.stopDisabled=!0,this.isScriptRunning=!1)},getEditor(){return this.$refs.editor.getEditor()},stopScript(){v()},loadExampleScript(t){const n=this.getEditor();this.$_r.tryCompileDebounced.cancel(),n.setOption("readOnly",!0),this.exampleScriptChangePromise=_(t).then(t=>{n.setValue(t.default)}).catch(t=>{console.error("Error loading script",t)}).finally(()=>{n.setOption("readOnly",!1),this.exampleScriptChangePromise=null})}},watch:{selectedCmTheme(t,n){if(!t)return;const e=this.getEditor();if("default"===t)return void e.setOption("theme","default");let r=t;const i=t.indexOf("/");-1!==i&&(r=t.substring(0,i),t=t.substring(i+1)),this.cmThemeChangePromise=S(`./${r}.css`).then(n=>{e.setOption("theme",t)}).catch(t=>{console.error("Error loading theme",t)}).finally(()=>{this.cmThemeChangePromise=null})}},mounted(){const t=this.getEditor(),n=y();n.tryCompileDebounced.trigger(t),this.$_r=n,t.setValue('fn run(a) {\n    let b = a + 1;\n    print("Hello world! a = " + a);\n}\nrun(10);\n'),t.focus()},components:{Editor:d}},O=(e(37),e(39),Object(u.a)(C,r,[],!1,null,"c5ca79ba",null));O.options.__file="js/playground.vue";n.default=O.exports},31:function(t,n,e){var r=e(32),i=[];t.exports=function(){var t=new Worker(e.p+"8c096caa55118f1ddda8.worker.js",{name:"[hash].worker.js"});return r(t,i),t}},34:function(t,n,e){"use strict";var r=e.w[t.i];t.exports=r;e(10);r.s()},35:function(t,n,e){var r={"./array.rhai":[41,66],"./assignment.rhai":[42,67],"./comments.rhai":[43,68],"./fibonacci.rhai":[44,69],"./for1.rhai":[45,70],"./for2.rhai":[46,71],"./function_decl1.rhai":[47,72],"./function_decl2.rhai":[48,73],"./function_decl3.rhai":[49,74],"./if1.rhai":[50,75],"./loop.rhai":[51,76],"./mat_mul.rhai":[52,77],"./oop.rhai":[53,78],"./op1.rhai":[54,79],"./op2.rhai":[55,80],"./op3.rhai":[56,81],"./primes.rhai":[57,82],"./speed_test.rhai":[58,83],"./string.rhai":[59,84],"./strings_map.rhai":[60,85],"./while.rhai":[61,86]};function i(t){if(!e.o(r,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[t],i=n[0];return e.e(n[1]).then((function(){return e(i)}))}i.keys=function(){return Object.keys(r)},i.id=35,t.exports=i},36:function(t,n,e){var r={"./3024-day.css":[62,3],"./3024-night.css":[64,4],"./abcdef.css":[66,5],"./ambiance-mobile.css":[68,6],"./ambiance.css":[70,7],"./ayu-dark.css":[72,8],"./ayu-mirage.css":[74,9],"./base16-dark.css":[76,10],"./base16-light.css":[78,11],"./bespin.css":[80,12],"./blackboard.css":[82,13],"./cobalt.css":[84,14],"./colorforth.css":[86,15],"./darcula.css":[88,16],"./dracula.css":[90,17],"./duotone-dark.css":[92,18],"./duotone-light.css":[94,19],"./eclipse.css":[96,20],"./elegant.css":[98,21],"./erlang-dark.css":[100,22],"./gruvbox-dark.css":[102,23],"./hopscotch.css":[104,24],"./icecoder.css":[106,25],"./idea.css":[108,26],"./isotope.css":[110,27],"./lesser-dark.css":[112,28],"./liquibyte.css":[114,29],"./lucario.css":[116,30],"./material-darker.css":[118,31],"./material-ocean.css":[120,32],"./material-palenight.css":[122,33],"./material.css":[124,34],"./mbo.css":[126,35],"./mdn-like.css":[128,36],"./midnight.css":[130,37],"./monokai.css":[132,38],"./moxer.css":[134,39],"./neat.css":[136,40],"./neo.css":[138,41],"./night.css":[140,42],"./nord.css":[142,43],"./oceanic-next.css":[144,44],"./panda-syntax.css":[146,45],"./paraiso-dark.css":[148,46],"./paraiso-light.css":[150,47],"./pastel-on-dark.css":[152,48],"./railscasts.css":[154,49],"./rubyblue.css":[156,50],"./seti.css":[158,51],"./shadowfox.css":[160,52],"./solarized.css":[162,53],"./ssms.css":[164,54],"./the-matrix.css":[166,55],"./tomorrow-night-bright.css":[168,56],"./tomorrow-night-eighties.css":[170,57],"./ttcn.css":[172,58],"./twilight.css":[174,59],"./vibrant-ink.css":[176,60],"./xq-dark.css":[178,61],"./xq-light.css":[180,62],"./yeti.css":[182,63],"./yonce.css":[184,64],"./zenburn.css":[186,65]};function i(t){if(!e.o(r,t))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[t],i=n[0];return e.e(n[1]).then((function(){return e(i)}))}i.keys=function(){return Object.keys(r)},i.id=36,t.exports=i},37:function(t,n,e){"use strict";var r=e(12);e.n(r).a},38:function(t,n,e){(n=e(3)(!1)).push([t.i,"\n.playgroundTop[data-v-c5ca79ba] {\n    height: 100%;\n    max-height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 1fr 1fr;\n}\n@media screen and (min-width: 900px) {\n.playgroundTop[data-v-c5ca79ba] {\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: auto 1fr;\n}\n.header[data-v-c5ca79ba] {\n        grid-column-start: 1;\n        grid-column-end: 3;\n}\n}\n.header[data-v-c5ca79ba] {\n    padding: 0.75rem;\n}\n.outputPanel[data-v-c5ca79ba] {\n    display: flex;\n    flex-direction: column;\n}\n.result[data-v-c5ca79ba] {\n    box-sizing: border-box;\n    margin: 0;\n    resize: none;\n    font-family: monospace;\n    flex-grow: 1;\n}\n",""]),t.exports=n},39:function(t,n,e){"use strict";var r=e(13);e.n(r).a},40:function(t,n,e){(n=e(3)(!1)).push([t.i,"\n.CodeMirror {\n    border: 1px solid #ccc;\n    height: 100% !important;\n    box-sizing: border-box;\n    font-size: 0.95em;\n    line-height: initial;\n}\n.CodeMirror .rhai-error {\n    text-decoration: underline wavy red;\n}\n.CodeMirror .cm-matchhighlight {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.CodeMirror .CodeMirror-selection-highlight-scrollbar {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n",""]),t.exports=n}}]);