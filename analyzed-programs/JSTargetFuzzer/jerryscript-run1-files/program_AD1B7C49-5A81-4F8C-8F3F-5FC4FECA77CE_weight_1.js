function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 536870888;
    this.f = 536870888;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a11;
    a11.f = 4;
}
new F9(v5, v3, v5, -1732502172);
new F9(v5, v3, v3, 4);
new F9(v4, v3, v3, -1732502172);
const v23 = new Int8Array(63);
function f24(a25, a26) {
    v23["some"](a25);
    return Int8Array;
}
new Promise(f24);
