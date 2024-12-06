new Array(1988);
Array.prototype -= 1988;
try { Array.isArray(Array); } catch (e) {}
new Uint16Array(2);
new Float32Array(16);
new Uint32Array(9);
for (let v21 = 0; v21 < 32; v21++) {
    Array["p" + v21] = v21;
}
function f28() {
}
const v32 = [-1000000.0,f28,-807.6596022618603,-1000000.0];
const v33 = [v32,-1000000.0,0.014069366437978514,v32];
const v34 = [v33,f28,-807.6596022618603];
function* f38(a39, a40, a41, a42) {
    try { a41.padStart(a39, "object"); } catch (e) {}
    const o44 = {
        "construct": f28,
        "ownKeys": f28,
        "preventExtensions": f28,
    };
    new Proxy(v34, o44);
    yield* "object";
    return a39;
}
f38(-807.6596022618603, "U7O", "U7O", v33);
