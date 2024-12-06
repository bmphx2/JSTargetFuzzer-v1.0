function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 5;
    this.h = 5;
    this.d = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a11;
}
const v13 = new F9(v5, v4);
const v14 = new F9(v4, v5);
const v15 = new F9(v14, v3);
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a20;
}
new F16(16n, v13, v14);
new F16(4294967296n, v14, v13);
new F16(1445662893n, v15, v13);
new BigInt64Array(256);
let v33 = 58354n;
(v33 <<= 39655n) | 268435439n;
const v36 = new Uint32Array(227);
new Uint16Array(129);
function F40(a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a43;
}
new F40(256, 129);
new F40(v36, 227);
new F40(v36, 129);
function f47() {
}
new Uint8Array(227);
let v61 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v61);
v61 /= v61;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
