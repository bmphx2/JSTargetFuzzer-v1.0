function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v5;
}
new Set();
function f9() {
    return Set;
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
    this.f = this;
    this.e = a13;
}
const v16 = new F10(v4, v5, v4, v3);
const v17 = new F10(v16, v16, v3, v3);
new F10(v3, v4, v17, v16);
function f19() {
}
new Uint8Array(0);
let v33 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v35 = new Int32Array(127);
v33 /= v35;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
