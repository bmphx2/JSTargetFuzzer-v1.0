function f6(a7, a8, a9, a10) {
    const o11 = {
        __proto__: a7,
        "e": a7,
        ...a9,
        ...a7,
        "d": 1073741825,
        [a7]: 1073741825,
        "g": a9,
        "h": -2147483648,
        [a8]: a8,
        "b": a10,
        "c": 28921,
        ...a7,
    };
    return o11;
}
f6(16, 1073741825, 536870887, 418486879);
const v13 = f6(418486879, 536870887, 1073741825, 418486879);
const v14 = f6(1073741825, -2147483648, 16, 418486879);
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 16;
    this.d = a17;
    a17.b = a18;
}
new F15(1073741825, v14);
new F15(418486879, v14);
new F15(28921, v13);
("588268209")["substring"](-4096, 0);
const o32 = {
    m(a29, a30, a31) {
        super.c = Date;
        return Date;
    },
};
Reflect.apply(o32.m);
