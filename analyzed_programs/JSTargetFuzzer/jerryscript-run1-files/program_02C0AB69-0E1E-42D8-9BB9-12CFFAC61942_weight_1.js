function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9;
    this.h = 9;
    this.b = 9;
}
new F0();
new F0();
new F0();
new Uint8Array(2258);
new Int8Array(9);
new Uint8Array(10);
new BigInt64Array(256);
const v23 = new Uint32Array(227);
new Uint16Array(129);
function F27(a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a30;
}
new F27(256, 129);
new F27(v23, 227);
new F27(v23, 129);
function f34() {
}
new Uint8Array(227);
let v48 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v48);
v48 /= v48;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
