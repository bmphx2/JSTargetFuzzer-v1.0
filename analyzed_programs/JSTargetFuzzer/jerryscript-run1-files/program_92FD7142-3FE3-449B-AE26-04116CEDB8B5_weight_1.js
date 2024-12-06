new Int8Array(16);
new BigInt64Array(281);
new Uint32Array(10);
function f12() {
}
const v16 = [-1000000.0,f12,-807.6596022618603,-1000000.0];
const v17 = [v16,-1000000.0,v16,v16];
const v18 = [v17,f12,-807.6596022618603];
function* f22(a23, a24, a25, a26) {
    try { a25.padStart(a23, "object"); } catch (e) {}
    const o28 = {
        "construct": f12,
        "ownKeys": f12,
        "preventExtensions": f12,
    };
    new v17(v18, o28);
    yield* "object";
    return a23;
}
f22(-807.6596022618603, "U7O", "U7O", v17);
