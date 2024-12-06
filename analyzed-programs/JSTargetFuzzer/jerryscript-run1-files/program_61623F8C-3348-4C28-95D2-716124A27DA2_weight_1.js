const v4 = new WeakSet();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const t3 = 4096;
    t3.d = a8;
    this.c = v4;
    this.h = a8;
}
const v9 = new F5(16, F5);
const v10 = new F5(v9, 2147483647);
const v11 = new F5(2147483647, 4096);
function f12(a13, a14, a15, a16) {
    const o17 = {
        "d": v4,
        "a": a13,
        __proto__: a14,
        "e": a16,
        "b": a16,
        "c": a16,
        [WeakSet]: v9,
        "f": a16,
        "g": 2147483647,
        8: a15,
        "h": v11,
        [v4]: v10,
        9: 2147483647,
    };
    return o17;
}
f12(16, f12, 4096, 2147483647);
f12(4096, F5, 2147483647, 2147483647);
f12(16, v10, 16, 4096);
function f21() {
    const o22 = {
    };
    return o22;
}
([10000]).find(f21);
