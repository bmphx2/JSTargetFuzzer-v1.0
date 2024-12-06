const v1 = new Date();
function f2() {
    return Date;
}
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a10;
    this.f = a9;
    this.c = a10;
}
const v11 = new F6(-1737026080, -2128229345, -2128229345);
const v12 = new F6(-1737026080, -2128229345, -1737026080);
const v13 = new F6(-2128229345, 1000, -2128229345);
function f14(a15, a16, a17) {
    const o22 = {
        2: Date,
        get h() {
            Object.defineProperty(v12, 1289550845, { writable: true, enumerable: true, set: f2 });
            for (let v19 = 0; v19 < 32; v19++) {
                v13["p" + v19] = v19;
            }
            return this;
        },
        "b": v1,
        "c": v12,
        "d": a15,
        __proto__: v13,
    };
    return o22;
}
f14(v1, -1737026080, -2128229345);
f14(v12, 1000, f14(-2128229345, -2128229345, -2128229345));
function f26(a27, a28, a29) {
    const o30 = {
        "a": f14,
        "g": v12,
        9: a27,
        [-2128229345]: a29,
    };
    return o30;
}
f26(v11, f26(v12, v13, v11), v1);
f26(v11, v11, f26);
