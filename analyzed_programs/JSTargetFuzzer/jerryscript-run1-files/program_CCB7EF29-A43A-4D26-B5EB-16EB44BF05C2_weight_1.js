const v7 = new Set();
function f8(a9, a10, a11, a12) {
    const o19 = {
        ..."toPrimitive",
        "c": a12,
        set b(a14) {
            const o15 = {
            };
            new a12(Set, o15);
            delete v7[255];
        },
        ["floor"]: a11,
        "d": -3.0,
        ..."floor",
        "b": "toPrimitive",
        "e": Set,
        ...a12,
        "f": a10,
        __proto__: "floor",
        ["toPrimitive"]: -0.03899884472807358,
        "f": -0.03899884472807358,
        "g": -0.03899884472807358,
    };
    return o19;
}
const v20 = f8("toPrimitive", "65537", -0.03899884472807358, "65537");
const v21 = f8("floor", "65537", 2.944806189060875, "toPrimitive");
const v22 = f8("65537", "toPrimitive", -0.03899884472807358, "toPrimitive");
function f23(a24, a25) {
    const o30 = {
        "c": v7,
        set b(a27) {
            Object.defineProperty(this, 0, { configurable: true, enumerable: true, get: f8 });
            super.e = this;
            v21[v22] = a27;
            new WeakSet();
        },
        "f": "65537",
        ["toPrimitive"]: v7,
        [v22]: f8,
        "d": a25,
        "b": -0.03899884472807358,
        ...v20,
        __proto__: v21,
    };
    return o30;
}
f23(v21, "65537");
f23(-0.03899884472807358, "toPrimitive");
f23(v7, "toPrimitive");
Number();
