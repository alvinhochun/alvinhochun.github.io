(this.webpackJsonp=this.webpackJsonp||[]).push([[85],{67:function(n,s,e){"use strict";e.r(s),s.default='// This script tests string operations\n\nprint("hello");\nprint("this\\nis \\\\ nice");      // escape sequences\nprint("40 hex is \\x40");        // hex escape sequence\nprint("unicode fun: \\u2764");   // Unicode escape sequence\nprint("more fun: \\U0001F603");  // Unicode escape sequence\nprint("foo" + " " + "bar");     // string building using strings\nprint("foo" < "bar");           // string comparison\nprint("foo" >= "bar");          // string comparison\nprint("the answer is " + 42);   // string building using non-string types\n\nlet s = "\\u2764" hello, world! \\U0001F603"; // string variable\nprint("length=" + s.len);       // should be 17\n\ns[s.len-3] = \'?\';               // change the string\nprint("Question: " + s);        // should print \'Question: hello, world?\'\n'}}]);