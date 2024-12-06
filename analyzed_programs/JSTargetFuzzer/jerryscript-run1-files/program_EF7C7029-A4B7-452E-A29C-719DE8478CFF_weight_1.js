new Int8Array(4096);
new Int8Array(64);
new BigUint64Array(7);
new Int32Array(257);
new Float32Array(127);
new Uint8Array(3890);
function f18() {
}
const v23 = [257,-1000000.0,0.014069366437978514,[-1000000.0,f18,-807.6596022618603,-1000000.0]];
const v24 = [v23,f18,-807.6596022618603];
function* f28(a29, a30, a31, a32) {
    try { a31.padStart(a29, "object"); } catch (e) {}
    const o34 = {
        "construct": f18,
        "ownKeys": f18,
        "preventExtensions": f18,
    };
    new Proxy(v24, o34);
    yield* "object";
    return a29;
}
f28(-807.6596022618603, "U7O", "U7O", v23);
