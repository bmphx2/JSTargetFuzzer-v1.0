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
        "b": WeakSet,
        __proto__: a15,
        "c": a13,
        16: a13,
        "g": WeakSet,
        /*
        __proto__: a14,
        */
        "e": a16,
        "b": a16,
        "c": a16,
        [WeakSet]: v9,
        "f": a16,
        "g": 2147483647,
        8: a15,
        3: v9,
        "h": v4,
        0: a13,
        [-2]: F5,
        [v10]: v11,
        "h": v11,
        [v4]: v10,
        9: 2147483647,
    };
    return o17;
}
const v18 = f12(16, f12, 4096, 2147483647);
f12(4096, F5, 2147483647, 2147483647);
const v20 = f12(16, v10, 16, 4096);
v18 * v11;
v11.h;
v20[4096] = v20;
function f26() {
    const o27 = {
    };
    return o27;
}
([10000]).find(f26);
