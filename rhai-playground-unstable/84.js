(this.webpackJsonp=this.webpackJsonp||[]).push([[84],{67:function(n,e,t){"use strict";t.r(e),e.default='// This script runs 1 million iterations\n// to test the speed of the scripting engine.\n\nlet now = timestamp();\nlet x = 1_000_000;\n\nprint("Ready... Go!");\n\nwhile x > 0 {\n    x -= 1;\n}\n\nprint("Finished. Run time = " + now.elapsed + " seconds.");\n'}}]);