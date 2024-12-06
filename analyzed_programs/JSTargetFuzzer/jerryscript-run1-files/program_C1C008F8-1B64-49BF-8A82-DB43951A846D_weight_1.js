function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -536870912;
    this.g = 255;
}
const v14 = new F9(255, v5, -536870912);
new F9(v14, v5, 255);
new F9(268435441, v3, 268435441);
[f0,255,[[268435441],v4],f0,v4];
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F21(F21, F21);
function f26() {
    return v25;
}
function F27(a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    a31 - a31;
}
new F27(f26, v25, 4096n);
