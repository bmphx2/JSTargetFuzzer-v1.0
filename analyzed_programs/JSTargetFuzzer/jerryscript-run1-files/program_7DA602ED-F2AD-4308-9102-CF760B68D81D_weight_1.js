new Array(1988);
Array.prototype -= 1988;
try { Array.isArray(Array); } catch (e) {}
new Uint16Array(2);
new Float32Array(16);
new Uint32Array(9);
function f25() {
}
const v29 = [-1000000.0,f25,-807.6596022618603,-1000000.0];
const v30 = [v29,-1000000.0,0.014069366437978514,v29];
const v31 = [v30,f25,-807.6596022618603];
function* f35(a36, a37, a38, a39) {
    try { a38.padStart(a36, "object"); } catch (e) {}
    const o41 = {
        "construct": f25,
        "ownKeys": f25,
        "preventExtensions": f25,
    };
    new Proxy(v31, o41);
    yield* "object";
    return a36;
}
f35(-807.6596022618603, "U7O", "U7O", v30);
