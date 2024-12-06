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
new Uint16Array(5);
const v28 = new Uint32Array(64);
const v30 = new WeakSet();
class C31 {
    static [v30] = v28;
    7 = v13;
}
new C31();
new C31();
new C31();
class C35 {
    constructor(a37, a38) {
        function f39() {
            return arguments;
        }
        const v41 = f39();
        function f42() {
            const o49 = {
                [v16](a44, a45, a46, a47) {
                    try { a45(a45); } catch (e) {}
                    return a44;
                },
                [this]: v16,
                ...v41,
            };
            return o49;
        }
        f42();
        f42();
    }
}
new C35(C35, C35);
