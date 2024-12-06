function F0() {
    if (!new.target) { throw 'must be called with new'; }
    F0.g = -11;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o20 = {
        "a": a8,
        ...v4,
        [v4]: a7,
        [F0](a10, a11) {
            function f12(a13, a14) {
                const v15 = F0 >= a13;
                v15 ? f6 : v5;
                new WeakSet();
                return v15;
            }
            f12(f12, a11);
            return v5;
        },
    };
    return o20;
}
f6(v3, v3);
const v23 = f6(v3, f6(v3, v4));
function f27() {
    return f27;
}
function f28() {
    return f28;
}
const v31 = new Uint8ClampedArray(v23);
try {
    Object.defineProperty(v31, 2, { configurable: true, enumerable: true, get: f27, set: f28 });
} catch(e32) {
} finally {
}
