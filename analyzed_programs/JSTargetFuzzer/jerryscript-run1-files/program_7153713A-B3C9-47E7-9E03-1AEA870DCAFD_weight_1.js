function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -55013;
    this.f = -55013;
    this.a = -55013;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
    this.f = v4;
    this.b = a9;
}
new F6(v4, v5);
new F6(v3, v4);
const v12 = new F6(v4, v4);
new Uint16Array(89);
new Uint16Array(251);
new Int8Array(11);
v4.f;
11 | F0;
const v24 = 11 <= F0;
const v25 = v12[-1];
try { v25(v24); } catch (e) {}
const v28 = Array(Array);
const v29 = v28[268435456];
switch (v29) {
    case v29:
        break;
    case v28:
        break;
}
