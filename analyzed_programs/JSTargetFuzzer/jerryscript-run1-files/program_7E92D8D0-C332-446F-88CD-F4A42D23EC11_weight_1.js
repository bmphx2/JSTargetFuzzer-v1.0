function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -14;
}
const v3 = new F0();
const v4 = new F0(v3, F0);
new F0();
new Date();
function f11(a12, a13, a14, a15) {
    const o20 = {
        o(a17, a18) {
            v3 || a18;
            a18.a = a13;
            return v3;
        },
        ["eNq"]: a12,
        "MIN_VALUE": v3,
        [a14]: f11,
        [a12]: a13,
        "f": a15,
        ...a14,
        "c": Date,
        ...v4,
        __proto__: a15,
        "d": "stack",
        ..."stack",
        "c": v4,
        "a": a14,
        [-2]: a14,
        ..."stack",
    };
    return o20;
}
f11(f11, "eNq", "eNq", "eNq");
f11(f11("stack", "0", "stack", "eNq"), "0", v4, "0");
function f27(a28, a29) {
    try { a28(a28, a28); } catch (e) {}
    Object.defineProperty(a29, a29, { configurable: true, set: f27 });
    return f27;
}
f27(f27, f27);
