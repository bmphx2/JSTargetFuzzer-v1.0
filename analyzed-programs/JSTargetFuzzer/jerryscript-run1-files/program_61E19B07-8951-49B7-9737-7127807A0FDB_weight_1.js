const v2 = new Uint8ClampedArray(4096);
const v5 = new Uint16Array(16);
const v8 = new Float64Array(257);
function f9() {
    return 4096;
}
function f10(a11, a12, a13, a14) {
    const o30 = {
        "d": a12,
        "f": 16,
        "a": Uint16Array,
        __proto__: v8,
        "b": f9,
        "e": v8,
        "g": v5,
        "c": v2,
        ...v2,
        p(a16, a17, a18) {
            const v19 = -a16;
            const v20 = typeof 4096;
            Object.defineProperty("string", 536870889, { enumerable: true, get: f9 });
            a14.__proto__;
            a14[268435441] = "string";
            a14[a12] *= 16;
            try {
            } catch(e23) {
                function f24() {
                    return e23;
                }
            }
            try { a17(a13); } catch (e) {}
            v20 === "string";
            typeof v19 === "undefined";
            return v19;
        },
    };
    return o30;
}
f10(257, f10(257, f10(4096, v2, 4096, 257), 4096, 257), 16, 257);
const v36 = new Float32Array(1000);
v36.reverse();
