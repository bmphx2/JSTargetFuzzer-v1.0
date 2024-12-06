const v0 = [];
function f10(a11, a12, a13) {
    const o22 = {
        "e": a13,
        "f": a11,
        [a11]: v0,
        ...a13,
        10: 2.220446049250313e-16,
        "a": 8,
        __proto__: a13,
        get b() {
            Object.defineProperty(v0, "e", { value: this });
            const o17 = {
                "maxByteLength": 146,
            };
            const v19 = new ArrayBuffer(1, o17);
            new Uint32Array(v19);
            return 2.220446049250313e-16;
        },
    };
    return o22;
}
f10(1806387611, 8, 16);
f10(16, 19226, 1806387611);
f10(19226, 1806387611, 2.2250738585072014e-308);
class C26 {
    constructor(a28, a29) {
    }
}
try { C26(C26, C26); } catch (e) {}
