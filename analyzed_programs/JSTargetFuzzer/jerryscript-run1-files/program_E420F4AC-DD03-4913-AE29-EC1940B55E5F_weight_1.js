new Int16Array(128);
new Int32Array(9);
const v11 = new Uint8ClampedArray(128);
function f12() {
}
const v16 = [-1000000.0,f12,-807.6596022618603,-1000000.0];
const v17 = [v16,-1000000.0,0.014069366437978514,v16];
const v18 = [v17,f12,-807.6596022618603];
function* f22(a23, a24, a25, a26) {
    try { a25.padStart(a23, "object"); } catch (e) {}
    const o28 = {
        "construct": f12,
        "ownKeys": f12,
        [a24]: v11,
        ..."dotAll",
        "g": "-679752205",
        "d": -1000000.0,
        "e": a25,
        "preventExtensions": f22,
    };
    new Proxy(v18, o28);
    yield* "object";
    return a26;
}
f22(-807.6596022618603, "U7O", "U7O", v17);
