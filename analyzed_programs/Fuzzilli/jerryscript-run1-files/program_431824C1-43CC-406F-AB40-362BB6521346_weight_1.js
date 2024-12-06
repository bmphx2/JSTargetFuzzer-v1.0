function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
}
const v7 = new F3(308279542, -352538520);
const v8 = new F3(308279542, 308279542);
const v9 = new F3(-352538520, 308279542);
function f13(a14, a15, a16) {
    const o17 = {
        __proto__: v8,
        "g": -10,
        "d": a15,
        "c": -10,
        9: v9,
        "a": 308279542,
        "f": v7,
        "b": -10,
        "e": -975743129,
        "h": v7,
        [a15]: a14,
        2147483648: 41434,
        ...a14,
        413295471: -10,
    };
    return o17;
}
f13(f13(f13(v7, -352538520, -975743129), v9, -10), 308279542, -975743129);
v7.g |= -975743129;
const v22 = Symbol.toPrimitive;
const o29 = {
    [v22]() {
        this[319502511];
        this[3646];
        return -352538520;
    },
};
