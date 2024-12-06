function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 8;
    this.d = 8;
    this.c = 8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v5;
}
new F6(v4);
new F6(v3);
new F0(v3);
new BigInt64Array(256);
const v26 = new Uint32Array(227);
new Uint16Array(129);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a33;
}
new F30(256, 129);
new F30(v26, 227);
new F30(v26, 129);
function f37() {
}
new Uint8Array(227);
let v51 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v51);
v51 /= v51;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
