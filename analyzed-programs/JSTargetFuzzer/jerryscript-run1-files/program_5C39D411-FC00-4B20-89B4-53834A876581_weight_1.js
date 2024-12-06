function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 127;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o14 = {
        "b": v4,
        set f(a10) {
        },
        __proto__: v5,
        "a": a7,
        "e": v3,
        "g": a7,
        2506: v3,
        "c": v5,
        "h": a7,
    };
    return o14;
}
f6(v3, f6(v4, f6(v3, v5)));
new Map([[-9223372036854775808,-8,9187]]);
new F0(Promise);
