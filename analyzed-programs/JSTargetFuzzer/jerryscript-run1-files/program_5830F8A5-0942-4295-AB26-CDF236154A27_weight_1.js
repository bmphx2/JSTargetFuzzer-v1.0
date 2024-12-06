function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9007199254740990;
    this.a = 9007199254740990;
    this.e = 9007199254740990;
}
new F0();
new F0();
new F0();
new Date();
new Uint8Array(256);
new Int32Array(3088);
new Uint16Array(17);
new BigInt64Array(256);
const v28 = new Uint32Array(256);
new Uint16Array(129);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a35;
}
new F32(256, 129);
new F32(v28, 129);
new F32(v28, 129);
function f39() {
}
new Uint8Array(227);
let v53 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v53);
v53 /= v53;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
