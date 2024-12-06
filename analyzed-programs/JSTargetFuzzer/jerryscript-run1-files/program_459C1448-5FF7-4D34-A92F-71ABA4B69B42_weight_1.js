class C3 {
    m(a5) {
        const v6 = typeof -6;
        v6 === "object";
        function F9(a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = a11;
        }
        const v14 = new F9("object", 220168633, a5);
        const v15 = new F9(2.220446049250313e-16, a5, v14);
        new F9(v14, v15, v14);
        return v6;
    }
}
const v17 = new C3();
new C3();
const v19 = new C3();
function f23(a24, a25, a26) {
    const o32 = {
        ...v19,
        "h": a25,
        __proto__: a24,
        valueOf(a28, a29) {
            a29 << a29;
            return v17;
        },
        [a26]: a25,
        "b": a26,
        "a": v19,
        5: 889.9598633661662,
        "e": 220168633,
        ...v17,
        ...a24,
        "d": Infinity,
        "c": 2.220446049250313e-16,
        "d": 2.220446049250313e-16,
        [a24]: v17,
        "f": a25,
        "a": a24,
    };
    return o32;
}
f23(v19, v17, 2.220446049250313e-16);
f23(v19, v17, 5.0);
f23(v17, v19, 2.220446049250313e-16);
const v38 = ("find").slice(45103);
const o39 = {
    "e": v38,
    9: 220168633,
    "c": -6,
};
const o40 = {
    ...v38,
};
