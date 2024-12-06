function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 5;
}
const v3 = new F0();
new F0();
new F0();
for (let i12 = 0; i12 < 10; i12++) {
    v3.length = 0;
    v3[i12] %= 0;
}
const v25 = new BigUint64Array();
const v27 = new BigInt64Array(v25, BigUint64Array, v25);
try { v25.sort(v27); } catch (e) {}
