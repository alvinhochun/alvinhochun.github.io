(this.webpackJsonp=this.webpackJsonp||[]).push([[69],{44:function(n,e,t){"use strict";t.r(e),e.default='// This script calculates the n-th Fibonacci number using a really dumb algorithm\n// to test the speed of the scripting engine.\n\nconst target = 30;\n\nfn fib(n) {\n    if n < 2 {\n         n\n    } else {\n        fib(n-1) + fib(n-2)\n    }\n}\n\nprint("Ready... Go!");\n\nlet now = timestamp();\n\nlet result = fib(target);\n\nprint("Finished. Run time = " + now.elapsed + " seconds.");\n\nprint("Fibonacci number #" + target + " = " + result);\n\nif result != 832_040 {\n    print("The answer is WRONG! Should be 832,040!");\n}'}}]);