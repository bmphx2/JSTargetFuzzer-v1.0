function f0() {
}
function f4() {
    return 15823;
}
function f5(a6) {
    const o14 = {
        __proto__: 15823,
        "c": a6,
        "b": f4,
        m(a8, a9, a10, a11) {
            let v7 = this;
            v7.__proto__ = v7;
            f4 instanceof f0;
            return ++v7;
        },
        ...a6,
    };
    return o14;
}
const v15 = f5(65535);
const v16 = f5(15823);
f5(65535);
v15[v16];
const o22 = {
    "e": 6,
    "g": f4,
    "a": v16,
};
o22.toString = f4;
