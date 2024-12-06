function f0() {
}
const v1 = [f0,f0];
const v2 = [f0,v1,v1,v1];
[v1,v2,v1,f0,v2];
const v6 = new BigUint64Array(4);
new Int16Array(1);
new Int16Array(256);
async function* f13(a14, a15, a16) {
    try { v6.map(a15); } catch (e) {}
    Object.defineProperty(a15, Int16Array, { configurable: true, set: f0 });
    const v18 = await a14;
    yield* v18;
    return v18;
}
f13(BigUint64Array, f13, 256);
const v22 = new Int32Array(7);
new Float32Array(13);
const v28 = new BigInt64Array(255);
new Int32Array(7, 13);
const o36 = {
    "a": v22,
    "d": v28,
    "c": 4294967296n,
    "b": -216427537,
};
