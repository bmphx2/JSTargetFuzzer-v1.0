function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1530300273;
    this.a = 1530300273;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new WeakSet();
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v3;
    this.a = a14;
    this.d = v5;
}
const v17 = new F11(v5, v4, v3, "-13");
const v18 = new F11(v17, v7, v17, "-13");
new F11(v18, v5, v3, "function");
v7[4] = F11;
const v20 = v4[v7];
try { v3.p(v20); } catch (e) {}
function f22(a23, a24) {
    const t22 = "-13";
    t22.__proto__ = a24;
    a23.a = a23;
    a24[1149192571] = a24;
    let v25;
    try { v25 = a23.codePointAt(); } catch (e) {}
    return v25;
}
f22(v7, v5);
