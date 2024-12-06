function f0() {
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
}
const v6 = new F2(undefined, f0);
const v7 = new F2(f0, undefined);
const v8 = new F2(undefined, f0);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v8;
    this.h = v7;
}
new F9(v6, v7, v8, v7);
new F9(v7, v7, v6, v8);
new F9(v8, v7, v7, v7);
function F20(a22) {
    if (!new.target) { throw 'must be called with new'; }
}
const v23 = new F20(F20);
const v26 = Array();
const v27 = v23[268435456];
switch (8) {
    case v27:
        break;
    case v26:
        break;
}
function F29(a31, a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = F2;
}
const v33 = new F29(-12, F9);
new F29(699621397, v33);
new F29(-12, F2);
function f36() {
}
new Uint8Array(0);
let v50 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v52 = new Int32Array(127);
v50 /= v52;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
