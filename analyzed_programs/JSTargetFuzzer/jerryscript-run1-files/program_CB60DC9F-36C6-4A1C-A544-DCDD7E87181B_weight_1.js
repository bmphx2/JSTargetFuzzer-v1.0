function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 257;
    this.b = 257;
}
new F0();
new F0();
new F0();
new Int32Array(4096, -268435456, 4096);
new Int16Array(3);
new Uint8ClampedArray(3181);
new Int8Array(256);
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
