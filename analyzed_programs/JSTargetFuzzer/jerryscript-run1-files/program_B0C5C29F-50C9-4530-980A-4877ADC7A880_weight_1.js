function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 3;
    F0.d = 3;
    F0.g = 3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a11;
    this.b = a12;
    this.toStringTag = a12;
}
new F0(-128, v4);
new F9(F0, v3);
new F9(-128, v4);
const v18 = new Int8Array(231);
v18[v18] /= -128;
v5[536870887] >>= -128;
let v20 = -1024;
const v21 = --v20;
Math.imul(F9, F9);
Math.acos(v21);
Math.cbrt(v20);
for (let v25 = 0; v25 < 5; v25++) {
    v18["subarray"]("subarray", v25, v25);
}
