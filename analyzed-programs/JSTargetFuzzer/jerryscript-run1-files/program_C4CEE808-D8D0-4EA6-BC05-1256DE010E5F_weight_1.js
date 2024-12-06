const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.d = v0;
    this.h = v0;
    const o3 = {
        [v0]: F1,
        "b": this,
        "d": this,
    };
}
new F1();
new F1();
new F1();
new BigUint64Array(255);
new Float32Array(1);
new Float64Array(6);
new BigInt64Array(256);
const v28 = new Uint32Array(255);
new Uint16Array(129);
function F32(a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a35;
}
new F32(256, 129);
new F32(v28, 255);
new F32(v28, 129);
function f39() {
}
new Uint8Array(6);
let v53 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v53);
v53 /= v53;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
