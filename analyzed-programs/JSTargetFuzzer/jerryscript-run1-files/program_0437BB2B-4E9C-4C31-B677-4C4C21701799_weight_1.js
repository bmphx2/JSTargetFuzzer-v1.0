function f0() {
}
const v2 = new Set();
class C6 {
    static #c = Set;
    constructor(a8, a9, a10) {
        let v11;
        try { v11 = this.valueOf(-1000000000000.0, this, Set); } catch (e) {}
        v11.a -= a10;
        let v12;
        try { v12 = v11(); } catch (e) {}
        function F13(a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a15;
            this.a = v11;
        }
        new F13(1.4351128289370772e+307, v12);
        new F13(-971383.9331159573, -971383.9331159573);
        new F13(a10, -971383.9331159573);
    }
    #b;
}
const v20 = new C6(1.4351128289370772e+307, -1000000000000.0, -1000000000000.0);
const v21 = new C6(-1000000000000.0, 1.4351128289370772e+307, -1000000000000.0);
const v22 = new C6(1.4351128289370772e+307, 1.4351128289370772e+307, -1000000000000.0);
function f26() {
    return v21;
}
v2.toString = f26;
const v27 = new Set(v2);
const v28 = /P(?:a?)*/ysum;
const v29 = /(a.a\Sca{0,1}?ab|c+)/v;
const v30 = /Ku/divm;
v28.ignoreCase = v29;
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a33;
    this.g = a33;
    this.b = v20;
}
const v37 = new F31(v22, v20, 1073741825, v30);
new F31(v37, v27, 65535, v30);
new F31(f26, v28, 65535, v37);
