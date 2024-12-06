function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 4294967295;
    this.f = 4294967295;
}
const v3 = new F0();
const v4 = new F0(F0, F0);
const v5 = new F0(v3);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a11;
}
new F9(v3, -268435456, v3, F0);
new F9(v5, -235, v4);
new F9(v3, 7, v5);
const v20 = new BigInt64Array([-6n]);
for (const v21 of v20) {
}
