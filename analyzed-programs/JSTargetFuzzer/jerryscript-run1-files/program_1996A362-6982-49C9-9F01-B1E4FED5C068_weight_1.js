function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    new Date();
    Date[-2] = Date;
    this.g = f0;
}
const v8 = new F1();
const v9 = new F1();
const v10 = new F1();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v8;
    this.h = f0;
}
const v15 = new F11(v8, v8);
new F11(v9, v8);
const v17 = new F11(v10, v8);
[[[F1,v17,v15,f0],f0,v8],F1,f0,F1,F11];
new BigInt64Array(256);
const v32 = new Uint32Array(227);
let v33 = 1000;
const v35 = new Map();
v33 <<= v35.values();
new Uint16Array(129);
function F40(a42, a43) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a43;
}
new F40(256, 129);
new F40(v32, 227);
new F40(v32, 129);
function f47() {
}
new Uint8Array(227);
let v61 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v61);
v61 /= v61;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
