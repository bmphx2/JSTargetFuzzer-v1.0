function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 11874;
    F0.g = 11874;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F9;
    this.c = a12;
}
new F9(2n, v3, v3);
new F9(9007199254740990n, v4, F0);
new F9(9007199254740990n, v3, 2n);
new Uint32Array(2009);
new Int32Array(57);
new Uint8ClampedArray(64);
new BigInt64Array(256);
const v34 = new Uint32Array(Uint8ClampedArray);
new Uint16Array(129);
function F38(a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a41;
}
new F38(256, 129);
new F38(v34, 227);
new F38(v34, 129);
function f45() {
}
new Uint8Array(227);
let v59 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v59);
v59 /= v59;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
