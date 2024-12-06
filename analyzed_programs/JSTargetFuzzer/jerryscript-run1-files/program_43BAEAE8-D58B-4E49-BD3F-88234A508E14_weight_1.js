function F0() {
    if (!new.target) { throw 'must be called with new'; }
    let v1 = this;
    v1.a = -14;
    let v3 = 0;
    do {
        v1++;
        var c = F0;
        v3++;
    } while (v3 < 6)
}
const v8 = new F0();
const v9 = new F0();
const v10 = new F0();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a13;
    this.e = v9;
    this.c = v9;
}
new F11(v10, v9);
new F11(v10, v9);
const v17 = new F11(v8, v9);
const v29 = new BigInt64Array(256);
const v31 = v17 ^ 1.702482047949774e+308;
delete v17[v29];
v17.c;
~v31;
v17.c = 4096;
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
