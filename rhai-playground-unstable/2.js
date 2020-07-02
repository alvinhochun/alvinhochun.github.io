(this.webpackJsonp=this.webpackJsonp||[]).push([[2],[,,,,,,function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playgroundTop"},[n("header",{staticClass:"header"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedExampleScript,expression:"selectedExampleScript"}],attrs:{disabled:null!==t.exampleScriptChangePromise},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedExampleScript=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("(example scripts...)")]),t._v(" "),t._l(t.exampleScriptList,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}))],2),t._v(" "),n("label",{staticStyle:{display:"inline-block"}},[t._v("\n            Theme:\n            "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedCmTheme,expression:"selectedCmTheme"}],attrs:{disabled:null!==t.cmThemeChangePromise},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedCmTheme=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"default"}},[t._v("Default")]),t._v(" "),t._l(t.cmThemeList,(function(e){return n("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}))],2)]),t._v(" "),n("label",{staticStyle:{display:"inline-block"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isRunScriptOnWorker,expression:"isRunScriptOnWorker"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isRunScriptOnWorker)?t._i(t.isRunScriptOnWorker,null)>-1:t.isRunScriptOnWorker},on:{change:function(e){var n=t.isRunScriptOnWorker,r=e.target,i=!!r.checked;if(Array.isArray(n)){var s=t._i(n,null);r.checked?s<0&&(t.isRunScriptOnWorker=n.concat([null])):s>-1&&(t.isRunScriptOnWorker=n.slice(0,s).concat(n.slice(s+1)))}else t.isRunScriptOnWorker=i}}}),t._v("\n            Run script asynchronously on Web Worker\n        ")])]),t._v(" "),n("header",{staticClass:"runHeader"},[n("button",{attrs:{type:"button",disabled:t.runDisabled},on:{click:t.requestRun}},[t._v("\n            Run script ("),n("kbd",[t._v("Ctrl")]),t._v("+"),n("kbd",[t._v("Enter")]),t._v(")\n        ")]),t._v(" "),n("button",{attrs:{type:"button",disabled:t.stopDisabled},on:{click:t.stopScript}},[t._v("Stop")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.isScriptRunning,expression:"!isScriptRunning"}]},[t._v("Idle")]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isScriptRunning,expression:"isScriptRunning"}]},[t._v("Running...")]),t._v("\n        /\n        "),n("label",[t._v("\n            Ops:\n            "),n("input",{staticStyle:{width:"100px"},attrs:{type:"text",readonly:""},domProps:{value:t.runningOpsDisplay}})]),t._v(" "),n("span",{staticStyle:{"font-size":"0.8em"}},[n("a",{attrs:{href:"https://github.com/alvinhochun/rhai-playground",target:"_blank"}},[t._v("rhai-playground")]),t._v("\n            "+t._s(t.VERSION)+"\n        ")])]),t._v(" "),n("editor",{ref:"editor",staticStyle:{overflow:"hidden"},on:{change:t.codeChange,requestRun:t.requestRun}}),t._v(" "),n("div",[n("textarea",{ref:"result",staticClass:"result",attrs:{readonly:"",autocomplete:"off"}})])],1)};r._withStripped=!0;var i=n(9),s=function(){var t=this.$createElement;return(this._self._c||t)("div")};s._withStripped=!0;var o=n(10),c=n.n(o);n(14),n(16),n(17),n(18),n(19),n(20),n(21),n(23),n(25),n(29);var a={methods:{change(t,e){this.$emit("change",t,e)},requestRun(){this.$emit("requestRun",this.$_cm)},getEditor(){return this.$_cm}},mounted(){this.$_cm=function(t){const e=c()(t.$el,{mode:"rhai",lineNumbers:!0,indentUnit:4,matchBrackets:!0,foldGutter:{rangeFinder:c.a.fold.brace},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],styleActiveLine:!0,highlightSelectionMatches:{minChars:3,showToken:!0,annotateScrollbar:!0},rulers:[{column:80,color:"#ccc"}],autoCloseBrackets:{pairs:"()[]{}''\"\"",closeBefore:")]}'\":;,",triples:"",explode:"()[]{}"},extraKeys:{Tab:t=>{t.somethingSelected()?t.indentSelection("add"):t.execCommand("insertSoftTab")},"Ctrl-Enter":e=>{t.requestRun()},"Ctrl-/":"toggleComment"}});return e.on("change",(e,n)=>{t.change(e,n)}),e}(this)}},u=n(13),l=Object(u.a)(a,s,[],!1,null,null,null);l.options.__file="js/components/editor.vue";var d=l.exports,p=n(30),f=n.n(p);let h=null;let m=null,g=null;function v(t,e,n){return null===h&&(h=new f.a,h.onerror=t=>{console.error("An error occured in the worker:",t)}),m?Promise.reject("Another script is running."):new Promise((r,i)=>{e(`Running script at ${(new Date).toISOString()}\n`),h.addEventListener("message",m=t=>{"runScript/output"===t.data.req?e(t.data.output):"runScript/end"===t.data.req?(e("Finished at "+(new Date).toISOString()),h.removeEventListener("message",m),m=null,g=null,r()):"runScript/updateOps"===t.data.req&&n(t.data.ops)}),g=i,h.postMessage({req:"runScript",script:t})})}function b(){g&&(null!=h&&(h.terminate(),h=null),g("Script execution stopped."),m=null,g=null)}i.D(c.a.Pass),c.a.defineMode("rhai",(t,e)=>new i.a(t.indentUnit));function y(){let t=null;let e=null;let n=!1;return{tryCompileDebounced:{delayMsec:500,timeout:null,cancel(){null!==this.timeout&&window.clearTimeout(this.timeout)},trigger(t){this.cancel(),this.timeout=window.setTimeout(()=>this._fire(t),this.delayMsec)},_fire(e){!function(e){t&&(t.clear(),t=null);try{i.C(e.getValue())}catch(n){console.log("Parse error:",n),"string"==typeof n.message&&n.line&&n.column&&(t=e.markText({line:n.line-1,ch:n.column-1},{line:n.line-1,ch:n.column},{className:"rhai-error",title:n.message}))}}(e)}},doRunScript:async function(t,r,s,o){n?console.log("Blocked run script request as another script is already running."):(n=!0,r?await async function(t,n,r){if(e)return void console.log("Blocked run script request as another script is already running.");let i=t.getValue();function s(t){const e=n.scrollTop>=n.scrollHeight-n.clientHeight-2;n.value+=t+"\n",e&&(n.scrollTop+=1e3)}n.value="";try{await(e=v(i,s,r))}catch(t){s(`\nEXCEPTION: "${t}"`)}finally{e=null}}(t,s,o):await function(t,e){let n=t.getValue();return e.value=`Running script at ${(new Date).toISOString()}\n\n`,new Promise((t,r)=>{setTimeout(()=>{try{let t=i.E(n,t=>{e.value+=`[PRINT] ${t}\n`},t=>{e.value+=`[DEBUG] ${t}\n`});e.value+=`\nScript returned: "${t}"`}catch(t){e.value+=`\nEXCEPTION: "${t}"`}e.value+="\nFinished at "+(new Date).toISOString(),e.scrollTop=e.scrollHeight-e.clientHeight,t()},10)})}(t,s),n=!1)}}}const _=n(34);let w=[];for(let t of _.keys()){const e=t;t.startsWith("./")&&(t=t.substr(2));const n=t;w.push({value:e,text:n})}Object.freeze(w);const S=n(35);let x=[];for(let t of S.keys()){function k(t,e){const n=e?`${t}/${e}`:t,r=e||t;x.push({value:n,text:r})}t.startsWith("./")&&t.endsWith(".css")&&(t=t.substring(2,t.length-4),"solarized"===t?(k(t,t+" dark"),k(t,t+" light")):k(t))}Object.freeze(x);var O={data:()=>({selectedExampleScript:"",exampleScriptList:w,exampleScriptChangePromise:null,selectedCmTheme:"default",cmThemeList:x,cmThemeChangePromise:null,isRunScriptOnWorker:!0,isScriptRunning:!1,runningOps:null,stopDisabled:!0}),computed:{runDisabled(){return this.isScriptRunning||null!==this.exampleScriptChangePromise},runningOpsDisplay(){return null!==this.runningOps?this.runningOps.toLocaleString():"-"},VERSION:()=>"df94258"},methods:{codeChange(t,e){this.$_r.tryCompileDebounced.trigger(t)},async requestRun(){this.runDisabled||(this.isScriptRunning=!0,this.isRunScriptOnWorker&&(this.stopDisabled=!1),this.runningOps=null,await this.$_r.doRunScript(this.$refs.editor.getEditor(),this.isRunScriptOnWorker,this.$refs.result,t=>{this.runningOps=t}),this.stopDisabled=!0,this.isScriptRunning=!1)},getEditor(){return this.$refs.editor.getEditor()},stopScript(){b()}},watch:{selectedExampleScript(t,e){if(!t)return;const n=this.getEditor();this.$_r.tryCompileDebounced.cancel(),n.setOption("readOnly",!0),this.exampleScriptChangePromise=_(this.selectedExampleScript).then(t=>{n.setValue(t.default)}).catch(t=>{console.error("Error loading script",t)}).finally(()=>{n.setOption("readOnly",!1),this.exampleScriptChangePromise=null})},selectedCmTheme(t,e){if(!t)return;const n=this.getEditor();if("default"===t)return void n.setOption("theme","default");let r=t;const i=t.indexOf("/");-1!==i&&(r=t.substring(0,i),t=t.substring(i+1)),this.cmThemeChangePromise=S(`./${r}.css`).then(e=>{n.setOption("theme",t)}).catch(t=>{console.error("Error loading theme",t)}).finally(()=>{this.cmThemeChangePromise=null})}},mounted(){const t=this.getEditor(),e=y();e.tryCompileDebounced.trigger(t),this.$_r=e,t.setValue('fn run(a) {\n    let b = a + 1;\n    print("Hello world! a = " + a);\n}\nrun(10);\n'),t.focus()},components:{Editor:d}},C=(n(36),n(38),Object(u.a)(O,r,[],!1,null,"c5ca79ba",null));C.options.__file="js/playground.vue";e.default=C.exports},,,function(t,e,n){"use strict";(function(t,r){n.d(e,"D",(function(){return _})),n.d(e,"E",(function(){return x})),n.d(e,"C",(function(){return k})),n.d(e,"a",(function(){return C})),n.d(e,"y",(function(){return R})),n.d(e,"m",(function(){return T})),n.d(e,"w",(function(){return $})),n.d(e,"A",(function(){return D})),n.d(e,"q",(function(){return P})),n.d(e,"h",(function(){return j})),n.d(e,"o",(function(){return q})),n.d(e,"x",(function(){return A})),n.d(e,"v",(function(){return N})),n.d(e,"k",(function(){return W})),n.d(e,"r",(function(){return M})),n.d(e,"d",(function(){return I})),n.d(e,"n",(function(){return z})),n.d(e,"i",(function(){return L})),n.d(e,"l",(function(){return B})),n.d(e,"c",(function(){return F})),n.d(e,"b",(function(){return U})),n.d(e,"e",(function(){return H})),n.d(e,"j",(function(){return V})),n.d(e,"p",(function(){return J})),n.d(e,"s",(function(){return G})),n.d(e,"f",(function(){return X})),n.d(e,"g",(function(){return K})),n.d(e,"u",(function(){return Q})),n.d(e,"t",(function(){return Y})),n.d(e,"B",(function(){return Z})),n.d(e,"z",(function(){return tt}));var i=n(33);const s=new Array(32).fill(void 0);function o(t){return s[t]}s.push(void 0,null,!0,!1);let c=s.length;function a(t){const e=o(t);return function(t){t<36||(s[t]=c,c=t)}(t),e}function u(t){c===s.length&&s.push(s.length+1);const e=c;return c=s[e],s[e]=t,e}let l=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();let d=null;function p(){return null!==d&&d.buffer===i.j.buffer||(d=new Uint8Array(i.j.buffer)),d}function f(t,e){return l.decode(p().subarray(t,t+e))}let h=0;let m=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const g="function"==typeof m.encodeInto?function(t,e){return m.encodeInto(t,e)}:function(t,e){const n=m.encode(t);return e.set(n),{read:t.length,written:n.length}};function v(t,e,n){if(void 0===n){const n=m.encode(t),r=e(n.length);return p().subarray(r,r+n.length).set(n),h=n.length,r}let r=t.length,i=e(r);const s=p();let o=0;for(;o<r;o++){const e=t.charCodeAt(o);if(e>127)break;s[i+o]=e}if(o!==r){0!==o&&(t=t.slice(o)),i=n(i,r,r=o+3*t.length);const e=p().subarray(i+o,i+r);o+=g(t,e).written}return h=o,i}let b=null;function y(){return null!==b&&b.buffer===i.j.buffer||(b=new Int32Array(i.j.buffer)),b}function _(t){i.h(u(t))}function w(t,e){if(!(t instanceof e))throw new Error("expected instance of "+e.name);return t.ptr}function S(t){return null==t}function x(t,e,n,r){try{var s=v(t,i.e,i.f),o=h;i.r(8,s,o,u(e),u(n),S(r)?0:u(r));var c=y()[2],a=y()[3];return f(c,a)}finally{i.d(c,a)}}function k(t){try{var e=v(t,i.e,i.f),n=h;i.g(8,e,n);var r=y()[2],s=y()[3];return f(r,s)}finally{i.d(r,s)}}function O(t){return function(){try{return t.apply(this,arguments)}catch(t){i.c(u(t))}}}class C{static __wrap(t){const e=Object.create(C.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,i.a(t)}constructor(t){var e=i.o(t);return C.__wrap(e)}startState(){var t=i.p(this.ptr);return E.__wrap(t)}copyState(t){w(t,E);var e=i.k(this.ptr,t.ptr);return E.__wrap(e)}token(t,e){w(e,E),i.q(8,this.ptr,u(t),e.ptr);var n=y()[2],r=y()[3];let s;return 0!==n&&(s=f(n,r).slice(),i.d(n,1*r)),s}indent(t,e){w(t,E);var n=v(e,i.e,i.f),r=h;return a(i.m(this.ptr,t.ptr,n,r))}get electricInput(){return a(i.l(this.ptr))}get lineComment(){return a(i.n(this.ptr))}}class E{static __wrap(t){const e=Object.create(E.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,i.b(t)}}const R=function(t){a(t)},T=function(t){var e=o(t).next();return S(e)?16777215:e.codePointAt(0)},$=function(t){return u(t)},D=function(t,e){return u(f(t,e))},P=function(t){return o(t).sol()},j=function(t){return o(t).indentation()},q=function(t){var e=o(t).peek();return S(e)?16777215:e.codePointAt(0)},A=function(t){return u(o(t))},N=function(t,e){return u(JSON.parse(f(t,e)))},W=function(){return u(new Error)},M=function(t,e){var n=v(o(e).stack,i.e,i.f),r=h;y()[t/4+1]=r,y()[t/4+0]=n},I=function(t,e){try{console.error(f(t,e))}finally{i.d(t,e)}},z=function(t){return o(t).now()},L=function(t){console.log(o(t))},B=function(t,e){return u(new Function(f(t,e)))},F=O((function(t,e){return u(o(t).call(o(e)))})),U=O((function(t,e,n){return u(o(t).call(o(e),o(n)))})),H=O((function(t,e){return u(Reflect.get(o(t),o(e)))})),V=function(t,e,n,r){return u(new RegExp(f(t,e),f(n,r)))},J=O((function(){return u(self.self)})),G=O((function(){return u(window.window)})),X=O((function(){return u(globalThis.globalThis)})),K=O((function(){return u(r.global)})),Q=function(t){return void 0===o(t)},Y=function(t,e){var n=v(function t(e){const n=typeof e;if("number"==n||"boolean"==n||null==e)return""+e;if("string"==n)return`"${e}"`;if("symbol"==n){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==n){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const n=e.length;let r="[";n>0&&(r+=t(e[0]));for(let i=1;i<n;i++)r+=", "+t(e[i]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(e));let i;if(!(r.length>1))return toString.call(e);if(i=r[1],"Object"==i)try{return"Object("+JSON.stringify(e)+")"}catch(t){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:i}(o(e)),i.e,i.f),r=h;y()[t/4+1]=r,y()[t/4+0]=n},Z=function(t,e){throw new Error(f(t,e))},tt=function(t){throw a(t)}}).call(this,n(32)(t),n(0))},,function(t,e,n){var r=n(7),i=n(37);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);t.exports=i.locals||{}},function(t,e,n){var r=n(7),i=n(39);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var s={insert:"head",singleton:!1};r(i,s);t.exports=i.locals||{}},,,,,,,,,,,,,,,,,,function(t,e,n){var r=n(31),i=[];t.exports=function(){var t=new Worker(n.p+"7c676fbf2747cd78a723.worker.js",{name:"[hash].worker.js"});return r(t,i),t}},,,function(t,e,n){"use strict";var r=n.w[t.i];t.exports=r;n(9);r.s()},function(t,e,n){var r={"./array.rhai":[40,66],"./assignment.rhai":[41,67],"./comments.rhai":[42,68],"./fibonacci.rhai":[43,69],"./for1.rhai":[44,70],"./for2.rhai":[45,71],"./function_decl1.rhai":[46,72],"./function_decl2.rhai":[47,73],"./function_decl3.rhai":[48,74],"./if1.rhai":[49,75],"./loop.rhai":[50,76],"./mat_mul.rhai":[51,77],"./oop.rhai":[52,78],"./op1.rhai":[53,79],"./op2.rhai":[54,80],"./op3.rhai":[55,81],"./primes.rhai":[56,82],"./speed_test.rhai":[57,83],"./string.rhai":[58,84],"./strings_map.rhai":[59,85],"./while.rhai":[60,86]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=34,t.exports=i},function(t,e,n){var r={"./3024-day.css":[61,3],"./3024-night.css":[63,4],"./abcdef.css":[65,5],"./ambiance-mobile.css":[67,6],"./ambiance.css":[69,7],"./ayu-dark.css":[71,8],"./ayu-mirage.css":[73,9],"./base16-dark.css":[75,10],"./base16-light.css":[77,11],"./bespin.css":[79,12],"./blackboard.css":[81,13],"./cobalt.css":[83,14],"./colorforth.css":[85,15],"./darcula.css":[87,16],"./dracula.css":[89,17],"./duotone-dark.css":[91,18],"./duotone-light.css":[93,19],"./eclipse.css":[95,20],"./elegant.css":[97,21],"./erlang-dark.css":[99,22],"./gruvbox-dark.css":[101,23],"./hopscotch.css":[103,24],"./icecoder.css":[105,25],"./idea.css":[107,26],"./isotope.css":[109,27],"./lesser-dark.css":[111,28],"./liquibyte.css":[113,29],"./lucario.css":[115,30],"./material-darker.css":[117,31],"./material-ocean.css":[119,32],"./material-palenight.css":[121,33],"./material.css":[123,34],"./mbo.css":[125,35],"./mdn-like.css":[127,36],"./midnight.css":[129,37],"./monokai.css":[131,38],"./moxer.css":[133,39],"./neat.css":[135,40],"./neo.css":[137,41],"./night.css":[139,42],"./nord.css":[141,43],"./oceanic-next.css":[143,44],"./panda-syntax.css":[145,45],"./paraiso-dark.css":[147,46],"./paraiso-light.css":[149,47],"./pastel-on-dark.css":[151,48],"./railscasts.css":[153,49],"./rubyblue.css":[155,50],"./seti.css":[157,51],"./shadowfox.css":[159,52],"./solarized.css":[161,53],"./ssms.css":[163,54],"./the-matrix.css":[165,55],"./tomorrow-night-bright.css":[167,56],"./tomorrow-night-eighties.css":[169,57],"./ttcn.css":[171,58],"./twilight.css":[173,59],"./vibrant-ink.css":[175,60],"./xq-dark.css":[177,61],"./xq-light.css":[179,62],"./yeti.css":[181,63],"./yonce.css":[183,64],"./zenburn.css":[185,65]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=35,t.exports=i},function(t,e,n){"use strict";var r=n(11);n.n(r).a},function(t,e,n){(e=n(8)(!1)).push([t.i,"\n.playgroundTop[data-v-c5ca79ba] {\n    height: 100%;\n    max-height: 100%;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto 1fr 1fr;\n}\n@media screen and (min-width: 900px) {\n.playgroundTop[data-v-c5ca79ba] {\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: auto auto 1fr;\n}\n.header[data-v-c5ca79ba] {\n        grid-column-start: 1;\n        grid-column-end: 3;\n}\n.runHeader[data-v-c5ca79ba] {\n        grid-column-start: 1;\n        grid-column-end: 3;\n}\n}\n.result[data-v-c5ca79ba] {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    margin: 0;\n    resize: none;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";var r=n(12);n.n(r).a},function(t,e,n){(e=n(8)(!1)).push([t.i,"\n.CodeMirror {\n    border: 1px solid #ccc;\n    height: 100% !important;\n    box-sizing: border-box;\n    font-size: 11pt;\n}\n.CodeMirror .rhai-error {\n    text-decoration: underline wavy red;\n}\n.CodeMirror .cm-matchhighlight {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.CodeMirror .CodeMirror-selection-highlight-scrollbar {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n",""]),t.exports=e}]]);