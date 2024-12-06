function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.f = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
}
const v15 = new F9(F1, v4, 20830, v5);
const v16 = new F9(v15, v5, 1633727880, v3);
new F9(f0, v3, 1633727880, v5);
const v18 = v16 + F9;
let v19 = 0;
while (v19 < 1) {
    for (const v22 in v16) {
        continue;
        Math.acos(515379625);
        Math.ceil(20830);
        3.0 >>> 20830;
        Math.cbrt(v18);
        v18 || -6;
        3.0 - -6;
        ~3.0;
    }
    v19++;
}
