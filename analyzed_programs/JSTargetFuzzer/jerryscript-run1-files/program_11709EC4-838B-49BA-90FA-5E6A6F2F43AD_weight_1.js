function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 536870912;
    this.a = 536870912;
}
const v3 = new F0();
const v4 = new F0(v3, v3, F0);
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    v4.a = a8;
    this.e = a9;
    a9.toStringTag = a8;
}
const v10 = new F6(v5, v5);
new F6(v10, v3);
new F6(v5, v5);
function f20(a21, a22) {
}
new Float64Array(8);
const o26 = {
};
new Proxy(Int32Array, o26);
