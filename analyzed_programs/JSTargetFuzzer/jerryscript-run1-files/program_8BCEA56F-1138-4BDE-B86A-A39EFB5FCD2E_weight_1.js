function f0() {
}
new Uint32Array(512);
new Int32Array(128);
const v9 = new Float32Array(869);
let v11;
try { v11 = ("b").endsWith("b", 128); } catch (e) {}
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v9;
    this.h = v11;
}
new F12(869, 869, 512, 512);
new Float32Array(512, v11, 869, 512);
new F12(v11, 512, 128, v11);
new Object(3);
function f26() {
}
const v30 = [-1000000.0,f26,-807.6596022618603,-1000000.0];
const v31 = [v30,-1000000.0,0.014069366437978514,v30];
const v32 = [v31,f26,-807.6596022618603];
function* f36(a37, a38, a39, a40) {
    try { a39.padStart(a37, "object"); } catch (e) {}
    const o42 = {
        "construct": f26,
        "ownKeys": f26,
        "preventExtensions": a39,
    };
    new Proxy(v32, o42);
    yield* "object";
    return Float32Array;
}
f36(-807.6596022618603, "U7O", "U7O", v31);
