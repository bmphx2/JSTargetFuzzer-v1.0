function f0() {
    const o10 = {
        __proto__: "undefined",
        p(a5, a6) {
            return -10;
        },
        1: -10,
        "d": "undefined",
        2: -12,
        "b": "undefined",
        [-12]: "undefined",
        ..."undefined",
        "e": -10,
    };
    return o10;
}
f0();
f0();
const v13 = f0();
const v16 = new Int32Array(3752);
const v20 = new Set();
for (let v21 = 0; v21 < 32; v21++) {
    v20["p" + v21] = v21;
}
const v25 = new Uint16Array(5);
const v28 = new Uint32Array(64);
const v30 = new WeakSet();
class C31 {
    static [v30] = v28;
    toString(a33, a34, a35) {
        try { a34["p"](...Uint32Array, a33, WeakSet, v25); } catch (e) {}
        return C31;
    }
    7 = v13;
}
new C31();
new C31();
new C31();
class C41 {
    constructor(a43, a44) {
        function f45() {
            return arguments;
        }
        const v47 = f45();
        function f48() {
            const o55 = {
                [v16](a50, a51, a52, a53) {
                    try { a51(a51); } catch (e) {}
                    return a50;
                },
                [this]: v16,
                ...v47,
            };
            return o55;
        }
        f48();
        f48();
    }
}
new C41(C41, C41);
