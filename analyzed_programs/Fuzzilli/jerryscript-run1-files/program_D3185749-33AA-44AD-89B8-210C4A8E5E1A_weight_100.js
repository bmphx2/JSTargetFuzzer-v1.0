const v2 = new Uint8Array(1);
new Float64Array(1000);
new BigUint64Array(2364);
const v11 = new Uint16Array(4096);
new Int32Array(41);
new Uint8ClampedArray(257);
try { v2(Float64Array, Uint16Array); } catch (e) {}
function f19(a20, a21, a22, a23) {
    const o24 = {
        "f": a20,
        "g": Uint8ClampedArray,
        6: v11,
    };
    return o24;
}
const v25 = f19(257, 257, Uint16Array, 2364);
f19(1000, 257, 2364, 2364);
f19(1, 41, v25, 41);
