new Set();
new Int32Array(127);
new Float64Array(100);
new BigUint64Array(127);
function f17() {
}
const v21 = [-1000000.0,f17,-807.6596022618603,-1000000.0];
const v22 = [v21,-1000000.0,0.014069366437978514,v21];
const v23 = [v22,f17,-807.6596022618603];
function* f27(a28, a29, a30, a31) {
    try { a30.padStart(a28, "setSeconds"); } catch (e) {}
    const o33 = {
        "construct": f17,
        "ownKeys": f17,
        "preventExtensions": f17,
    };
    new Proxy(v23, o33);
    yield* "setSeconds";
    return a28;
}
f27(-807.6596022618603, "U7O", "U7O", v22);
