new BigUint64Array(2487);
const v5 = new Uint16Array(2888);
new BigInt64Array(27);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 2487;
    this.e = 2888;
    this.d = BigInt64Array;
}
const v14 = new F9(BigUint64Array, 2888, BigUint64Array);
new F9(2487, 27, BigUint64Array);
const v16 = new F9(2487, 2487, v14);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 2888;
}
const v21 = new F17(Uint16Array, v16);
new F17(v21, v16);
new F17(F9, v16);
const v26 = new Int8Array(2);
const v29 = new BigUint64Array(300);
const o30 = {
    ...v29,
    228: BigInt64Array,
    [300]: v5,
    "c": Int8Array,
    "e": v5,
    "f": 27,
    [v26]: 2,
};
try { o30.getFloat32(); } catch (e) {}
