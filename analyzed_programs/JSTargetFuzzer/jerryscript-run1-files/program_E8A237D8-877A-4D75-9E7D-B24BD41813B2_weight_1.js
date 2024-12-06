function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 9007199254740992;
    this.d = 9007199254740992;
    this.b = 9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o8 = {
        "d": a7,
        "h": v5,
        __proto__: a7,
        10: a7,
        "e": v4,
        [-2]: a7,
        "g": a7,
        "f": a7,
        12: v4,
        [v3]: v4,
        "c": F0,
    };
    return o8;
}
f6(v3);
f6(v5);
f6(v5);
Date.parse(3584);
