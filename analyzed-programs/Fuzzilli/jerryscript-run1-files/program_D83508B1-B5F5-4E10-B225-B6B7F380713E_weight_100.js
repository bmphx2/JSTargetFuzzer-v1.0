function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -28520;
    this.d = -28520;
    -F0;
    try { F0(); } catch (e) {}
    this.g = -28520;
}
new F0();
const v9 = new F0();
const v10 = new F0();
const v13 = new Int16Array(4);
const v16 = new BigInt64Array(129);
v13[Symbol.unscopables] = 4;
v13[v16] = v9;
try { v10(4, v16, Int16Array); } catch (e) {}
new BigInt64Array(4);
const v25 = new BigInt64Array(14);
v25.subarray(129, 129);
