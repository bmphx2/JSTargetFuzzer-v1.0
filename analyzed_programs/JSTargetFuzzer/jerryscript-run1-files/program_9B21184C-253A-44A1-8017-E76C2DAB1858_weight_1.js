const v1 = new WeakSet();
function f2() {
    return v1;
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
    this.b = WeakSet;
}
const v7 = new F3(v1, WeakSet);
const v8 = new F3(f2, WeakSet);
new F3(v8, v7);
new BigInt64Array(256);
const v24 = new Uint32Array(227);
new Uint16Array(129);
function F28(a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    const t17 = 256;
    t17.f = a31;
}
new F28(256, 129);
new F28(v24, 227);
new F28(v24, 129);
function f35() {
}
new Uint8Array(227);
let v49 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v49);
v49 /= v49;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
