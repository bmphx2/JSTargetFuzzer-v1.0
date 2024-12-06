new Uint8ClampedArray(0);
new BigInt64Array(2649);
new Int16Array(3);
new BigUint64Array(7);
new Uint32Array(2850);
new Float32Array(236);
function f18() {
}
const v22 = [-1000000.0,f18,-807.6596022618603,-1000000.0];
const v23 = [v22,-1000000.0,0.014069366437978514,v22];
const v24 = [v23,f18,-807.6596022618603];
function* f28(a29, a30, a31, a32) {
    try { a31.padStart(a29, "object"); } catch (e) {}
    const o34 = {
        "construct": f28,
        "ownKeys": f18,
        "preventExtensions": a31,
    };
    new Proxy(v24, o34);
    yield* "object";
    return Int16Array;
}
f28(-807.6596022618603, "U7O", "U7O", v23);
