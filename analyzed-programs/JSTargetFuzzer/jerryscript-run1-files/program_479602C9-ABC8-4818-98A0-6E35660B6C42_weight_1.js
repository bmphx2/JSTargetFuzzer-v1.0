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
    const o29 = {
        "g": a10,
        [a10]: v5,
        set b(a14) {
            for (const v15 in this) {
                Object.defineProperty(this, 6, { writable: true, configurable: true, value: v15 });
                const v20 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
                try { v20("o"); } catch (e) {}
                const o24 = {
                    "maxByteLength": 536870912,
                };
                const v26 = new ArrayBuffer(257, o24);
                new Float32Array(v26);
            }
        },
    };
    return o29;
}
f8(v7, v5, v4, v5);
const v31 = f8(v5, v4, v4, v7);
const v32 = f8(v4, v5, v4, v4);
function f36(a37, a38, a39, a40) {
    const o51 = {
        "b": v4,
        [a40]: f36,
        [v4](a42, a43, a44, a45) {
            Object.defineProperty(a44, 268435456, { get: f8 });
            f8(v5, this, a40, v4);
            return f8;
        },
        "a": "268435440",
        ..."268435440",
        "e": "split",
    };
    return o51;
}
const v52 = f36("function", v7, v5, v32);
f36("split", v7, v52, v52);
f36("function", v31, v52, v4);
Symbol("multiline");
