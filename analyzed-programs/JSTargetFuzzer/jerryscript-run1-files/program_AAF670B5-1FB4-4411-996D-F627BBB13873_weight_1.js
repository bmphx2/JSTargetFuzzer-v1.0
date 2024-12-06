function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -256;
}
new F0();
const v4 = new F0();
const v5 = new F0();
new Int8Array(1);
const v14 = new BigInt64Array(2);
new BigInt64Array(11);
try {
const t0 = 2;
t0(v4, BigInt64Array, v5, 2, BigInt64Array);
} catch (e) {}
v14[65535] &= 1;
new Uint8ClampedArray(4);
new Float64Array(1601);
new Int32Array(2);
