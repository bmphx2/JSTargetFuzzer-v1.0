function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -2147483648;
    this.g = 268435440;
}
const v7 = new F3(-2147483648, F3);
const v8 = new F3(16, v7);
new F3(16, 268435440);
new Int16Array(121);
new BigUint64Array(256);
new BigInt64Array(2);
const v22 = [-6,1,128,959659090,-1073741824];
const o23 = {
};
const v25 = new Proxy(v22, o23);
const v27 = new BigUint64Array(v8, BigUint64Array, BigUint64Array);
let v28;
try { v28 = v27.set(); } catch (e) {}
v25.copyWithin().toString(v28);
