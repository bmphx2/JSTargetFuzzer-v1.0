function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -5;
    this.b = -5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a11;
    this.a = v5;
}
const v15 = new F9(v4, -62551n, v4, v3);
new F9(v15, -65537n, v15, v3);
new F9(v5, -62551n, v3, v15, -65537n);
new Set();
new BigInt64Array(1361);
new Uint8Array(2022);
new print(129);
-128n ^ -128n;
