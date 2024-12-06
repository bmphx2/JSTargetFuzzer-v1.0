function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a11;
    this.e = -2147483648;
}
new F9(1, 268435440, 65535, 16n);
const v16 = new F9(268435440, 58906n, 65535, -5n);
new F9(65535, 1, v16, -5n);
const v20 = new BigInt64Array(BigInt64Array);
try { v20.filter(BigInt64Array); } catch (e) {}
