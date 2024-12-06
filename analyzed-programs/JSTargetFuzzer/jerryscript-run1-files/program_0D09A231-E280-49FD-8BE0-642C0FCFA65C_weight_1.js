new Uint8Array(2523);
new Uint16Array(1);
new Int32Array(Uint8Array);
new Int8Array(257);
new Int32Array(2523);
new BigUint64Array(127);
function f18() {
}
const v22 = [-1000000.0,f18,-807.6596022618603,0.014069366437978514];
const v23 = [v22,-1000000.0,0.014069366437978514,v22];
[v23,f18,-807.6596022618603];
function* f28(a29, a30, a31, a32) {
    try { a31.padStart(a29, "object"); } catch (e) {}
    const o34 = {
        "construct": a32,
        "ownKeys": a30,
        "preventExtensions": a29,
    };
    new Proxy(v23, o34);
    yield* "dotAll";
    return a29;
}
f28(-807.6596022618603, "U7O", "U7O", v23);
