new Uint8Array(129);
new Int32Array(6);
new BigUint64Array(4);
new WeakSet();
function f14() {
}
const v18 = [-1000000.0,f14,-807.6596022618603,-1000000.0];
const v19 = [v18,-1000000.0,0.014069366437978514,v18];
const v20 = [v19,f14,-807.6596022618603];
function* f24(a25, a26, a27, a28) {
    let v29;
    try { v29 = a27.padStart(a25, "object"); } catch (e) {}
    const o30 = {
        "construct": a26,
        "ownKeys": f14,
        "preventExtensions": a25,
    };
    new Proxy(v20, o30);
    yield* v29;
    return a25;
}
f24(-807.6596022618603, "U7O", "U7O", v19);
