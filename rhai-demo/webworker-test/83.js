(this.webpackJsonp=this.webpackJsonp||[]).push([[83],{46:function(n,r,s){"use strict";s.r(r),r.default='// This script tests string operations\r\n\r\nprint("hello");\r\nprint("this\\nis \\\\ nice");      // escape sequences\r\nprint("40 hex is \\x40");        // hex escape sequence\r\nprint("unicode fun: \\u2764");   // Unicode escape sequence\r\nprint("more fun: \\U0001F603");  // Unicode escape sequence\r\nprint("foo" + " " + "bar");     // string building using strings\r\nprint("foo" < "bar");           // string comparison\r\nprint("foo" >= "bar");          // string comparison\r\nprint("the answer is " + 42);   // string building using non-string types\r\n\r\nlet s = "hello, world!";        // string variable\r\nprint("length=" + s.len);       // should be 13\r\n\r\ns[s.len-1] = \'?\';               // change the string\r\nprint("Question: " + s);        // should print \'Question: hello, world?\'\r\n'}}]);