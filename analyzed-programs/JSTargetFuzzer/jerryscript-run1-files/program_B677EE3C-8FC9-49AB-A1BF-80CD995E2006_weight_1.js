function f6(a7, a8, a9, a10) {
    const o14 = {
        3: -2,
        [-2]: a10,
        "e": a9,
        get g() {
            this[1] = this;
            const v13 = new WeakMap();
            return v13;
        },
        [a7]: -4294967296,
        6: 455948947,
    };
    return o14;
}
f6(455948947, 64, -4294967296, 10);
const v16 = f6(-4294967296, 10, 981054334, 455948947);
f6(-4294967296, 981054334, 455948947, -4294967296);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a20;
    this.b = a21;
    this.g = 455948947;
}
const v22 = new F18(455948947, v16);
const v23 = new F18(64, v22);
new F18(981054334, v23);
const v26 = ("-1604200484").replace;
try { v26(); } catch (e) {}
