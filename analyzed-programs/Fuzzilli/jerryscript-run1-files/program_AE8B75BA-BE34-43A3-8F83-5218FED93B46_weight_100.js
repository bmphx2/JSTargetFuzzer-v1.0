function f0() {
    let v1 = 0.23316334252999338;
    const o8 = {
        "g": v1,
        __proto__: "a",
        get h() {
            v1 = -1.7976931348623157e+308;
            return 1148961580;
        },
        "h": -1.7976931348623157e+308,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
function f12(a13, a14) {
    const o20 = {
        ...a14,
        ...a14,
        set c(a16) {
        },
        "a": a13,
        "d": a13,
        "h": f0,
    };
    return o20;
}
const v21 = f12(v10, v9);
f12(v9, v9);
f12(v10, v11);
-Infinity;
-Infinity;
try { v21["n"]("n", -3.77893027759695e+307); } catch (e) {}
new Uint8Array(3255);
new Uint8ClampedArray(1000);
new BigUint64Array(2);
