function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 37855;
    this.d = 37855;
    this.f = 37855;
}
new F0();
new F0();
new F0();
new Int32Array(55);
new Float64Array(7);
new Float32Array(4096);
new BigInt64Array(256);
const v26 = new Uint32Array(227);
new Uint16Array(129);
function F30(a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 129;
}
new F30(256, 129);
new F30(v26, 227);
new F30(v26, 256);
function f37() {
}
new Uint8Array(256);
const v51 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v51);
f37 /= v51;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
