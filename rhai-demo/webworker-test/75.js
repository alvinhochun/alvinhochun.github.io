(this.webpackJsonp=this.webpackJsonp||[]).push([[75],{38:function(n,r,t){"use strict";t.r(r),r.default='let a = 42;\r\nlet b = 123;\r\nlet x = 999;\r\n\r\nif a > b {\r\n    print("Oops! a > b");\r\n} else if a < b {\r\n    print("a < b, x should be 0");\r\n\r\n    let x = 0;          // this \'x\' shadows the global \'x\'\r\n    print(x);           // should print 0\r\n} else {\r\n    print("Oops! a == b");\r\n}'}}]);