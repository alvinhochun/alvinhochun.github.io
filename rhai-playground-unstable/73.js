(this.webpackJsonp=this.webpackJsonp||[]).push([[73],{52:function(n,e,t){"use strict";t.r(e),e.default="// This script defines a function with two parameters\n\nlet a = 3;\n\nfn addme(a, b) {\n    a = 42;             // notice that 'a' is passed by value\n    a + b;              // notice that the last value is returned even if terminated by a semicolon\n}\n\nprint(\"addme(a, 4) should be 46:\");\n\nprint(addme(a, 4));\n\nprint(\"a should still be 3:\");\n\nprint(a);               // should print 3 - 'a' is never changed\n"}}]);