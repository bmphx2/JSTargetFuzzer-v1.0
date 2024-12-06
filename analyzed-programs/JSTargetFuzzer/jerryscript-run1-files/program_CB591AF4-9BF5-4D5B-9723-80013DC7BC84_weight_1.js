const v2 = new Uint16Array(64);
new Int16Array(64);
new Float64Array(5);
function f9(a10, a11, a12) {
    const o21 = {
        toString(a14, a15, a16, a17) {
            for (let v18 = 0; v18 < 32; v18++) {
                "p" + v18;
                this[64] = v18;
            }
            return 64;
        },
        [a10]: v2,
        "g": Uint16Array,
        "a": Float64Array,
        "f": f9,
    };
    return o21;
}
f9(64, 64, 255);
f9(5, 64, 255);
f9(Uint16Array, 5, 5);
function f25() {
}
const v29 = [-1000000.0,f25,-807.6596022618603,-1000000.0];
const v30 = [v29,-1000000.0,0.014069366437978514,v29];
const v31 = [v30,f25,-807.6596022618603];
function* f35(a36, a37, a38, a39) {
    try { a38.padStart(a36, "object"); } catch (e) {}
    const o41 = {
        "construct": f25,
        "ownKeys": f35,
        "preventExtensions": f25,
    };
    const v43 = new Proxy(v31, o41);
    yield* v43;
    return a36;
}
f35(0.014069366437978514, "U7O", "U7O", v30);
