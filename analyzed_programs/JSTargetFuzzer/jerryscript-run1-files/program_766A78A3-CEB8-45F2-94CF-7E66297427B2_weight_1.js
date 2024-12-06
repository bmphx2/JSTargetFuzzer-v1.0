function f0() {
}
function f7(a8, a9) {
    const o16 = {
        "d": -1.7976931348623157e+308,
        __proto__: a8,
        "h": -1.7976931348623157e+308,
        "b": a9,
        "c": 9,
        n(a11, a12) {
            a9 /= NaN;
            return a11;
        },
    };
    return o16;
}
f7(9, 127);
f7(f7(NaN, 9), 127);
const v23 = new BigUint64Array(256);
try { v23.set(BigUint64Array); } catch (e) {}
const o31 = {
    o(a26, a27, a28, a29) {
        return `a`;
    },
};
("preventExtensions").toLowerCase();
