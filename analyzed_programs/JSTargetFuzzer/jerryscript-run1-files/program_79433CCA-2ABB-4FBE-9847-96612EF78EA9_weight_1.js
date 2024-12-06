new Uint8Array(1);
new Int16Array(7);
new Uint16Array(2);
function f12() {
}
const v16 = [-1000000.0,f12,-807.6596022618603,-1000000.0];
const v17 = [v16,-1000000.0,0.014069366437978514,v16];
const v18 = [v17,f12,-807.6596022618603];
function* f22(a23, a24, a25, a26) {
    try { a25.padStart(f12, "object"); } catch (e) {}
    const o28 = {
        "construct": a24,
        "ownKeys": a24,
        "preventExtensions": f12,
    };
    new Proxy(v18, o28);
    yield* "object";
    return "object";
}
f22(-807.6596022618603, "U7O", "U7O", v17);
