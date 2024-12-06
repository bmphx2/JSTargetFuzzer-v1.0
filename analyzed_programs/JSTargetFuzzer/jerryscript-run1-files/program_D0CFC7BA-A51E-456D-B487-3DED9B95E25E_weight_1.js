const v2 = /a*?(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10*/gyiu;
const v4 = new Float32Array(4, 4);
const v7 = new Uint16Array(10, Uint16Array);
let v8 = 0;
const v10 = new Uint8ClampedArray(v8);
function f11(a12, a13, a14, a15) {
    Object.defineProperty(v2, "c", { writable: true, configurable: true, value: v2 });
    let v16;
    try { v16 = a15(a12, Uint16Array, 4, a13, a12); } catch (e) {}
    v8 = 4;
    a13 = v7;
    try { a13.includes(10); } catch (e) {}
    const o30 = {
        "f": a13,
        "a": v4,
        "d": false,
        get g() {
            return a13;
        },
        [false](a23, a24) {
            new Date();
            return a15;
        },
        "b": v8,
        __proto__: v10,
        "h": v7,
        "c": a14,
        [v16]: false,
    };
    return o30;
}
f11(4, v8, false, v8);
f11(4, v8, f11(10, v8, v8, 4), v8);
for (let v34 = 0; v34 < 32; v34++) {
}
for (let v35 = 0; v35 < 32; v35++) {
}
