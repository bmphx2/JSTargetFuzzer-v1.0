function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a6;
    this.f = -1706649416;
}
const v7 = new F3(0, -1706649416);
const v8 = new F3(-1706649416, 0);
const v9 = new F3(-9223372036854775807, v8);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    a12.a = v8;
}
const v15 = new F10(F10, F3, v9);
new F10(F3, v15, v8);
new F10(0, 0, v7);
const v18 = [];
function f19() {
    return v18;
}
try { v18.reduce(F10); } catch (e) {}
