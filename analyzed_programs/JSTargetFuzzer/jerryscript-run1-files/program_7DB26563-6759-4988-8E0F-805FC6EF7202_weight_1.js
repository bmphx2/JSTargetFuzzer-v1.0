function f0() {
}
function f1() {
    return f0;
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.c = f0;
    this.h = a4;
}
const v6 = new F2(F2, F2);
const v7 = new F2(f1, f0);
const v8 = new F2(v7, v6);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    a12.c = v8;
    this.e = f0;
    this.d = a13;
}
const v14 = new F9(v6, v7, v7);
new F9(v6, v8, v8);
const v16 = new F9(v6, v8, v8);
new Uint8ClampedArray(1518);
new Uint8Array(9);
new Uint8ClampedArray(9);
function f26() {
}
-9.720861708692185 / f1(F2, 9, v7, -2147483649n, 4.0, 6n);
v14[0];
v8.d = 6n;
new Uint8Array(0);
let v44 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v46 = new Int32Array(127);
v44 /= v46;
new WeakSet();
let v49 = 0;
while (v49 < 6) {
    (Int32Array >> v14) && v16;
    v49++;
}
new BigInt64Array(2);
([5]).reverse();
