const v0 = /\P{scx=Greek}/ym;
const v1 = /2xyz{1,32}?/vsi;
const v2 = /iAfoo(?<!bar)baz/vys;
const v3 = [v1,v2,v1,v0];
[v3,v2,v0,v3];
[v3,v2,v2,v2,v1];
const v7 = new Map();
function f8() {
    return v7;
}
class C12 extends Map {
    [v0];
}
new C12();
new C12();
const v15 = new C12();
v15.__proto__ = C12;
