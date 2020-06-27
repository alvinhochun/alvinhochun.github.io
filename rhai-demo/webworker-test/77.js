(this.webpackJsonp=this.webpackJsonp||[]).push([[77],{40:function(n,t,r){"use strict";r.r(t),t.default='const SIZE = 50;\r\n\r\nfn new_mat(x, y) {\r\n\tlet row = [];\r\n\trow.pad(y, 0.0);\r\n\t\r\n\tlet matrix = [];\r\n\tmatrix.pad(x, row);\r\n\t\r\n\tmatrix\r\n}\r\n\r\nfn mat_gen(n) {\r\n    let m = new_mat(n, n);\r\n    let tmp = 1.0 / n.to_float() / n.to_float();\r\n\r\n    for i in range(0, n) {\r\n        for j in range(0, n) {\r\n            m[i][j] = tmp * (i.to_float() - j.to_float()) * (i.to_float() + j.to_float());\r\n        }\r\n    }\r\n\t\r\n    m\r\n}\r\n\r\nfn mat_mul(a, b) {\r\n    let m = a.len;\r\n    let n = a[0].len;\r\n    let p = b[0].len;\r\n\r\n    let b2 = new_mat(n, p);\r\n\t\r\n    for i in range(0, n) {\r\n        for j in range(0, p) {\r\n            b2[j][i] = b[i][j];\r\n        }\r\n    }\r\n\r\n    let c = new_mat(m, p);\r\n\r\n\tfor i in range(0, c.len) {\r\n\t\tlet ci = c[i];\r\n\t\tfor j in range(0, ci.len) {\r\n\t\t\tlet b2j = b2[j];\r\n\t\t\tci[j] = 0.0;\r\n\t\t\t\r\n\t\t\tfor z in range(0, a[i].len) {\r\n\t\t\t\tlet x = a[i][z];\r\n\t\t\t\tlet y = b2j[z];\r\n\t\t\t\tci[j] += x * y;\r\n\t\t\t}\r\n        }\r\n\t\tc[i] = ci;\r\n    }\r\n\r\n    c\r\n}\r\n\r\nlet now = timestamp();\r\n\r\nlet a = mat_gen(SIZE);\r\nlet b = mat_gen(SIZE);\r\nlet c = mat_mul(a, b);\r\n\r\n/*\r\nfor i in range(0, SIZE) {\r\n\tprint(c[i]);\r\n}\r\n*/\r\n\r\nprint("Finished. Run time = " + now.elapsed + " seconds.");\r\n'}}]);