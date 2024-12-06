function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v3;
    this.h = f0;
}
const v10 = new F6(v3, v3);
new F6(v4, v3);
const v12 = new F6(v5, v3);
[[[F1,v12,v10,f0],f0,v3],F1,f0,F1,F6];
new BigInt64Array(256);
const v27 = new Uint32Array(227);
let v28 = 1000;
const v30 = new Map();
v28 <<= v30.values();
new Uint16Array(129);
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a38;
}
new F35(256, 129);
new F35(v27, 227);
new F35(v27, 129);
function f42() {
}
new Uint8Array(227);
let v56 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v56);
v56 /= v56;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
