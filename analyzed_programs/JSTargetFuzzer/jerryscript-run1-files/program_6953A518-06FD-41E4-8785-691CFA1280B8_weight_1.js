function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -8;
    this.a = -8;
    this.h = -8;
}
new F0();
new F0();
new F0();
new Float64Array(6);
new Int16Array(89);
new Uint8Array(1653);
const v17 = new Int32Array(7);
new Float32Array(1653);
const v23 = new BigInt64Array(255);
new Int32Array(1653, 13);
const o31 = {
    "a": v17,
    "d": v23,
    "c": 4294967296n,
    "b": -216427537,
};
