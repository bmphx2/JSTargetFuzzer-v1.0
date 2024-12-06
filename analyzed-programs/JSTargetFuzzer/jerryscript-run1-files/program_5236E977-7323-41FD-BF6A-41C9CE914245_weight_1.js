function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -488986451;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o12 = {
        "d": v5,
        "a": a8,
        o(a10, a11) {
            var c = a10;
            return a8;
        },
        "h": a8,
        [a8]: a7,
        5: a7,
        "c": F0,
    };
    return o12;
}
const v13 = f6(f6, v3);
const v14 = f6(v13, v13);
f6(v4, v3);
const v22 = Math.abs(Math);
v22 ** (-9.44001634896165e+306 * v14);
