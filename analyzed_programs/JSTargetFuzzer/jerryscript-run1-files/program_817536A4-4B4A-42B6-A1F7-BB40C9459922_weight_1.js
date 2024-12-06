function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -15;
    this.c = -15;
    this.e = -15;
}
new F0();
new F0();
new F0();
new Int8Array(128);
new Uint16Array(3);
new Int32Array(7);
new BigInt64Array(256);
const v23 = new Uint32Array(227);
new String(1000);
new Uint16Array(129);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a33;
}
new F30(256, 129);
new F30(v23, 227);
new F30(v23, 129);
function f37() {
}
new Uint8Array(227);
let v51 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v51);
v51 /= v51;
new WeakSet();
new Boolean(2);
([-15,-1281138153,536870889,4294967297,512,128,5,-9]).reverse();
