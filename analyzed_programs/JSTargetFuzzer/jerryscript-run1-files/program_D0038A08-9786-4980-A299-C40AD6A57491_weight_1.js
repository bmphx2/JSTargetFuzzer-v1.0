function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4294967297;
    this.f = 4294967297;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a12;
    this.d = a12;
}
new F9(v4, "rCS", v3);
new F9(v3, "rCS", v5);
const v16 = new F9(v3, "rCS", v5);
function f17() {
    return v16;
}
function f18() {
}
new Uint8Array(0);
let v32 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v34 = new Int32Array(127);
v32 /= v34;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
