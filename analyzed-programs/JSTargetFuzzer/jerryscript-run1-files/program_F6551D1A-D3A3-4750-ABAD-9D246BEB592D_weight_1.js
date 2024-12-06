function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = false;
    this.e = false;
    this.f = false;
}
const v3 = new F1();
const v4 = new F1();
new F1();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F1;
}
new F9(v3, 6, 6, v4);
new F9(v3, 6, 6, v4);
new F9(v4, v4, 6, v3);
function f18() {
}
new Uint8Array(0);
const v31 = [-8,4294967295,148900462];
const v36 = +53494;
v31 + v31;
Math.sin(v36);
let v39 = RegExp.bind("2147483647", v31);
const v41 = new Int32Array(127);
v39 /= v41;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
