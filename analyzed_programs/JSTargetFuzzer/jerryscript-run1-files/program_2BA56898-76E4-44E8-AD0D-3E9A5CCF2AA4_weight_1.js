function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 8;
    this.a = 8;
    this.e = 8;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v7 = new WeakMap();
function f8(a9, a10, a11, a12) {
    const o23 = {
        "g": a10,
        [a10]: v5,
        set b(a14) {
            for (const v15 in this) {
                Object.defineProperty(this, 6, { writable: true, configurable: true, value: v15 });
                const o18 = {
                    "maxByteLength": 536870912,
                };
                const v20 = new ArrayBuffer(257, o18);
                new Float32Array(v20);
            }
        },
    };
    return o23;
}
f8(v7, v5, v4, v5);
const v25 = f8(v5, v4, v4, v7);
const v26 = f8(v4, v5, v4, v4);
function f30(a31, a32, a33, a34) {
    const o45 = {
        "b": v4,
        [a34]: f30,
        [v4](a36, a37, a38, a39) {
            Object.defineProperty(a38, 268435456, { get: f8 });
            f8(v5, this, a34, v4);
            return f8;
        },
        "a": "268435440",
        ..."268435440",
        "e": "split",
    };
    return o45;
}
const v46 = f30("function", v7, v5, v26);
f30("split", v7, v46, v46);
f30("function", v25, v46, v4);
Symbol("multiline");
