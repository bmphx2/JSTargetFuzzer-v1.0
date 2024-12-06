function f0() {
}
function f4(a5, a6) {
    const o14 = {
        ...512,
        [a6]: f0,
        "a": f0,
        "h": 512,
        valueOf(a8, a9, a10, a11) {
            let v13;
            try { v13 = a8["n"](a11, this, "n"); } catch (e) {}
            return v13;
        },
        "g": a5,
        "d": a5,
        256: a6,
    };
    return o14;
}
f4(268435440, 268435440);
f4(512, 41616);
f4(268435440, 41616);
new BigUint64Array(2045);
new Uint8Array(827);
const v26 = new Float32Array(3);
const o27 = {
    "apply": f0,
    "call": f0,
    "construct": f4,
    "defineProperty": f0,
    "deleteProperty": f0,
    "get": f0,
    "getOwnPropertyDescriptor": f0,
    "getPrototypeOf": f0,
    "has": f4,
    "ownKeys": f4,
    "preventExtensions": f0,
    "set": f4,
    "setPrototypeOf": f4,
};
new Proxy(v26, o27);
