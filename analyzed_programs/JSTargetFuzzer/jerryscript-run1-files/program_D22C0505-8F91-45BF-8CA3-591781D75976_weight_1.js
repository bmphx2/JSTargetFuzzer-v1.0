function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 268435439;
}
const v3 = new F0();
const v4 = new F0(F0, F0);
const v5 = new F0();
const v9 = [v3,v5,1000000.0,1000000000000.0,v3,1000000.0];
for (let i11 = 0; i11 < 9; i11++) {
    new Uint8ClampedArray(249);
    new Uint8ClampedArray(2);
    new BigInt64Array(7);
}
const v26 = [0.7639206423833381,v4,v4,1000000.0];
[v26,1000000000000.0,v5,1000000000000.0,v26];
const v36 = new Float32Array(538);
const v39 = new Float64Array(14);
new Float32Array(257);
Float64Array instanceof Float32Array;
const o49 = {
    valueOf() {
        let v46 = super.d;
        v46 |= print;
        v9.__proto__ = this;
        Object.defineProperty(v39, 1000000.0, { get: print });
        v36[Symbol.search] = 2n;
        return 257;
    },
};
try { v36.entries(); } catch (e) {}
